"use client";

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { productMock } from "@/mocks/productMock";
import { useCheckoutForm } from "../hooks/useCheckoutForm";
import { usePaymentState, type FormData } from "../hooks/usePaymentState";
import { usePaymentCalculation } from "../hooks/usePaymentCalculation";
import { useCheckoutSubmit } from "../hooks/useCheckoutSubmit";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    control,
    errors,
    paymentRegister,
    parcelasRegister,
  } = useCheckoutForm();
  const {
    paymentMethod,
    setPaymentMethod,
    selectedInstallments,
    setSelectedInstallments,
  } = usePaymentState();
  const { summary } = usePaymentCalculation(
    paymentMethod,
    selectedInstallments
  );
  const { isLoading, onSubmit } = useCheckoutSubmit();
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        label="Nome completo"
        {...register("name")}
        placeholder="Preencha seu nome"
        className={`border border-[#919EAB33] ease-in-out duration-150 focus:ring-1 outline-none rounded-md shadow-sm transition w-full focus:ring-white px-3 py-2 text-sm ${
          errors.name && "border-red-500 focus:border-red-500"
        }`}
      />
      {errors.name && (
        <p className="text-red-600 text-sm">{errors.name.message}</p>
      )}
      <Controller
        name="cpf"
        control={control}
        render={({ field }) => (
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-2">
              CPF
            </label>
            <IMaskInput
              mask="000.000.000-00"
              value={field.value}
              onAccept={(value) => field.onChange(value)}
              onBlur={field.onBlur}
              placeholder="Preencha seu CPF"
              className={`border border-[#919EAB33] ease-in-out duration-150 focus:ring-1 outline-none rounded-md shadow-sm transition w-full focus:ring-white px-3 py-2 text-sm ${
                errors.cpf && "border-red-500 focus:border-red-500"
              }`}
            />
          </div>
        )}
      />
      {errors.cpf && (
        <p className="text-red-600 text-sm">{errors.cpf.message}</p>
      )}
      <div className="mt-4">
        <div className="flex items-center justify-start border-[#919EAB33] border-1 py-2 px-2 md:border-0">
          <Input
            type="radio"
            value="PIX"
            {...paymentRegister}
            checked={paymentMethod === "PIX"}
            onChange={(e) => {
              setPaymentMethod(e.target.value as FormData["paymentMethod"]);
              paymentRegister.onChange(e);
            }}
          />
          <p className="px-2">PIX (Taxa 0% 🔥)</p>
        </div>
        <div className="flex items-center justify-start border-[#919EAB33] border-1 py-2 mt-2 px-2 md:border-0">
          <Input
            type="radio"
            value="CARD"
            {...paymentRegister}
            checked={paymentMethod === "CARD"}
            onChange={(e) => {
              setPaymentMethod(e.target.value as FormData["paymentMethod"]);
              paymentRegister.onChange(e);
            }}
          />
          <p className="px-2">Parcelas</p>
        </div>
      </div>

      {paymentMethod === "CARD" && (
        <div className="mb-4 mt-2">
          <Select
            label="Parcelas"
            {...parcelasRegister}
            value={selectedInstallments}
            onChange={(e) => {
              const num = Number(e.target.value);
              setSelectedInstallments(num);
              parcelasRegister.onChange(e);
            }}
            options={Array.from({ length: 12 }, (_, i) => i + 1).map((num) => ({
              value: num,
              label: `${num}x`,
            }))}
            errorMessage={errors.parcelas?.message}
          />
        </div>
      )}

      <section className="border-t pt-4 my-6">
        <p>Produto: R$ {summary.totalAmount.toFixed(2)}</p>
        <p>Taxa Cakto: R$ {summary.feeAmount.toFixed(2)}</p>
        <p className="font-semibold">
          Total: R$ {(summary.totalAmount + summary.feeAmount).toFixed(2)}
        </p>
        <hr className="my-2" />
        <p>
          {productMock.producer} recebe: R$ {summary.netAmount.toFixed(2)}
        </p>
      </section>

      <Button className="uppercase" type="submit" isLoading={isLoading}>
        Finalizar compra
      </Button>
    </form>
  );
};

export default CheckoutForm;
