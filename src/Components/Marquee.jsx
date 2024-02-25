// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]">
    <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden text-white">
      <motion.h1
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        className='text-[22vw] leading-none font-["Test_Founders_Grotesk X-Condensed"] uppercase -mt-[1.75rem] mb-0 font-bold'
      >
        We are Ochi
      </motion.h1>
      <motion.h1
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        className='text-[22vw] leading-none font-["Test_Founders_Grotesk X-Condensed"] uppercase -mt-[1.75rem] mb-0 font-bold'
      >
        We are Ochi
      </motion.h1>
      <motion.h1
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        className='text-[22vw] leading-none font-["Test_Founders_Grotesk X-Condensed"] uppercase -mt-[1.75rem] mb-0 font-bold'
      >
        We are Ochi
      </motion.h1>
    </div>
  </div>
  )
}

export default Marquee