import Swal from "sweetalert2"

export function Task({task, list, setList}) {
    function handleChangeCheckbox(id) {
        const updatedList = [...list]
        
        updatedList.find(task => task.id === id ? task.completed = !task.completed : false)
        
        setList(updatedList)
      }
    
    function handleDeleteButton(id) {
        Swal.fire({
            title: 'Você tem certeza?',
            text: "Não podera recuperar isso novamente!",
            icon: 'warning',
            iconColor: '#22C55E',
            showCancelButton: true,
            confirmButtonColor: '#22C55E',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Remover'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    iconColor: '#22C55E',
                    title: 'Tarefa removida com sucesso.',
                    showConfirmButton: false,
                    timer: 1500
                })

                setList(list.filter((task) => task.id !== id))
            }
          })
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