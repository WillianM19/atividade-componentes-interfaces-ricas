import Button from "./components/Button";
import Input from "./components/Input";
import TaskCard from "./components/TaskCard";
import Textbox from "./components/Textbox";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>

      <div className="border border-gray-800/30 rounded-md mt-3 w-[60vw] min-h-[40vh] p-4 flex flex-col gap-8">
        <h1 className="text-xl font-bold">Nova tarefa</h1>
        <Input placeholder="Titulo da tarefa" />
        <Textbox placeholder="Descrição (opcional)" />
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Adicionar Tarefa</span>
        </Button>
      </div>

      <div className="w-[60vw] mt-3 flex gap-4">
        <TaskCard title="Exemplo de tarefa 1" description="Descrição da tarefa 1" />
        <TaskCard title="Exemplo de tarefa 2" description="Descrição da tarefa 2" />
      </div>
    </div>
  );
}

export default App;
