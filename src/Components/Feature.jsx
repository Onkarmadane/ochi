import { motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Feature() {
    
    const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()];
    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }
    return (
        <div className='w-full  py-32'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>

            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-5 ">
                    <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh] ">
                        <div className='px-3 my-2 flex'> <div class="w-2 h-2 bg-zinc-100 rounded-full mr-2 mt-2"></div> FYDE</div>
                        <h1 className='absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-10 text-8xl font-["Test_Founders_Grotesk X-Condensed"] leading-none tracking-tighter text-[#CDEA68] overflow-hidden'>
                            {"FYDE".split('').map((item, index) =>
                                <motion.span initial={{y:"100%"}} animate={cards [0]}transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}}>
                                    {item}
                                </motion.span>)}
                        </h1>
                        <div className="card  w-full h-full  ">
                            <img className='w-full h-full bg-cover rounded-xl ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                            <div className="  uppercase flex  py-5 gap-2">
                                {[
                                    "Audit",
                                    "copyrighting",
                                    "sales deck",
                                    "slide design"
                                ].map((item) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <p className="text-md font-light tracking-tight leading-none border-[1px] border-zinc-100 rounded-full p-2 hvr-sweep-to-top overflow-hidden">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer  relative w-1/2 h-[75vh] ">
                        <div className='px-3 my-2 flex '> <div class="w-2 h-2 bg-zinc-100  mt-2 rounded-full mr-2 "></div> VISE</div>
                        <h1 className='absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-10 text-8xl font-["Test_Founders_Grotesk X-Condensed"] leading-none tracking-tighter text-[#CDEA68]  overflow-hidden'>{"VISE".split('').map((item, index) =>  <motion.span initial={{y:"100%"}} animate={cards [1]}transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} className='inline-block'>
                                    {item}
                                </motion.span>)}</h1>

                        <div className="card  rounded-xl w-full h-full border-[1px]">
                            <img className='w-full h-full bg-cover rounded-xl ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                            <div className="  uppercase flex  py-5 gap-2">
                                {[
                                    "Agency",
                                    "company presentation"

                                ].map((item) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <p className="text-md font-light tracking-tight leading-none border-[1px] border-zinc-100 rounded-full p-2 hvr-sweep-to-top overflow-hidden">
                                        {item}
                                    </p>
                                ))}
                            </div></div></motion.div>
                </div>
            </div>
            {/* second cards */}
            <div className='w-full px-20 pb-20 mt-10' ></div>

            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-5 ">
                    <motion.div onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} className="cardcontainer relative w-1/2 h-[75vh] ">
                        <div className='px-3 my-2 flex'> <div class="w-2 h-2 bg-zinc-100 mt-2 rounded-full mr-2"></div> TARWA</div>
                        <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-10 text-8xl font-["Test_Founders_Grotesk X-Condensed"] leading-none tracking-tighter text-[#CDEA68] flex overflow-hidden '>{"TARWA".split('').map((item, index) => <motion.span initial={{y:"100%"}} animate={cards [2]}transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} className='inline-block'>
                                    {item}
                                </motion.span>)}</h1>
                        <div className="card  w-full h-full  ">
                            <img className='w-full h-full bg-cover rounded-xl ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                            <div className="  uppercase flex  py-5 gap-2">
                                {[
                                    "brand identity",
                                    "design research",
                                    "investor deck"
                                ].map((item) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <p className="text-md font-light tracking-tight leading-none border-[1px] border-zinc-100 rounded-full p-2 hvr-sweep-to-top overflow-hidden">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                    <motion.div onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} className="cardcontainer  relative w-1/2 h-[75vh] ">
                        <div className='px-3 my-2 flex '> <div class="w-2 h-2 bg-zinc-100  mt-2 rounded-full mr-2 "></div> PREMIUM BLEND</div>
                        <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-10 text-8xl font-["Test_Founders_Grotesk X-Condensed"] leading-none tracking-tighter  text-[#CDEA68] flex overflow-hidden'>{"PREMIUM BLEND".split('').map((item, index) => <motion.span initial={{y:"100%"}} animate={cards [3]}transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}} className='inline-block'>
                                    {item}
                                </motion.span>)}</h1>

                        <div className="card  rounded-xl w-full h-full border-[1px]">
                            <img className='w-full h-full bg-cover rounded-xl ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                            <div className="  uppercase flex  py-5 gap-2">
                                {[
                                    "branded template"

                                ].map((item) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <p className="text-md font-light tracking-tight leading-none border-[1px] border-zinc-100 rounded-full p-2 hvr-sweep-to-top overflow-hidden">
                                        {item}
                                    </p>
                                ))}
                            </div></div></motion.div>
                </div>


            </div>

            <div className='flex items-center mt-8 justify-center'>
                <button className=" flex gap-[2.5rem] items-center mt-32 justify-center text-center px-[1.5rem] py-[1.25rem] bg-zinc-300 rounded-full text-zinc-900 uppercase hvr-sweep-to-top overflow-hidden">
                    view all case studies
                    <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
                </button>
            </div>

        </div>


    )
}

export default Feature