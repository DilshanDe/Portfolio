import React from 'react'
import Hero from './Hero'
import Technologies from './Technologies'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <Technologies />
        <Projects />
        <Blog />
        <Contact />
    </div>
  )
}

export default Home