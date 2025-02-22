"use client"; 
import Image from "next/image";
import Carousel from "./Carousel";

import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="h-full px-10 lg:px-20 pt-40 pb-20 cursor-default duration-300">
        <div className="w-full relative rounded-xl bg-[#282828] border-4 border-[#353535] flex flex-col shadow-xl overflow-hidden">
          
          
          <div className="relative z-20 flex flex-col items-center text-center lg:items-start lg:text-left px-10 lg:px-20 py-16">
            
            
            <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-8xl py-4 md:py-10">
              Welcome to  
              <span className="block text-[#6c63ff] text-5xl md:text-7xl lg:text-9xl mt-2">
                GymFit
              </span>
            </h1>

            
            <h2 className="text-md md:text-xl lg:text-2xl xl:text-3xl text-white mt-6 max-w-3xl py-4 md:py-10">
              At GymFit, we believe fitness is for everyone. Whether you're 
              building strength, losing weight, increasing endurance, or 
              staying active, we provide everything you need to achieve your goals.
            </h2>

           
            <div className="flex justify-end right-100 relative w-full ">
              <Carousel/>
            </div>

            
            <div className="mt-10 py-4 relative lg:left-20 md:py-10">
              <a 
                href="/Register" 
                className="font-bold text-lg md:text-4xl px-8 py-4 rounded-full shadow-lg bg-white text-[#282828] 
                hover:bg-[#6c63ff] hover:text-white hover:scale-110 duration-300 inline-block"
              >
                Get started today
              </a>
            </div>
          </div>

         
          <div className="absolute inset-0 z-1">
            <Image 
              src="/heroImg.svg" 
              alt="Gym background" 
              className="w-full h-full object-cover opacity-20 "
              layout="fill"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
