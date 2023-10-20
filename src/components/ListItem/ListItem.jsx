export function ListItem({label, isCompleted, onChange}) {
    return (
        <li className="relative flex items-center justify-between p-2 text-white rounded bg-slate-900">
            <div className={`${isCompleted ? 'line-through' : ''}`}>{ label }</div>
            <div>
                <input type="checkbox" checked={isCompleted} onChange={ onChange }/>
            </div>
            <div className="absolute text-2xl text-red-700 cursor-pointer -right-1 -top-5">
                x
            </div>
        </li>
    )
}