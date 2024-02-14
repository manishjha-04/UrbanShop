import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header />
    <main className='py-3'>
    <Container>
    {/* <HomeScreen />      */} 
    {/* In React Router Dom, an outlet is a component that allows you to render the child component of a router component */}
    <Outlet/> 
    </Container>
      </main>
    <Footer />

    </>
  )
}

export default App
