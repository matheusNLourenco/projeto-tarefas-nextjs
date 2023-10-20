'use client'

import { AddBar } from "@/components/AddBar"
import { BoxList } from "@/components/BoxList"
import { Info } from "@/components/Info"
import { Task } from "@/components/Task"
import { Tabs } from "@/components/Tabs"
import { useState } from "react"

export default function Home() {
  const [list, setList] = useState([])
  const [textInput, setTextInput] = useState('')
  const [currentCategory, setCurrentCategory] = useState('pendente');
  const tasksToShow = filterTasksByCategory(currentCategory);

  function handleAddButton() {
    if(textInput.trim() === '') return
    
    setList([
      ...list,
      {
        id: list.length + 1,
        label: textInput,
        completed: false
      }
    ])
    setTextInput('')
  }

  function handleChangeCheckbox(id) {
    const updatedList = [...list]
    
    updatedList.find(task => task.id === id ? task.completed = !task.completed : false)
    
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

  function handleDeleteButton(id) {
    setList(list.filter((task) => task.id !== id))
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="px-5 py-10 min-h-[500px] w-[500px] mx-auto rounded bg-slate-800">
          <AddBar 
            textInput={textInput}
            setTextInput={setTextInput}
            onClick={handleAddButton}
          />

          <Tabs 
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            filterTasksByCategory={filterTasksByCategory}
          />
          
          <BoxList>
            {tasksToShow.map((task) => (
                (
                  <Task
                    key={ task.id }
                    task={task}
                    onChange={ () => handleChangeCheckbox(task.id) }
                    onClick={ () => handleDeleteButton(task.id) }
                  />
                )
            ))}
          </BoxList>
              
          <Info
            info='Lista de tarefas vazia.'
            currentCategory={currentCategory}
            filterTasksByCategory={filterTasksByCategory}
          />
        </div>
      </div>
    </div>
  )
}
