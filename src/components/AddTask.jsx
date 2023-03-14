import React, { useState } from 'react'

import '../styles/stylesComponents/AddTask.css'
import ConfirmButton from './confirmButton'

const AddTask = ({handleOnClick}) => {
  const [inputData, setInputData]  = useState('')
  
    const handleAddTaskClick = () => {
      handleOnClick(inputData)
      setInputData('')
    }


  const handleInputChange = (e) => {
    setInputData(e.target.value)
   
  }
  
  
  (null)
  return (
    <div className="add-task-container">
      <input onChange={handleInputChange} className="add-task-input" type="text"
      
      value={inputData}
      />

      <div className="add-task-button-container">

      <ConfirmButton onClick={handleAddTaskClick}>Adicionar</ConfirmButton>

      </div>

    </div>
  )
}

export default AddTask
