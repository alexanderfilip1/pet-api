const { z } = require("zod");

const animalSchema = z.object({
  animal: z.string().min(3, "Animal must be at least 3 characters long"),
  random: z
    .number()
    .int()
    .refine((value) => value === 0 || value === 1, {
      message: "Random must be either 0 or 1",
    }),
  breed: z
    .string()
    .nullable()
    .transform((val) => (val === "" ? null : val))
    .refine((val) => val === null || val.length >= 3, {
      message: "Breed must be at least 3 characters long if provided",
    })
    .optional(),
});

module.exports = animalSchema;
