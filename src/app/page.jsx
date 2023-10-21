'use client'

import { useState } from "react"
import { AddBar } from "@/components/AddBar"
import { BoxList } from "@/components/BoxList"
import { Task } from "@/components/Task"
import { Tabs } from "@/components/Tabs"

export default function Home() {
  const [list, setList] = useState([])
  const [currentCategory, setCurrentCategory] = useState('pendente');
  const tasksToShow = filterTasksByCategory(currentCategory);

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
        <div className="px-5 py-10 min-h-[500px] w-[500px] mx-auto rounded bg-slate-800">
          <AddBar 
            list={list}
            setList={setList}
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
                    list={list}
                    setList={setList}
                    task={task}
                  />
                )
            ))}
          </BoxList>
        </div>
      </div>
    </div>
  )
}
