import { productMock } from "@/mocks/productMock";
import { CalculateInstallments } from "./calculateInstallments";
import { checkoutSchema } from "../schemas/CheckoutSchema";
import { z } from "zod";

type FormData = z.infer<typeof checkoutSchema>;

export const usePaymentCalculation = (
  paymentMethod: FormData["paymentMethod"],
  selectedInstallments: number
) => {
  const totalAmount = productMock.currentPrice;
  const installmentsInfo = CalculateInstallments(
    totalAmount,
    selectedInstallments
  );
  const selectedInstallmentInfo = installmentsInfo.find(
    (p) => p.installment === selectedInstallments
  );
  const cardFeeAmount = selectedInstallmentInfo
    ? parseFloat((selectedInstallmentInfo.totalAmount - totalAmount).toFixed(2))
    : 0;
  const feeAmount = paymentMethod === "CARD" ? cardFeeAmount : 0;
  const netAmount = parseFloat((totalAmount - feeAmount).toFixed(2));
  const savings = paymentMethod === "PIX" ? cardFeeAmount : 0;
  const summary = { totalAmount, feeAmount, netAmount, savings };

  return {
    totalAmount,
    installmentsInfo,
    selectedInstallmentInfo,
    cardFeeAmount,
    feeAmount,
    netAmount,
    savings,
    summary,
  };
};
