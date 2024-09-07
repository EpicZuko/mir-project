import { styled } from '@mui/material'

const PricingGrid = () => {
  const PricingData = [
    { id: 1, quantity: 1, price: '1 000 000 - 800 000c' },
    { id: 2, quantity: 2, price: '800 000 - 600 000c' },
    { id: 3, quantity: 3, price: '600 000 - 400 000c' },
    { id: 4, quantity: 4, price: '400 000 - 200 000c' },
    { id: 5, quantity: 5, price: '200 000 - 100 000c' },
    { id: 6, quantity: 6, price: '100 000 - 80 000c' },
    { id: 7, quantity: 7, price: '80 000 - 60 000c' },
    { id: 8, quantity: 8, price: '60 000 - 40 000c' },
    { id: 9, quantity: 9, price: '40 000 - 20 000c' },
    { id: 10, quantity: 10, price: '20 000 - 10 000c' },
    { id: 11, quantity: 11, price: '10 000 - 5 000c' },
    { id: 12, quantity: 12, price: '5 000 - 0c' },
  ]

  return (
    <Container>
      <MainBox>
        <ContentBox>
          <PricingBox>
            {PricingData.map((item) => (
              <PricingItem key={item.id}>
                <h2 className='quantity'>{item.quantity}</h2>
                <p>{item.price}</p>
              </PricingItem>
            ))}
          </PricingBox>
        </ContentBox>
      </MainBox>
    </Container>
  )
}

export default PricingGrid

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}))

const MainBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}))

const ContentBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1145px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 0px 20px',
}))

const PricingBox = styled('div')(() => ({
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: 35,
}))

const PricingItem = styled('div')(() => ({
  width: 218,
  height: 158,
  borderTop: '4px solid rgba(99, 126, 126, 1)',
  boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '19px 24px',
  boxSizing: 'border-box',
  paddingTop: 7,
  marginBottom: 40,
  '& .quantity': {
    fontSize: 104,
    height: '117px',
    margin: 0,
    padding: 0,
    fontWeight: 600,
    color: 'rgba(0, 0, 0, 1)',
  },
  '& p': {
    fontSize: 16,
    margin: 0,
    padding: 0,
    fontWeight: 500,
    color: 'rgba(0, 0, 0, 1)',
  },
}))
