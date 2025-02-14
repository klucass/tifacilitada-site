// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Define your collection(s)
const materiais = defineCollection({
    loader: file("src/data/materiais.json"),
    schema: ({image}) => z.object({
        id: z.string(),
        name: z.string(),
        price: z.string(),
        description: z.string(),
        body: z.string(),
        image: image(),
        enderecoCheckout: z.string()
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { materiais };