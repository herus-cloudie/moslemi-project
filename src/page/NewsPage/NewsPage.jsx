import React from 'react'
import FixedIcon from '../../Components/FixedIcon/FixedIcon'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import NewsComponent from '../../Components/NewsPage/NewsComponent'
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader'

function NewsPage() {
  return (
    <main>
      
    <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
    </header>
    <NewsComponent/>
    <div>
       <FixedIcon/>
    </div>
    <footer>
       <Footer />
    </footer>
    </main>
  )
}

export default NewsPage;