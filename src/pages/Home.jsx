import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Gallery from '../components/Galery'
import Products from '../components/Products'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Gallery/>
        <Products/>
        <Blog/>
        <Footer/>

    </>
  )
}

export default Home