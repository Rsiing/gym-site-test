"use client"; 
import Image from "next/image";


import NavDash from "./NavDash";

export default function Home() {
  return (
    <div>
        <NavDash />
      <main className="h-full px-20 pt-40 pb-20 cursor-default duration-300">
        <div className="w-full h-full rounded-xl bg-[#282828] border-4
          border-[#353535] flex flex-col shadow-lg">

          <div className="lg:text-8xl md:text-6xl text-4xl font-bold text-white pt-10 px-10">
            <h1>
                Welcome to 
              <span className="flex text-[#000000] lg:text-9xl md:text-7xl text-5xl relative left-20 top-2">
                GymFit
              </span>
            </h1>
          </div>

          <div className="self-center grid lg:grid-cols-2 md:grid-cols-1 py-20 px-20">
            <h2 className="xl:text-4xl lg:text-2xl md:text-xl lg:justify-self-start 
            justify-self-center lg:text-start text-center text-md self-center w-4/5 
            lg:pb-0 pb-6"> 
              At GymFit, we believe that fitness is for everyone, 
              no matter where you are on your journey. Whether you're looking
              to build strength, lose weight, increase endurance, or simply
              stay active, we have everything you need to achieve your goals.
            </h2>
            <Image src="/heroImg.svg" alt="" className='self-center' width={1000} height={500}/>
          </div> 

          <div className="flex flex-col self-center">
            <h3 className="h-200 lg:text-6xl md:text-4xl text-2xl flex flex-col self-center px-5 pb-20">
              <a href="/Register" className="flex self-center font-bold cursor-pointer 
                bg-white text-[#282828] hover:bg-[#6c63ff] hover:scale-105
                hover:text-white duration-500 w-fit py-6 px-8 rounded-full shadow-lg">
                  Get started today
              </a>
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}
