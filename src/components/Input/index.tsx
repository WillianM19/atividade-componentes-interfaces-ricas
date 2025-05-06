import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, ...rest }, ref) => {
  return (
    <div>
      <input
        ref={ref}
        placeholder={placeholder || "Placeholder"}
        className="w-full p-2 rounded-md border border-gray-800/30"
        {...rest}
      />
    </div>
  );
});

export default Input;
