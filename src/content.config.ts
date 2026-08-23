import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const bilingual = z.object({ es: z.string(), en: z.string() });

const servicioItem = z.object({
	nombre: bilingual,
	precio: z.number().positive(),
	precioRetoque: z.number().positive().optional(),
	notaAdicional: bilingual.optional(),
});

const servicios = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/servicios" }),
	schema: z.object({
		categoria: bilingual,
		orden: z.number().int().nonnegative(),
		fotos: z.array(z.string()).default([]),
		items: z.array(servicioItem).min(1),
	}),
});

const testimonios = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/testimonios" }),
	schema: z.object({
		testimonios: z.array(
			z.object({
				texto: z.string(),
				autor: z.string(),
				fuente: z.literal("Facebook"),
			}),
		),
	}),
});

export const collections = { servicios, testimonios };
