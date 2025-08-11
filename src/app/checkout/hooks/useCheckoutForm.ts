import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "../schemas/CheckoutSchema";
import { z } from "zod";

type FormData = z.infer<typeof checkoutSchema>;

export const useCheckoutForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      cpf: "",
      paymentMethod: "PIX",
      parcelas: 1,
    },
  });

  const paymentRegister = register("paymentMethod");
  const parcelasRegister = register("parcelas", { valueAsNumber: true });

  return {
    register,
    handleSubmit,
    control,
    errors,
    paymentRegister,
    parcelasRegister,
  };
};
