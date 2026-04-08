import React from 'react'

import Button from '@mui/material/Button';


const ButtonCmp = ({variant, title, clickHandler}) => {
  return (
    <Button onClick={clickHandler} variant={variant}>{title}</Button>
  )
}

export default ButtonCmp