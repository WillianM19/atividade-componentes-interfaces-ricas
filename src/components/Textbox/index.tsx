import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextboxProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textbox = forwardRef<HTMLTextAreaElement, TextboxProps>(({ placeholder, ...rest }, ref) => {
  return (
    <div>
      <textarea
        ref={ref}
        placeholder={placeholder || "Placeholder"}
        className="w-full p-2 rounded-md border border-gray-800/30"
        {...rest}
      />
    </div>
  );
});

export default Textbox;
