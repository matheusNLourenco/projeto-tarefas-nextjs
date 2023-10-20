export function Task({task, onChange, onClick}) {
    return (
        <li className="relative flex items-center justify-between p-2 text-white rounded bg-slate-900">
            <div className={`${task.completed ? 'line-through' : ''}`}>{ task.label }</div>
            <div>
                <input type="checkbox" checked={task.completed} onChange={ onChange }/>
            </div>
            <div className="absolute text-2xl text-red-700 cursor-pointer -right-1 -top-5" onClick={onClick}>
                x
            </div>
        </li>
    )
}