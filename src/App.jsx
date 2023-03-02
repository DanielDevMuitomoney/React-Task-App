import react, { useState } from 'react'

// css
import './App.css'

//components
import Tasks from './components/Tasks'

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
  return(

    <div className='container'>

<Tasks taskObject = {tasksObject} />

    </div>
  )
}

export default App;