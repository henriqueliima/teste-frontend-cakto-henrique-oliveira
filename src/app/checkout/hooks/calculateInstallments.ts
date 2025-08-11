import { Installment } from "../types/TypeChekout";

export function CalculateInstallments(
  value: number,
  maxInstallments: number
): Installment[] {
  const parcelas: Installment[] = [];
  for (let i = 1; i <= maxInstallments; i++) {
    const percentageRate = i === 1 ? 3.99 : 4.99 + 2 * (i - 1);
    const totalAmount = parseFloat(
      (value * (1 + percentageRate / 100)).toFixed(2)
    );
    const installmentAmount = parseFloat((totalAmount / i).toFixed(2));
    parcelas.push({ installment: i, installmentAmount, totalAmount });
  }

  return parcelas;
}
