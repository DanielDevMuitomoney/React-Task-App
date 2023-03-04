import React from 'react'

import '../styles/stylesComponents/TaskUnique.css'

const TaskUnique = ({ taskInfo, handleTaskClick, handleDeleteTaskClick }) => {
  return (

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
      <div
        className="task-title"
        onClick={() => {
          handleTaskClick(taskInfo.id)
        }}
      >
        {taskInfo.title}
      </div>

      <div className="buttons-container">

        <button onClick={ () => {
          handleDeleteTaskClick(taskInfo.id)
        }}
          className="remove-task-button">
          X
        </button>
      </div>
    </div>
  )
}

export default TaskUnique