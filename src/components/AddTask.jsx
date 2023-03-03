import React from 'react'

import '../styles/stylesComponents/AddTask.css'
import ConfirmButton from './confirmButton'

const AddTask = () => {
  return (
    <div className="add-task-container">
      <input className="add-task-input" type="text" />

      <div className="add-task-button-container">

      <ConfirmButton>Adicionar</ConfirmButton>

      </div>

    </div>
  )
}

export default AddTask
