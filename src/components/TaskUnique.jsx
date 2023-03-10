import React from 'react'

import '../styles/stylesComponents/TaskUnique.css'

//icons
import {CgClose,CgInfo} from 'react-icons/cg'

import {useNavigate} from 'react-router-dom'

const TaskUnique = ({ taskInfo, handleTaskClick, handleDeleteTaskClick }) => {

const navigate = useNavigate();

const handleTaskDetailsClick = () => {
  navigate(`/${taskInfo.title}`)
}

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
          <CgClose/>
        </button>
        
        <button onClick={handleTaskDetailsClick}
          className="see-task-details-button">
          <CgInfo/>
        </button>
      </div>
    </div>
  )
}

export default TaskUnique