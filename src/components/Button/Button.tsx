import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loading } from "../Loading/Loading";

type ButtonVariant = "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "aling-center block bg-[#0F7864] duration-300 disabled:opacity-60 ease-in-out font-bold hover:bg-[#0b6856] hover:shadow-button-hover rounded-md shadow-sm text-white xs:text-sm transition w-full px-4 py-3 text-base",
};

export function Button({
  variant = "primary",
  isLoading = false,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`flex justify-center ${variantClasses[variant]} ${className}`}
    >
      {isLoading && <Loading />}
      {children}
    </button>
  );
}
