import { SelectHTMLAttributes, forwardRef } from "react";

type SelectProps = {
  label?: string;
  errorMessage?: string;
  className?: string;
  options: Array<{ value: string | number; label: string }>;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, errorMessage, className = "", options, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mt-2">
            {label}
          </label>
        )}

        <select
          ref={ref}
          {...props}
          className={`border border-[#919EAB33] ease-in-out duration-150 focus:ring-1 outline-none rounded-md shadow-sm transition w-full focus:ring-white px-3 py-2 text-sm ${className}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
