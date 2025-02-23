import React from 'react'
import Home from './home/HeroSection'
import Service from './my_service/Service'
import Skills from './Skills/Skills'
import Contacts from './ContactsUs/Contact'
// import Footer from './Footer/Footer'

function MainHome() {
  return (
    <div>
      <Home/>
      <Service/>
      <Skills/>
      <Contacts/>
      {/* <Footer/> */}
    </div>
  )
}

export default MainHome
