import react from 'react'
import TaskUnique from './TaskUnique'

const Tasks = ({ taskObject,handleTaskClick }) => {
  return (<>

  {taskObject.map((task) => (
    <TaskUnique  taskInfo={task} handleTaskClick = {handleTaskClick} />
  ))}
  </>)
}

export default Tasks
