import React from 'react'

import '../styles/stylesComponents/AddTask.css'
import ConfirmButton from './confirmButton'

const AddTask = () => {
  return (
    <div className="add-task-container">
      <input className="add-task-input" type="text" />
      <ConfirmButton >abcdefg</ConfirmButton>
    </div>
  )
}

export default AddTask
