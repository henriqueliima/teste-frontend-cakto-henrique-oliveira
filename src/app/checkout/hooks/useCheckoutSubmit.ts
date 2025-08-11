import { useState } from "react";
import { checkoutSchema } from "../schemas/CheckoutSchema";
import { z } from "zod";

type FormData = z.infer<typeof checkoutSchema>;

export const useCheckoutSubmit = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
    } catch (error) {
      console.error("Erro ao finalizar compra:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    onSubmit,
  };
};
