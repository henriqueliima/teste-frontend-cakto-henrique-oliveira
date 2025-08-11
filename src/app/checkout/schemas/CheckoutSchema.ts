import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(1, "Preencha seu nome"),
  cpf: z
    .string()
    .min(1, "Preencha seu CPF")
    .refine(
      (val) => /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/.test(val),
      "Formato CPF inválido"
    )
    .transform((val) => val.replace(/\D/g, "")),
  paymentMethod: z.enum(["PIX", "CARD"]),
  parcelas: z
    .number()
    .min(1, "Mínimo 1 parcela")
    .max(12, "Máximo 12 parcelas")
    .optional(),
});
