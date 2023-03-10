import React from 'react'
import { useParams } from 'react-router-dom'



import { useNavigate } from 'react-router-dom'


import  '../styles/stylesComponents/TaskDetails.css'

import ConfirmButton from '../components/confirmButton'

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  }
  console.log(params.taskTitle)
  return (
    <>
      <div className="back-button-container">
        <ConfirmButton onClick={handleBackButtonClick}>Voltar</ConfirmButton>
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
