import { Button as MUIButton, styled } from '@mui/material'

export const Button = ({ text, variant, onClick, ...rest }) => {
  return (
    <ButtonStyle type='submit' variant={variant} onClick={onClick} {...rest}>
      {text}
    </ButtonStyle>
  )
}

const ButtonStyle = styled(MUIButton)(({ ...props }) => ({
  backgroundColor: props.backgroundColor || '#37D3D3',
  color: props.color || '#ffffff',
  borderRadius: props.borderRadius || '3px',
}))
