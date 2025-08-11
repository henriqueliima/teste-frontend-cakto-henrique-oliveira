import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {
  label?: string;
  errorMessage?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mt-2">
            {label}
          </label>
        )}

        <input ref={ref} {...props} className={`${className}`} />
      </>
    );
  }
);

Input.displayName = "Input";
