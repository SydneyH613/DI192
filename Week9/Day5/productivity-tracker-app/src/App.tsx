import { useState } from 'react'
import { useAppSelector } from './app/hooks'
import { selectCompletedTasks, selectTasks } from './features/tasks/tasksSlice'
import CategorySelector from './components/CategorySelector'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('cat-1')
  const totalTasks = useAppSelector((state) => selectTasks(state).length)
  const completedTasks = useAppSelector(selectCompletedTasks)

  return (
    <div className="app">
      <h1>Productivity Tracker</h1>
      <p className="stats">
        {completedTasks} of {totalTasks} tasks completed
      </p>
      <CategorySelector
        selectedCategoryId={selectedCategoryId}
        onSelect={setSelectedCategoryId}
      />
      <TaskList categoryId={selectedCategoryId} />
    </div>
  )
}

export default App
