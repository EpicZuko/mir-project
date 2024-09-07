import React from 'react'
import { Container, Typography, styled } from '@mui/material'
import { EmailIcon, GoogleIcon, LogoIcon } from '../assets/icons'
import { Button } from '../components/UI/button/Button'
import Input from '../components/UI/input/Input'

export const CodeRegistrationForm = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      component='main'
      maxWidth='xs'
    >
      <LogoIcon />
      <Typography
        variant='h4'
        sx={{ fontSize: { xs: '24px', sm: '30px' }, margin: '9px 0 17px' }}
        gutterBottom
      >
        Добро пожаловать
      </Typography>
      <ContainerInner>
        <Typography
          sx={{
            margin: { xs: '2rem 0 1rem', sm: '4rem 0 2rem' },
            fontSize: { xs: '28px', sm: '38px' },
          }}
          variant='h4'
          gutterBottom
        >
          Регистрация
        </Typography>
        <InputStyle label='Код: 0000' variant='standard'>
          <EmailIcon />
        </InputStyle>

        <ButtonSingUp text='Регистрация' />
        <ButtonStyle
          text='Регистрация с Google'
          startIcon={<GoogleIcon style={{ width: '21px' }} />}
          sx={{ mb: 2 }}
        />
        <BtnContainer>
          <ButtonSingIn text='Войти' disabled variant='text' />
          <Line />
        </BtnContainer>
      </ContainerInner>
    </Container>
  )
}

const ButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  color: '#000000',
  border: '1px solid #000',
  width: '80%', // Adapted
  height: '52px',
  maxWidth: '349px',
  [theme.breakpoints.down(390)]: {
    height: '33px',
    fontSize: '12px',
  },
}))

const ButtonSingUp = styled(Button)(({ theme }) => ({
  margin: '69px 0 29px',
  width: '80%', // Adapted
  height: '52px',
  maxWidth: '349px',
  [theme.breakpoints.down(390)]: {
    margin: '40px 0 22px',
    height: '33px',
    fontSize: '12px',
  },
}))

const ButtonSingIn = styled(Button)(({ theme }) => ({
  background: 'none',
  [theme.breakpoints.down(390)]: {
    height: '33px',
  },
}))

const BtnContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50px',
}))

const Line = styled('div')(() => ({
  width: '100%',
  height: '1px',
  marginTop: '-10px',
  backgroundColor: '#BDBDBD',
}))

const ContainerInner = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%', // Adapted for smaller screens
  maxWidth: '569px',
  padding: '2rem', // Add some padding
  margin: '20px',
  boxShadow: '0 20px 35px rgba(0, 0 , 0, 0.2)',
  borderRadius: '8px',
  [theme.breakpoints.down('xs')]: {
    maxWidth: '280px', // Устанавливаем ширину 280px для экранов до 390px
  },
  [theme.breakpoints.down(390)]: {
    maxWidth: '280px', // Устанавливаем ширину 280px, если ширина экрана 390px
    padding: '1rem', // Корректируем padding для лучшего отображения
  },
}))

const InputStyle = styled(Input)(() => ({
  width: '100%', // Adapted
  maxWidth: '464px',
}))
