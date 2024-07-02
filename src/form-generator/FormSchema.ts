import { z } from 'zod';

export const postSchema = z.object({
    headline: z
        .string()
        .min(3, 'Minimum 3 characters')
        .max(50, 'Maximum 50 characters'),
    content: z
        .string()
        .min(10, 'Minimum 10 characters')
        .max(500, 'Maximum 500 characters'),
});

export type PostData = z.infer<typeof postSchema>;
