import React, { useEffect, useState } from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import Tasks from '../components/Tasks'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

// class Home extends React.Component {

//   constructor () {
//     super();

//     this.state = {
//       message: 'hello Worl2d'
//     }

//   }

//   componentDidMount(){
//     console.log('teste use effect for class')
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
  const notifySucess = (menssage) => {
    toast.success(`${menssage}😄`, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }
  const notifyDanger = (menssage) => {
    toast.warn(`${menssage}🤡`, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const [tasksObject, setTaskObject] = useState([])

  const handleTaskAddition = (taskTitle) => {
 
    let task = [{}]
    if (taskTitle.length < 1) {
      notifyDanger('Task empty')
    } else {

     
  
      let task = [
        ...tasksObject,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
      ]
    


     localStorage.setItem('tasks', JSON.stringify(task))
      const newTasks = JSON.parse(localStorage.getItem("tasks"))
       setTaskObject(newTasks)
      notifySucess('Task created!')
    }
  }

  useEffect(() => {
    //Api
    // const fetchTasks = async() => {
    //   const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
    //
    // setTaskObject(data)

    //   }

    // fetchTasks();

    //localStorage
    if(localStorage.getItem("tasks") !=undefined ){
    const tasksJsonParsed = JSON.parse(localStorage.getItem('tasks'))
    setTaskObject(tasksJsonParsed)
           console.log(tasksJsonParsed)
    }


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
    localStorage.setItem("tasks",JSON.stringify(newTasks))
    setTaskObject(newTasks)
  }

  return (
    <>
      <ToastContainer />
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
