export function AddBar({ textInput, setTextInput, list, setList }) {
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
    
    return (
        <div className="flex gap-4 mb-4">
            <input 
                type="text" 
                placeholder="Qual a tarefa ?" 
                className="w-full p-4 text-white border border-green-400 rounded outline-none bg-slate-900"  
                value={textInput} 
                onChange={(e) => setTextInput(e.target.value)}
            />
            <button 
                className="px-2 py-4 text-white bg-green-400 rounded hover:bg-green-500" 
                onClick={ handleAddButton }
            >
                Adicionar
            </button>
        </div>
    )
}