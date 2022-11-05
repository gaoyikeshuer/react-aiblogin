import React from 'react'
import'./PrimaryButton.css'

const PrimaryButton = ({title}) => {
  return (
    <div >
     <button className='primary'>{title}</button> 
    </div>
  )
}

export default PrimaryButton
