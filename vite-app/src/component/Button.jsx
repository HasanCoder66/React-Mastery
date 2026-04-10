import React from 'react'

import Button from '@mui/material/Button';


const ButtonCmp = ({variant, title, loginHandler}) => {
  return (
    <Button onClick={loginHandler} variant={variant}>{title}</Button>
  )
}

export default ButtonCmp