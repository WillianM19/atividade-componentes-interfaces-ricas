export default function Checkbox(props: {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={(e) => props.onChange?.(e.target.checked)}
        className="w-4 h-4 rounded-md border border-gray-800/30"
      />
    </div>
  );
}
