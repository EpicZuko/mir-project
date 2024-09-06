import { useState } from 'react'
import { styled } from '@mui/material'
import { createPortal } from 'react-dom'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { FaEarthAmericas, FaHeadphones } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoFlagSharp, IoWallet } from 'react-icons/io5'
import { MdOutlineGetApp } from 'react-icons/md'
import logo from '../../assets/images/logo.svg'

const Sidebar = (props) => {
  const [closeOpen, setCloseOpen] = useState(true)
  console.log('🚀 ~ Sidebar ~ closeOpen:', closeOpen)
  // createPortal()
  return (
    <>
      {createPortal(
        <Content isIt={closeOpen}>
          <Logo isIt={closeOpen} src={logo} alt='img' />
          <Hr isIt={closeOpen} />
          <SidebarProfile isIt={closeOpen}>
            <SidebarProfileImage
              isIt={closeOpen}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3URjWpcZfPfzAHxrU_Xms2GzfUJmvWXGjuw&s'
              alt=''
            />
            <SidebarProfileNameTitle isIt={closeOpen}>
              <SidebarProfileTitle>Добрый день</SidebarProfileTitle>
              <SidebarProfileName>{props.name || 'User'}</SidebarProfileName>
            </SidebarProfileNameTitle>
          </SidebarProfile>
          <div className=''>
            <Hr isIt={closeOpen} />
            <SidebarProfileTitle isIt={closeOpen}>Меню</SidebarProfileTitle>
          </div>
          <Navigatep isIt={closeOpen}>
            <NavigatepItem isIt={closeOpen}>
              <FaEarthAmericas isIt={closeOpen} />
              {/* мир должен быть внутри Navp */}
              <Navi isIt={closeOpen}>Мир</Navi>
            </NavigatepItem>
            <NavigatepItem isIt={closeOpen}>
              <MdOutlineGetApp isIt={closeOpen} />
              {/* Получившие должен быть внутри Navp */}
              <Navi isIt={closeOpen}>Получившие</Navi>
            </NavigatepItem>
            <NavigatepItem isIt={closeOpen}>
              <BsFillPersonCheckFill isIt={closeOpen} />
              {/* Закончившие должен быть внутри Navp */}
              <Navi isIt={closeOpen}>ПолучиЗакончившиевшие</Navi>
            </NavigatepItem>
            <NavigatepItem isIt={closeOpen}>
              <IoFlagSharp isIt={closeOpen} />
              {/* Сдался должен быть внутри Navp */}
              <Navi isIt={closeOpen}>Сдался</Navi>
            </NavigatepItem>
          </Navigatep>
          <div className=''>
            <Hr isIt={closeOpen} />
            <SidebarProfileTitle isIt={closeOpen}>О нас</SidebarProfileTitle>
          </div>
          <Navigatep isIt={closeOpen}>
            <NavigatepItem isIt={closeOpen}>
              <IoWallet isIt={closeOpen} />
              {/* Оплатить должен быть внутри Navp */}
              <Navi isIt={closeOpen}>Оплатить</Navi>
            </NavigatepItem>
            <NavigatepItem isIt={closeOpen}>
              <HiUsers isIt={closeOpen} />
              {/* О нас должен быть внутри Navp */}
              <Navi isIt={closeOpen}>О нас</Navi>
            </NavigatepItem>
            <NavigatepItem isIt={closeOpen}>
              <FaHeadphones isIt={closeOpen} />
              {/* Тех поддержка должен быть внутри Navp */}
              <Navi isIt={closeOpen}>Тех поддержка</Navi>
            </NavigatepItem>
          </Navigatep>
          <button className={closeOpen ? 'logOut' : 'logout'}>Выйти</button>
          {closeOpen ? (
            <CloseSidebar
              onClick={() => {
                setCloseOpen(false)
              }}
            >
              <IoIosArrowBack />
            </CloseSidebar>
          ) : (
            <CloseSidebar
              isIt={closeOpen}
              onClick={() => {
                setCloseOpen(true)
              }}
            >
              <IoIosArrowForward />
            </CloseSidebar>
          )}
        </Content>,
        document.getElementById('side-bar')
      )}
    </>
  )
}

export default Sidebar

// css styles

const Content = styled('div')(({ isIt }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  width: isIt ? '295px' : '100px',
  height: '100vh',
  padding: '20px',
  background: 'white',
  boxShadow: '10px 0px 12px -5px rgba(0,0,0,0.56)',
  webkitBoxShadow: '10px 0px 12px -5px rgba(0,0,0,0.56)',
  mozBoxShadow: '10px 0px 12px -5px rgba(0,0,0,0.56)',
}))
const Logo = styled('img')(() => ({
  width: '80px',
  height: 'auto',
}))
const Hr = styled('hr')(({ isIt }) => ({
  width: isIt ? '241px' : '48px',
  height: '2px',
  background: 'rgb(220, 220, 220)',
  border: 'none',
}))

// styles for Prfile
const SidebarProfile = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
}))
const SidebarProfileImage = styled('img')(() => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
}))
const SidebarProfileNameTitle = styled('div')(({ isIt }) => ({
  display: isIt ? 'block' : 'none',
}))
const SidebarProfileTitle = styled('p')(() => ({
  fontSize: '15px',
  color: 'gray',
  fontWeight: '200',
}))
const SidebarProfileName = styled('h3')(() => ({
  fontSize: '25px',
  fontWeight: '700',
}))

// styles for Prfile
// styles for Navigate

const Navigatep = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
}))
const NavigatepItem = styled('button')(({ isIt }) => ({
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: isIt ? 'start' : 'center',
  gap: '10px',
  border: 'none',
  borderRadius: '3px',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '20px',
  '&:hover': {
    background: ' #637E7E',
    color: 'white',
  },
}))
const Navi = styled('p')(({ isIt }) => ({
  fontSize: '15px',
  display: isIt ? 'block' : 'none',
}))
const CloseSidebar = styled('button')(({ isIt }) => ({
  padding: isIt ? '20px 5px' : '15px 5px',
  border: 'none',
  borderRadius: isIt ? '15px 0 0 15px' : '0 15px 15px 0',
  background: 'gray',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '20px',
  position: 'absolute',
  top: '130px',
  right: isIt ? '0' : '-30px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    background: '#5F7373',
  },
}))
// styles for Navigate
// styles for AboutUs

// styles for AboutUs

// css styles
