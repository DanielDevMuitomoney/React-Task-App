import React from 'react'
import { useParams } from 'react-router-dom'

import ConfirmButton from '../components/confirmButton'

const TaskDetails = () => {
  const params = useParams();
  console.log(params.taskTitle)
  return (
    <>
      <div className="back-button-container">
        <ConfirmButton>Voltar</ConfirmButton>
      </div>

      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          obcaecati.
        </p>
      </div>
    </>
  )
}

export default TaskDetails
