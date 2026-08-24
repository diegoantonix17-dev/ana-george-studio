/**
 * Datos de contacto del negocio — fuente única de verdad.
 *
 * Los usan `WhatsAppButton`, `Ubicacion`, `Footer` y el bloque JSON-LD de
 * `BaseLayout`. Están aquí y no repetidos en cada plantilla por la misma razón
 * por la que los precios viven en `src/content/servicios/` (blueprint §3): un
 * dato de negocio se corrige en un solo lugar o termina divergiendo.
 *
 * NOTA (blueprint §20.2, riesgo #1): el negocio marcó 664 595 4430 como *no
 * confirmado* todavía como el número que atiende el bot de WhatsApp. El flyer
 * oficial lo imprime como su WhatsApp, pero eso no prueba que sea el del bot.
 * Si resulta ser otro, `whatsappNumero` es la única línea que hay que cambiar.
 */

/** Código de país 52 + 10 dígitos. Formato wa.me vigente desde 2021 (sin el "1" extra). */
export const whatsappNumero = "526645954430";

export const whatsappUrl = `https://wa.me/${whatsappNumero}`;

/** El mismo número, con el formato con el que la gente lo lee en Tijuana. */
export const telefonoVisible = "664 595 4430";

export const direccion = {
	calle: "Tolsa 4",
	colonia: "Obrera 2da Sección",
	codigoPostal: "22624",
	ciudad: "Tijuana",
	estado: "Baja California",
	pais: "MX",
} as const;

/** Una sola línea, tal como debe leerse e indexarse. */
export const direccionCompleta = `${direccion.calle}, ${direccion.colonia}, C.P. ${direccion.codigoPostal}, ${direccion.ciudad}, ${direccion.estado}`;

/** Embed de Google Maps sin API key (blueprint §9 paso 7). */
export const mapaEmbedUrl =
	"https://www.google.com/maps?q=Tolsa+4,+Obrera+2da+Secci%C3%B3n,+22624+Tijuana,+B.C.&output=embed";

export const redes = [
	{
		nombre: "Facebook",
		usuario: "AGStudio_Mx",
		url: "https://facebook.com/AGStudio_Mx",
	},
	{
		nombre: "Instagram",
		usuario: "microblading.agstudio",
		url: "https://instagram.com/microblading.agstudio",
	},
] as const;
