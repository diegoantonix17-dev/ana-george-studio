/**
 * Cloudflare Web Analytics — gratuito, sin cookies y sin banner de consentimiento.
 *
 * PARA ACTIVARLO: crear una cuenta gratuita en Cloudflare, agregar el sitio en
 * "Web Analytics" (no hace falta que el sitio esté alojado en Cloudflare) y
 * pegar aquí el token. Es el único cambio necesario.
 *
 * El token no es un secreto: viaja en el HTML que ve cualquier visitante, así
 * que vive en el repo y no en una variable de entorno — meterlo en un `.env`
 * daría a entender que hay que protegerlo (blueprint §10).
 */
export const cloudflareToken = "e8ca76ba36274b83a5bd0420fb34eb71";

/**
 * Mientras el token siga siendo el placeholder no se emite el `<script>`.
 *
 * El blueprint (§9 paso 11) deja el beacon puesto con el valor placeholder,
 * razonando que "simplemente no reporta nada". Pero sí carga: son peticiones a
 * un tercero en cada visita, a cambio de cero datos, en un sitio que
 * self-hostea hasta las tipografías para evitar exactamente eso. Emitirlo sólo
 * cuando hay token real no cambia nada al activarlo y mantiene el sitio libre
 * de terceros hasta entonces.
 */
export const analyticsActivo =
	cloudflareToken.length > 0 && !cloudflareToken.startsWith("PENDIENTE");
