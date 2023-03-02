import react from 'react'
import TaskUnique from './TaskUnique'

const Tasks = ({ taskObject }) => {
  return (<>

  {taskObject.map((task) => (
    <TaskUnique taskInfo={task} />
  ))}
  </>)
}

export default Tasks
