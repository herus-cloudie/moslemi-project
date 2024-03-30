import React from 'react'
import { Helmet } from 'react-helmet'
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader'
import Header from '../../Components/Header/Header'
import FixedIcon from '../../Components/FixedIcon/FixedIcon'
import Footer from '../../Components/Footer/Footer'
import PlansPageComponent from '../../Components/PlansPageComponent/PlansPageComponent'
import EndBox1 from '../../Components/EndBox1/EndBox1'

function PlansPage() {
  return (
    <div className='w-screen'>
     <Helmet>
        <title>نهال آی تی |  سیاست حریم خصوصی</title>
     </Helmet>
     <header>
        <div className="max-lg:hidden">
          <Header/>
        </div>
        <div className="lg:hidden">
          <ResponseHeader/>
        </div>
      </header>
      <PlansPageComponent/>
      <EndBox1 content={{link:"/order" , p:"جهت سفارش انواع پروژه طراحی وب سایت ، میتوانید به صورت رایگان ، با شماره 09927674217 تماس بگیرید و یا از طریق لینک زیر اقدام کنید.",b:"سفارش پروژه طراحی انواع وب سایت"}}/>
      <div>
          <FixedIcon/>
      </div>
      <footer className="mt-5 w-full">
          <Footer/>
      </footer>
    </div>
  )
}

export default PlansPage