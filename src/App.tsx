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
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm<{
    title: string;
    description: string;
  }>();

  const onSubmit = (data: { title: string; description: string }) => {
    const newTask: TaskType = {
      title: data.title,
      description: data.description,
      completed: false,
    };

    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = newTask;
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    reset();
  };

  const handleEdit = (index: number) => {
    const task = tasks[index];
    setValue("title", task.title);
    setValue("description", task.description);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setTasks(tasks.filter((_task, i) => i !== index));
    if (editingIndex === index) {
      reset();
      setEditingIndex(null);
    }
  };

  return (
    <div className="flex flex-col items-center mt-60 h-screen">
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-800/30 rounded-md mt-3 w-[60vw] p-4 flex flex-col gap-8"
      >
        <h1 className="text-xl font-bold">
          {editingIndex !== null ? "Editar tarefa" : "Nova tarefa"}
        </h1>

        <Input placeholder="Título da tarefa" {...register("title", { required: true })} />
        <Textbox placeholder="Descrição (opcional)" {...register("description")} />

        <Button>
          <span>{editingIndex !== null ? "Salvar Edição" : "Adicionar Tarefa"}</span>
        </Button>
      </form>

      <div className="w-[60vw] mt-3 flex gap-4 flex-wrap">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
