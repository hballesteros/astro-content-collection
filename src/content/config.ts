import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string().max(50,"Maximo de caracteres para el titulo"),
        description: z.string(),
        date: z.date(),
        active: z.boolean(),
        author: z.string(),
        image: z.string(),
        category: z.string(),
    })
})

export const collections = { blog }