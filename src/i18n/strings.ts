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
		"hero.eyebrow": "Tijuana, Baja California",
		"hero.tagline": "Cejas, pestañas, faciales y masajes",
		"hero.intro":
			"Micropigmentación, extensiones de pestañas y tratamientos de spa, con precios claros y trabajo real. Agenda tu cita por WhatsApp.",
		"hero.photoAlt":
			"Interior del estudio Ana George: camillas de tratamiento, lámpara de trabajo y una vela encendida",
		"notFound.title": "Página no encontrada",
		"notFound.body": "La página que buscas no existe o cambió de dirección.",
		"notFound.back": "Volver al inicio",
		"servicios.titulo": "Servicios y precios",
		"precio.servicio": "Servicio",
		"precio.precio": "Precio",
		"precio.setInicial": "Set inicial",
		"precio.retoque": "Retoque",
		"precio.moneda": "MXN",
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
		"hero.eyebrow": "Tijuana, Baja California",
		"hero.tagline": "Brows, lashes, facials and massage",
		"hero.intro":
			"Brow micropigmentation, eyelash extensions and spa treatments, with clear pricing and real results. Book your appointment on WhatsApp.",
		"hero.photoAlt":
			"Interior of Ana George Studio: treatment beds, a work lamp and a lit candle",
		"notFound.title": "Page not found",
		"notFound.body":
			"The page you are looking for does not exist or has moved.",
		"notFound.back": "Back to home",
		"servicios.titulo": "Services and pricing",
		"precio.servicio": "Service",
		"precio.precio": "Price",
		"precio.setInicial": "Initial set",
		"precio.retoque": "Touch-up",
		"precio.moneda": "MXN",
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
