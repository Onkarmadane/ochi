// eslint-disable-next-line no-unused-vars
import React from "react";

function About() {
  return (
    <div className="w-full text-black p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-][4.5vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain complex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 border-[#93a655] font-['Neue_Montreal']">
        <p className="w-1/2 mt-2">What you can expect:</p>
        <p className="w-[20vw] mt-2 ">
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether it’s live or digital, delivered for one
          or a hundred people.
          <br />
          <br />
          We believe the mix of strategy and design (with a bit of coffee) is
          what makes your message clear, convincing, and captivating.
        </p>
       <div className="socials mt-20 w-1/2 ml-20 flex flex-col max-w-[5.5vw]">
       <p>S:</p>
        <p className="underline hvr-underline-from-left">Instagram</p>
        <p className="underline hvr-underline-from-left">Behance</p>
        <p className="underline hvr-underline-from-left">Facebook</p>
        <p className="underline hvr-underline-from-left">Linkedin</p>
       </div>
    
      </div>

      <div className="w-full flex gap-5 border-t-[1px] mt-20 border-[#93a655]">
        <div className="w-1/2 ">
          <h1 className="text-5xl pt-10">Our approach:</h1>
          <button className="flex hvr-sweep-to-top overflow-hidden gap-[2.5rem] items-center px-[2.5rem] py-[1.25rem] bg-zinc-900 rounded-full text-white mt-5 uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]  mt-5">
          <img
            className=" rounded-3xl"
            src="src\assets\Homepage-Photo-1326x939.jpg"
            alt="Homepage-Photo"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
