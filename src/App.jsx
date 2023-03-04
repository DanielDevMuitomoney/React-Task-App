import react, { useState } from 'react'

// css
import './App.css'
import AddTask from './components/AddTask'

//components
import Tasks from './components/Tasks'


//lib
import {v4 as uuidv4} from 'uuid'

const App = () => {
  // Comportará as tarefas adicionadas pelo user
  const [tasksObject , setTaskObject] = useState([{
    id: '1',
    title: 'Estudar programação',
    completed: false
  },{
    id: '2',
    title: 'Ler livros',
    completed: true
  },




])


const handleTaskAddition = (taskTitle) => {
  const task = [...tasksObject,{
    title: taskTitle,
    id:uuidv4(),
    completed: false
  }]
  setTaskObject(task)
  
}
  return (
    <div className="container">
      <AddTask handleOnClick={handleTaskAddition} />
      <Tasks taskObject={tasksObject} />
    </div>
  )
}

export default App;