import type { Locale } from "./strings";

/**
 * Texto alternativo de cada foto, por nombre de archivo.
 *
 * Vive aquí y no en `src/content/servicios/*.json` porque el esquema de la
 * colección (blueprint §4) sólo guarda rutas de archivo, y porque el alt es
 * texto descriptivo bilingüe — la misma clase de contenido que el resto de
 * este directorio. Toda foto usada por un componente debe tener una entrada:
 * un alt vacío falla el gate de accesibilidad del paso 8.
 */
const photoAlts: Record<string, Record<Locale, string>> = {
	"estudio-interior.jpg": {
		es: "Interior del estudio Ana George: camillas de tratamiento, lámpara de trabajo y una vela encendida",
		en: "Interior of Ana George Studio: treatment beds, a work lamp and a lit candle",
	},
	"cejas-antes-despues-bold-latin.jpg": {
		es: "Antes y después de cejas con técnicas Bold Brows y Latin Brows",
		en: "Before and after brows using the Bold Brows and Latin Brows techniques",
	},
	"microblading-antes-despues-18-meses.jpg": {
		es: "Antes y después de microblading: diseño de ceja semipermanente que dura hasta 18 meses",
		en: "Microblading before and after: semi-permanent brow design lasting up to 18 months",
	},
	"cejas-proceso-tecnico.jpg": {
		es: "Detalle técnico del microblading, mostrando cómo el trazo rellena, aporta volumen y define la ceja",
		en: "Close-up of the microblading technique, showing how each stroke fills, adds volume and defines the brow",
	},
	"secuencia-4-pasos-cejas.jpg": {
		es: "Secuencia de cuatro pasos del procedimiento de cejas: antes, trazo de diseño, pigmentación y resultado",
		en: "Four-step brow procedure sequence: before, design outline, pigmentation and final result",
	},
	"ceja-pestana-antes-despues.jpg": {
		es: "Antes y después de diseño de cejas con extensiones de pestañas",
		en: "Before and after of brow design with eyelash extensions",
	},
	"mosaico-15-estilos-pestanas.jpg": {
		es: "Mosaico con quince estilos de extensiones de pestañas, cada uno rotulado con su nombre",
		en: "Grid of fifteen eyelash extension styles, each labelled with its name",
	},
};

export function altFor(fileName: string, locale: Locale): string {
	const entry = photoAlts[fileName];
	if (!entry) {
		throw new Error(
			`Falta el texto alternativo de "${fileName}" en src/i18n/photoAlts.ts`,
		);
	}
	return entry[locale];
}
