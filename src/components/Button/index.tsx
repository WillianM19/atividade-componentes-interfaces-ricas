export default function Button(props: {
  children: React.ReactNode;
  onClick?: () => void;
  noBackground?: boolean;
}) {
  return (
    <button
      onClick={props.onClick}
      className={`${!props.noBackground && "bg-slate-900 hover:bg-slate-800"} cursor-pointer text-white font-bold py-2 rounded-md flex justify-center itens-center gap-2`}
    >
      {props.children}
    </button>
  );
}
