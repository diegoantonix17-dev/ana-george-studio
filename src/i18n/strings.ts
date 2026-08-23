export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

/**
 * Texto de interfaz únicamente. El contenido de negocio (precios, nombres de
 * servicio, testimonios) vive en `src/content/`, nunca aquí.
 */
export const strings = {
	es: {
		"site.name": "Ana George Studio",
		"site.tagline": "Estudio de belleza en Tijuana",
		"nav.servicios": "Servicios",
		"nav.testimonios": "Testimonios",
		"nav.ubicacion": "Ubicación",
		"nav.contacto": "Contacto",
		"nav.label": "Navegación principal",
		"cta.whatsapp": "Agenda por WhatsApp",
		"lang.switchTo": "Switch to English",
		"a11y.skipToContent": "Saltar al contenido",
	},
	en: {
		"site.name": "Ana George Studio",
		"site.tagline": "Beauty studio in Tijuana",
		"nav.servicios": "Services",
		"nav.testimonios": "Testimonials",
		"nav.ubicacion": "Location",
		"nav.contacto": "Contact",
		"nav.label": "Main navigation",
		"cta.whatsapp": "Book on WhatsApp",
		"lang.switchTo": "Cambiar a español",
		"a11y.skipToContent": "Skip to content",
	},
} as const;

export type StringKey = keyof (typeof strings)["es"];

export function t(locale: Locale, key: StringKey): string {
	return strings[locale][key];
}

/** Prefijo de URL de cada idioma — `es` es el locale por defecto, sin prefijo. */
export const localePath: Record<Locale, string> = {
	es: "/",
	en: "/en/",
};
