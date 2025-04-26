import Checkbox from "../Checkbox";

export default function TaskCard() {
    return (
        <div className="border border-gray-800/30 rounded-md p-4 flex flex-col gap-4 flex-1">
            <div className="flex gap-2 items-center">
                <Checkbox />
                <h1 className="text-md font-bold">Titulo da tarefa</h1>
            </div>
            <p>Descrição da tarefa</p>
        </div>
    )
}