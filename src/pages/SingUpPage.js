import React from 'react'
import { Container, TextField, Typography, styled } from '@mui/material'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'
import { EmailIcon, GoogleIcon, LogoIcon } from '../assets/icons'
import { Button } from '../components/UI/button/Button'

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async () => {}

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
      maxWidt390
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
        <form style={{ textAlign: 'center' }} onSubmit={handleSubmit(onSubmit)}>
          <InputStyle
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register('email', { required: 'Укажите почту' })}
            label='Email'
            variant='standard'
            fullWidth
          />
          <InputStyle
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register('password', { required: 'Укажите пароль' })}
            variant='standard'
            endIcon={<EmailIcon />}
            label='Password'
            type='password'
            fullWidth
          />

          <ButtonSingUp
            disabled={!isValid}
            type='submit'
            variant='contained'
            fullWidth
            text='Регистрация'
          />
        </form>
        <ButtonStyle
          text='Регистрация с Google'
          startIcon={<GoogleIcon style={{ width: '21px' }} />}
          sx={{ mb: 2 }}
        />
        <Link to='/login'>
          <BtnContainer>
            <ButtonSingIn text='Войти' disabled variant='text' />
          </BtnContainer>
        </Link>
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
  margin: '49px 0 29px',
  width: '80%',
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
  [theme.breakpoints.down(390)]: {
    maxWidth: '280px', // Устанавливаем ширину 280px для экранов до 390px
  },
}))

const InputStyle = styled(TextField)(() => ({
  width: '100%', // Adapted
  maxWidth: '464px',
  marginBottom: '20px',
}))
