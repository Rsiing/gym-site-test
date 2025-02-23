"use client"; 
import Image from "next/image";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="h-full px-10 lg:px-20 pt-40 pb-20 cursor-default duration-300">
        <div className="w-full relative rounded-xl bg-[#282828] border-4 border-[#353535] grid xl:grid-cols-2 grid-cols-1 shadow-xl overflow-hidden">
          
          <div className="relative z-20 flex flex-col items-center  text-center xl:items-start lg:text-left px-10 lg:px-20 py-16">
            
            <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl pb-4 md:pb-10">
              Welcome to  
              <span className="relative  justify-center  flex text-[#6c63ff] text-5xl md:text-7xl lg:text-9xl mt-2">
                GymFit
              </span>
            </h1>

            <h2 className="text-md md:text-xl lg:text-2xl xl:text-3xl text-white mt-6 max-w-3xl py-4 lg:py-10 font-semibold">
              Welcome to GymFit, the ultimate fitness platform designed for everyone, regardless of ability, experience,
              or background. Our mission is to create an inclusive and accessible gym experience where all individuals
              feel empowered to achieve their health and wellness goals.
            </h2>

            <div className="mt-10 py-4 relative xl:left-14 md:py-10">
              <a 
                href="/Register" 
                className="font-bold text-lg md:text-4xl px-8 py-6 rounded-full shadow-2xl bg-white border-4 border-y-neutral-200 text-[#6c63ff] 
                hover:bg-[#6c63ff] hover:border-opacity-50 hover:text-white hover:scale-110 duration-300 inline-block"
              >
                Get started today
              </a>
            </div>
          </div>

          <div className=" items-center self-center relative z-20 hidden xl:block ">
              <div className="text-3xl"> 
                <Carousel/>
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

