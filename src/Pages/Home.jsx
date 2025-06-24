import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'


function Home() {
  return (
    <>
    <Header />
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <Sidebar />
        </div>
        <div className='col-md-10'>
          <div>Home</div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home
