export function Info({filterTasksByCategory, currentCategory, info}) {
    return (
        <div className="text-center text-white">
            {!filterTasksByCategory('pendente').length && currentCategory === 'pendente' ? info : ''}
        </div>
    )
}