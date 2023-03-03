import React from 'react'


import '../styles/stylesComponents/ConfirmButton.css'

const ConfirmButton = ({children,onClick}) => {
  return (
    <button onClick={onClick} className='button-confirm'>{children}</button>
  )
}

export default ConfirmButton