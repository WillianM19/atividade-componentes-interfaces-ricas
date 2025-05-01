import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import TaskCard from "./components/TaskCard";
import Textbox from "./components/Textbox";

interface taskType {
  title: string
  description: string
  completed: boolean
}

function App() {

  const [tasks, setTasks] = useState<taskType[]>([])

  const handleCreateTask = () => {
    setTasks([...tasks, {title: "Nova tarefa", description: "Descrição", completed: false}])
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>

      <div className="border border-gray-800/30 rounded-md mt-3 w-[60vw] p-4 flex flex-col gap-8">
        <h1 className="text-xl font-bold">Nova tarefa</h1>
        <Input placeholder="Titulo da tarefa" />
        <Textbox placeholder="Descrição (opcional)" />
        <Button onClick={handleCreateTask}>
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

      <div className="w-[60vw] mt-3 flex gap-4 flex-wrap">
        {tasks.map((task) => (
          <TaskCard title={task.title} description={task.description} />
        ))
        }
        <TaskCard title="Exemplo de tarefa 2" description="Descrição da tarefa 2" />
      </div>
    </div>
  );
}

export default App;
