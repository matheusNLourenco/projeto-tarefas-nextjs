export function Task({task, list, setList}) {
    function handleChangeCheckbox(id) {
        const updatedList = [...list]
        
        updatedList.find(task => task.id === id ? task.completed = !task.completed : false)
        
        setList(updatedList)
      }
    
    function handleDeleteButton(id) {
        setList(list.filter((task) => task.id !== id))
    }
    
    return (
        <li className="relative flex items-center justify-between p-2 text-white rounded bg-slate-900">
            <div className={`${task.completed ? 'line-through' : ''}`}>{ task.label }</div>
            <div>
                <input type="checkbox" checked={task.completed} onChange={ () => handleChangeCheckbox(task.id) }/>
            </div>
            <div className="absolute text-2xl text-red-700 cursor-pointer -right-1 -top-5" onClick={ () => handleDeleteButton(task.id) }>
                x
            </div>
        </li>
    )
}