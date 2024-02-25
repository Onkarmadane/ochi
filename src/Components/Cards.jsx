import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-5 px-32 items-center'>
            <div className='cardcontainer h-[50vh] w-1/2 '>
                <div className="card relative w-full h-full bg-[#212121] rounded-xl flex items-center justify-center">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="ocjilogo" />
                    <button className="absolute left-5 bottom-5 px-5 py-3 border-2 rounded-full  ">&copy; 2019-22</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh] '>
            <div className="card relative w-full h-full bg-[#0d1514] rounded-xl flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="clutch" />
                <button className="absolute left-5 bottom-5 uppercase px-5 py-3 border-2 rounded-full">rating 5.0 on clutch</button>
            </div>
            <div className="card px-20 flex justify-center items-center relative w-1/2 h-full bg-[#212121] rounded-xl">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="design" />
                <button className="absolute left-5 bottom-5 uppercase px-5 py-3 border-2 rounded-full   ">business bootcamp alumni</button>
            </div>
            </div>
            
        </div>
    )
}

export default Cards