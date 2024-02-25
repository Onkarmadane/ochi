import React from 'react'

function Feature() {
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-5 ">
                <div className="cardcontainer relative w-1/2 h-[75vh] ">
                    <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-10 text-8xl font-["Test_Founders_Grotesk X-Condensed"] leading-none tracking-tighter text-[#CDEA68]'>{"FYDE".split('').map((item,index)=><span>{item}</span>)}</h1>
                    <div className="card  w-full h-full  ">
                        <img className='w-full h-full bg-cover rounded-xl ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className="cardcontainer relative w-1/2 h-[75vh] rounded-xl bg-zinc-100 overflow-hidden">
                <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-10 text-8xl font-["Test_Founders_Grotesk X-Condensed"] leading-none tracking-tighter text-[#CDEA68]'>{"VISE".split('').map((item,index)=><span>{item}</span>)}</h1>
                
                     <div className="card rounded-xl w-full h-full   ">
                    <img className='w-full h-full bg-cover rounded-xl ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" /></div></div>
                    </div>
            </div></div>

  
    )
}

export default Feature