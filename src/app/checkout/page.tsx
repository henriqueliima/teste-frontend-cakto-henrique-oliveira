"use client";

import Image from "next/image";
import CheckoutForm from "./components/FormCheckout";

const Checkout = () => {
  return (
    <section className="bg-white-100 flex items-center justify-center p-8 max-w-[800px] min-h-screen mx-auto">
      <div className="w-full flex flex-col bg-white shadow rounded p-8">
        <h2 className="text-xl font-bold color-primary">
          Curso de Marketing Digital 2025
        </h2>
        <span>De R$ 497,00 por R$ 297,00</span>
        <div className="flex my-5">
          <Image
            className="pr-1"
            src="/checkout/user-data.svg"
            alt="Next.js logo"
            width={24}
            height={24}
          />
          <h3 className="text-lg font-bold">Seus dados</h3>
        </div>
        <CheckoutForm />
      </div>
    </section>
  );
};

export default Checkout;
