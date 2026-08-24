#!/usr/bin/env node
/**
 * Smoke test de la superficie SEO.
 *
 * JavaScript plano a propósito: sin TypeScript y sin dependencias del proyecto
 * más allá del `fetch` global de Node (blueprint §9 paso 10). Corre contra un
 * servidor de preview local:
 *
 *   node scripts/seo-audit.mjs [baseUrl]
 *
 * Sale con código 1 e imprime una línea `MISSING:` por cada cosa que falte.
 */

const base = (process.argv[2] ?? "http://localhost:4321").replace(/\/$/, "");

/** Rutas que deben ser indexables y estar completas. */
const rutas = ["/", "/en/"];

const problemas = [];
const falta = (ruta, que) => problemas.push(`MISSING: ${ruta} — ${que}`);

const primerGrupo = (html, regex) => {
	const m = html.match(regex);
	return m ? m[1].trim() : null;
};

const titulos = new Map();

for (const ruta of rutas) {
	const url = base + ruta;
	let respuesta;

	try {
		respuesta = await fetch(url);
	} catch (error) {
		falta(ruta, `no responde (${error.message})`);
		continue;
	}

	if (respuesta.status !== 200) {
		falta(ruta, `status HTTP ${respuesta.status}, se esperaba 200`);
		continue;
	}

	const html = await respuesta.text();

	const titulo = primerGrupo(html, /<title>([^<]*)<\/title>/);
	if (!titulo) falta(ruta, "<title>");
	else titulos.set(ruta, titulo);

	const descripcion = primerGrupo(
		html,
		/<meta\s+name="description"\s+content="([^"]*)"/,
	);
	if (!descripcion) falta(ruta, '<meta name="description">');

	const canonical = primerGrupo(
		html,
		/<link\s+rel="canonical"\s+href="([^"]*)"/,
	);
	if (!canonical) falta(ruta, '<link rel="canonical">');

	console.log(
		`${ruta} → 200 · title ${titulo ? "ok" : "—"} · description ${descripcion ? "ok" : "—"} · canonical ${canonical ?? "—"}`,
	);
}

// Dos idiomas con el mismo <title> compiten entre sí en resultados de búsqueda.
const vistos = new Map();
for (const [ruta, titulo] of titulos) {
	if (vistos.has(titulo)) {
		problemas.push(
			`MISSING: ${ruta} — <title> duplicado, idéntico al de ${vistos.get(titulo)}`,
		);
	}
	vistos.set(titulo, ruta);
}

if (problemas.length > 0) {
	console.error("");
	for (const problema of problemas) console.error(problema);
	console.error(`\n${problemas.length} problema(s) de SEO.`);
	process.exit(1);
}

console.log("\nSEO audit OK.");
