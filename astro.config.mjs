// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	// Subdominio gratuito de Netlify (blueprint §12). Si el nombre estuviera
	// ocupado al crear el sitio en el paso 11, éste es el único lugar donde
	// cambiarlo: de aquí salen canonical, OG, sitemap y robots.txt.
	site: "https://ana-george-studio.netlify.app",
	output: "static",
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
		routing: { prefixDefaultLocale: false },
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "es",
				locales: { es: "es-MX", en: "en-US" },
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
