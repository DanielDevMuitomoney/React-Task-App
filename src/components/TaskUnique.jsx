import React from 'react'

import '../styles/stylesComponents/TaskUnique.css'

const TaskUnique = ({taskInfo}) => {
  return (
    <div className='task-container'>{taskInfo.title}</div>
  )
}

export default TaskUnique