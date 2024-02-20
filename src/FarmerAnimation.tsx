import {motion,AnimatePresence} from 'framer-motion'
import { useState } from 'react'



const FarmerAnimation = () => {
    const [show,setshow] = useState(true)

  return (
    <>
    <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        alignItems:'center'
    }}>
        <h1 style={{
            marginTop:'30px'
        }}>
            Farmer Motion Tutorial: Exit And Enter Animation
        </h1>
        <AnimatePresence>
            {
                show && <motion.div
                style={{width:'100px', height:'100px',background:'blue'}}
                initial={{opacity:0,x:-150}}
                animate={{opacity:1,x:100}}
                exit={{opacity:0,x:-150}}
                transition={{duration:'1'}}
                >
                </motion.div>
            }
        </AnimatePresence>
            <button onClick={()=>setshow(!show)} style={{padding:'12px 18px'}}>{show?'Remove Box':'Add Box'}</button>
    </div>
</>
  )
}

export default FarmerAnimation