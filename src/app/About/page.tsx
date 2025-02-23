"use client";
import Image from "next/image";
import Navbar from "../Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="h-full px-10 lg:px-20 pt-40 pb-20 cursor-default duration-300 flex justify-center">
        <div className="w-full relative rounded-xl bg-[#282828] border-4 border-[#353535] flex justify-center shadow-xl overflow-hidden">
          
          <div className="relative z-20 flex flex-col items-center text-center px-10 lg:px-20 py-16 w-full max-w-4xl">
            
            <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl pb-4 md:pb-10">
              What we are  
              <span className="block text-[#6c63ff] text-5xl md:text-7xl lg:text-9xl mt-2">
                About
              </span>
            </h1>

            <h2 className="text-md md:text-xl lg:text-2xl xl:text-3xl text-white mt-6 max-w-3xl py-4 font-semibold">
              At GymFit, we believe fitness is for everyone. Whether you're 
              building strength, losing weight, increasing endurance, or 
              staying active, we provide everything you need to achieve your goals.
            </h2>
            
            <div className="p-12 w-full max-w-3xl text-center rounded-2xl mt-6 bg-[#6c63ff] border-4">
              <h3 className="text-lg font-semibold pb-4 text-white text-md md:text-xl lg:text-2xl xl:text-3xl">Some key features include:</h3>
              <div className="mt-4 space-y-4 font-semibold text-white text-md md:text-lg lg:text-xl xl:text-2xl">
                <p>• Curated health and wellbeing application designed specifically for your needs.</p>
                <p>• Track your progress in real-time to get one step closer to your fitness goals.</p>
                <p>• Extensive accessibility controls to make your GymFit experience one to remember.</p>
                <p>• Connect with like-minded people striving to make your GymFit experience special.</p>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="/Register" 
                className="font-bold text-lg md:text-4xl px-8 py-6 rounded-full shadow-2xl bg-white border-4 border-y-neutral-200 text-[#6c63ff] 
                hover:bg-[#6c63ff] hover:border-opacity-50 hover:text-white hover:scale-110 duration-300 inline-block"
              >
                Get started today
              </a>
            </div>
          </div>

          <div className="absolute inset-0 z-1">
            <Image 
              src="/about.svg" 
              alt="Gym background" 
              className="w-full h-full object-cover opacity-20"
              layout="fill"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

