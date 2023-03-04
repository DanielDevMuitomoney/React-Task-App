import react from 'react'
import TaskUnique from './TaskUnique'

const Tasks = ({ taskObject, handleTaskClick, handleDeleteTaskClick }) => {
  return (
    <>
      {taskObject.map((task) => (
        <TaskUnique
          handleDeleteTaskClick={handleDeleteTaskClick}
          taskInfo={task}
          handleTaskClick={handleTaskClick}
        />
      ))}
    </>
  )
}

export default Tasks
