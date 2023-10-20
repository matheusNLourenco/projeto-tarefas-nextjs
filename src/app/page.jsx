'use client'

import { ListItem } from "@/components/ListItem"
import { useState } from "react"

export default function Home() {
  const [list, setList] = useState([])
  const [label, setLabel] = useState('')
  const [taskIdCounter, setTaskIdCounter] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('pendente');
  const tasksToShow = filterTasksByCategory(currentCategory);

  function handleChangeInput(e) {
    setLabel(e.target.value)
  }

  function handleAddTask() {
    if(label.trim() === '') return

    const newList = [...list, {id: taskIdCounter, label, completed: false}]
  
    setList(newList)
    setLabel('')
    setTaskIdCounter(taskIdCounter + 1)
  }

  function handleChangeCheckbox(id) {
    const updatedList = [...list]
    const index = updatedList.findIndex(task => task.id === id)
    updatedList[index].completed = !updatedList[index].completed

    setList(updatedList)
  }

  function filterTasksByCategory(category) {
    return list.filter((task) => {
      if (category === "concluido") {
        return task.completed;
      } else if (category === "pendente") {
        return !task.completed;
      }
      
      return true;
    });
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="px-5 py-10 mx-auto rounded bg-slate-800 w-96">
          <div className="flex gap-4 mb-4">
            <input type="text" className="w-full p-4 text-white border border-green-400 rounded outline-none bg-slate-900"  placeholder="Qual a tarefa ?" onChange={handleChangeInput} />
            <button className="px-2 py-4 text-white bg-green-400 rounded hover:bg-green-500" onClick={handleAddTask}>Adicionar</button>
          </div>
          <div className="flex gap-4 mb-4">
            <button
              className={`relative w-full p-2 border-b-2 text-white ${currentCategory === 'pendente' ? 'border-green-400' : 'border-slate-950'}`}
              onClick={() => setCurrentCategory("pendente")}
            >
              Pendentes {filterTasksByCategory('pendente').length ? <span className="absolute top-0 right-0 w-[20px] h-[20px] text-sm text-white bg-red-500 rounded-[100%]">{filterTasksByCategory('pendente').length}</span> : ''}
            </button>
            <button
              className={`relative w-full p-2 border-b-2 text-white ${currentCategory === 'concluido' ? 'border-green-400' : 'border-slate-950'}`}
              onClick={() => setCurrentCategory("concluido")}
            >
              Concluídas {filterTasksByCategory('concluido').length ? <span className="absolute top-0 right-0 w-[20px] h-[20px] text-sm text-white bg-red-500 rounded-[100%]">{filterTasksByCategory('concluido').length}</span> : ''}
            </button>
            {/* Adicione mais botões/abas para outras categorias, se necessário */}
          </div>
          <div>
            <ul className="space-y-2">
              {tasksToShow.length ? tasksToShow.map((item) => (
                (
                  <ListItem
                    label={ item.label }
                    isCompleted={ item.completed }
                    onChange={ () => handleChangeCheckbox(item.id) }
                  />
                )
              )) 
              : 
              <p className="text-center text-white">Lista de tarefas vazia</p>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
