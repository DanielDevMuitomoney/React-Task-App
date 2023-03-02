import react, { useState } from 'react'

import './App.css'

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

      <h1>{`message value -> ${message} `}</h1>

    </div>
  )
}

export default App;