import react, { useState } from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import Tasks from '../components/Tasks'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
  const [tasksObject, setTaskObject] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ])

  const handleTaskAddition = (taskTitle) => {
    const task = [
      ...tasksObject,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ]
    setTaskObject(task)
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasksObject.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    })
    setTaskObject(newTasks)
  }

  const handleDeleteTaskClick = (taskId) => {
    const newTasks = tasksObject.filter((task) => task.id != taskId)

    setTaskObject(newTasks)
  }

  return (
    <div className="container">
      <Header />
      <AddTask handleOnClick={handleTaskAddition} />
      <Tasks
        handleDeleteTaskClick={handleDeleteTaskClick}
        taskObject={tasksObject}
        handleTaskClick={handleTaskClick}
      />
    </div>
  )
}

export default Home
