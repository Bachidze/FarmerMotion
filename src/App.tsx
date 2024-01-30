import React from 'react'
import './App.css'
import {motion} from "framer-motion"
function App() {

  const [color,setColor] = React.useState(false)

  return (
    <>
     <div className='example-container'>
      <motion.div 
      className='gio'
      animate={{color:color ? 'red' : 'green'}}
      onClick={()=>(setColor(!color))}
      >  
      </motion.div>
     </div>
    </>
  )
}

export default App
