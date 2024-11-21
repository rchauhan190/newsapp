
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Newsboard from './Components/Newsboard'

function App() {
  const [category,setCategory] = useState("general")
 

  return (
    <>
   <Navbar  setCategory={setCategory}/>
   <Newsboard category={category}/>
    </>
  )
}

export default App
