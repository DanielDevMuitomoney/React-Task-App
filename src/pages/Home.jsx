import React, { useEffect, useState } from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import Tasks from '../components/Tasks'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'





// class Home extends React.Component {

//   constructor () {
//     super();

//     this.state = {
//       message: 'hello Worl2d'
//     }


//   }

//   componentDidMount(){
//     console.log('RECEBA')
//   }

//   handleChangeMessageButtonClick(){
//     this.setState({message:'hello'})
//   }

//   render() {
//     return (
//       <>
//       <h1>{this.state.message}</h1>
//       <button onClick={this.handleChangeMessageButtonClick.bind(this)}>Change Message</button>
//       </>
//     )
//   }
// }

// export default Home
const Home = () => {
  const [tasksObject, setTaskObject] = useState([])

  const handleTaskAddition = (taskTitle) => {
    if(taskTitle.length<1) {return}
    else{
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

  }



useEffect (() => {
  const fetchTasks = async() => {
    const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')

setTaskObject(data)

  }

  fetchTasks();

}, [])
  
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
<>
      
      <AddTask handleOnClick={handleTaskAddition} />
      <Tasks
        handleDeleteTaskClick={handleDeleteTaskClick}
        taskObject={tasksObject}
        handleTaskClick={handleTaskClick}
      />
      </>

  )
}

export default Home
