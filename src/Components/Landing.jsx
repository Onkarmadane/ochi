// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function Landing() {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen pt-1 bg-zinc-900 text-white">
    <div className="textstructure  mt-32 px-20">
      {["we create", "eye-opening", "presentations"].map((item, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="masker">
            <div className="w-fit flex mb-2 items-end overflow-hidden ">
              {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className="mr-[1vw]  relative -top-[0.5vw] ">
                  <img className='mt-5 rounded-xl w-[9vw] h-[6.5vw]' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="content-image"  />
                </motion.div>
              )}
              <h1 className='uppercase text-[9vw] font-["Test_Founders_Grotesk X-Condensed"] leading-[7vw] tracking-tighter flex h-full font-medium'>
                {item}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
    <div className="border-t-[1px] border-zinc-800 mt-20 capitalize flex justify-between items-center py-5 px-20">
      {[
        "For Public and private companies",
        "from the first pitch to IPO",
      ].map((item) => (
        // eslint-disable-next-line react/jsx-key
        <p className="text-md font-light tracking-tight leading-none">
          {item}
        </p>
      ))}
      <div className="start flex items-center gap-5">
        <div className=" hvr-fade px-5 py-2 border-[2px] border-zinc-500 rounded-full uppercase text-md mt-1 ">
          start the project
        </div>
        <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full hvr-fade">
          <MdArrowOutward />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Landing