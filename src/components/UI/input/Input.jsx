import React from 'react'
import { TextField } from '@mui/material'

const Input = ({ label, type = 'text', variant, ...props }) => {
  return (
    <TextField
      variant={variant}
      margin='normal'
      fullWidth
      label={label}
      type={type}
      {...props}
    />
  )
}

export default Input
