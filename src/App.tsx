import Input from "./components/Input"
import Textbox from "./components/Textbox"


function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Lista de Tarefas</h1>

      <div className="border border-gray-800/30 rounded-md mt-3 w-[60vw] min-h-[40vh] p-4">
        <h1 className="text-xl font-bold">Nova tarefa</h1>
        <Input />
        <Textbox />
      </div>
    </div>
  )
}

export default App
