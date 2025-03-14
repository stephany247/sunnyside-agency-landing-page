import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import Header from './components/Header'
import ServiceSection from "./components/ServiceSection"
import TestimonialSection from './components/TestimonialSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      {/* <Hero /> */}
      <FeatureSection />
      <ServiceSection />
      <TestimonialSection />
      <GallerySection />
      <Footer />
    </>
  )
}

export default App
