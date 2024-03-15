import React from 'react'
import './style.scss'
import { Button } from 'antd'
const ButtonComponent = ({style , textButton}) => {
   
  return (
    <div>
        <button className='button'> {textButton}</button>
    </div>
  )
}

export default ButtonComponent