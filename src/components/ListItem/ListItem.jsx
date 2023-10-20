export function ListItem({label, isCompleted, onChange}) {
    return (
        <li className="flex items-center justify-between p-2 text-white rounded bg-slate-900">
            <div className={`${isCompleted ? 'line-through' : ''}`}>{ label }</div>
            <div>
                <input type="checkbox" checked={isCompleted} onChange={ onChange }/>
            </div>
        </li>
    )
}