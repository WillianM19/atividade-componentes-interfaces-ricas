export default function Button(props: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className="bg-slate-900 cursor-pointer hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-md"
    >
      {props.children}
    </button>
  )
}