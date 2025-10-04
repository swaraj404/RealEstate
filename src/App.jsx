import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText} from 'gsap/all'
import Home from './Components/Home.jsx'
import NavBar from './Components/NavBar'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <NavBar/>
      <Home/>
      <div className='h-[200vh]'></div>
    </main>
  )
}
export default App

