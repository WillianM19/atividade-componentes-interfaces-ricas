interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function Textbox(props: InputProps) {
  return (
    <div>
      <textarea
        value={props.value}
        placeholder={props.placeholder || "Placeholder"}
        onChange={(e) => props.onChange?.(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-800/30"
      />
    </div>
  );
}
