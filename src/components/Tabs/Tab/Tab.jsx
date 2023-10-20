export function Tab({ currentCategory, setCurrentCategory, category, filterTasksByCategory, textButton }) {
    return (
        <button
            className={`relative w-full p-2 border-b-2 text-white ${currentCategory === category ? 'border-green-400' : 'border-slate-950'}`}
            onClick={() => setCurrentCategory(category)}
        >
            {textButton} {filterTasksByCategory(category).length ? <span className="absolute top-0 right-0 w-[20px] h-[20px] text-sm text-white bg-red-500 rounded-[100%]">{filterTasksByCategory(category).length}</span> : ''}
        </button>
    )
}