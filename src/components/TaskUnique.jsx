import React from 'react'

import '../styles/stylesComponents/TaskUnique.css'

const TaskUnique = ({taskInfo,handleTaskClick}) => {
  return (
    // <div className='task-container'>{taskInfo.title}</div>
    <div
      className="task-container" 
      style={
        taskInfo.completed
          ? {
              borderLeft: '6px solid chartreuse',
            }
          : {}
      }
    >
      <div  className="task-title" onClick={() => {
        handleTaskClick(taskInfo.id)
      }}>
        {taskInfo.title}
      </div>
    </div>
  )
}

export default TaskUnique