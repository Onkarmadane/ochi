import React, { useEffect, useState } from 'react'

function Eyes() {
    // here we are setting use state hook to 0 beacause we want to rotate eye using usetate hook 
    const [rotate, setrotate] = useState(0);
    // use effect hook is used to create a mouse overing animation onto eye
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
// this calculates the mouse from height and width 
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            // here the value of degree got into radiance and it is converted into degrees
            var angle = Math.atan2(deltaX , deltaY) * (180/Math.PI);
            setrotate(angle-180);


        })
    })
    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
                    <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full  items-center justify-center'>
                            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10">
                            <div className=' w-10 h-10 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                        <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full items-center justify-center'>
                        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full  h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className=' w-10 h-10 bg-zinc-100 rounded-full'></div>
                            </div>
                            </div></div>
                </div>
            </div>
        </div>
    )
}

export default Eyes