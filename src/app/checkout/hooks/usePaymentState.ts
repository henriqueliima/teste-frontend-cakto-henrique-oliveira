import { useState } from "react";
import { checkoutSchema } from "../schemas/CheckoutSchema";
import { z } from "zod";

export type FormData = z.infer<typeof checkoutSchema>;

export const usePaymentState = () => {
  const [paymentMethod, setPaymentMethod] =
    useState<FormData["paymentMethod"]>("PIX");
  const [selectedInstallments, setSelectedInstallments] = useState<number>(1);

  return {
    paymentMethod,
    setPaymentMethod,
    selectedInstallments,
    setSelectedInstallments,
  };
};
