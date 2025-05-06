import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./components/Button";
import Input from "./components/Input";
import TaskCard from "./components/TaskCard";
import Textbox from "./components/Textbox";

interface TaskType {
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const { register, handleSubmit, reset } = useForm<{
    title: string;
    description: string;
  }>();

  const onSubmit = (data: { title: string; description: string }) => {
    const newTask: TaskType = {
      title: data.title,
      description: data.description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    reset();
  };

  return (
    <div className="flex flex-col items-center mt-60 h-screen">
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-800/30 rounded-md mt-3 w-[60vw] p-4 flex flex-col gap-8"
      >
        <h1 className="text-xl font-bold">Nova tarefa</h1>

        <Input placeholder="Título da tarefa" {...register("title", { required: true })} />
        <Textbox placeholder="Descrição (opcional)" {...register("description")} />

        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Adicionar Tarefa</span>
        </Button>
      </form>

      <div className="w-[60vw] mt-3 flex gap-4 flex-wrap">
        {tasks.map((task, index) => (
          <TaskCard key={index} title={task.title} description={task.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
