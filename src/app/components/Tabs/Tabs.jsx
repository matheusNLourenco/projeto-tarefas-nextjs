import {Tab} from './Tab/Tab'

export function Tabs({ currentCategory, setCurrentCategory, filterTasksByCategory }) {
    return (
        <div className="flex gap-4 mb-4">
            <Tab 
                textButton='Pendentes'
                category='pendente'
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                filterTasksByCategory={filterTasksByCategory}
            />
            <Tab 
                textButton='Concluidas'
                category='concluido'
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                filterTasksByCategory={filterTasksByCategory}
            />
        </div>
    )
}