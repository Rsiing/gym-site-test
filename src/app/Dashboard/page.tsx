"use client";

import Image from "next/image";
import NavDash from "./NavDash";
import { useState } from "react";


export default function Home() {
 
  const [spinCard, setSpinCard] = useState<{ [key: string]: boolean }>({
    whatsNew: false,
    healthTracker: false,
    mealPlanner: false,
    settings: false,
  });

  const [isFlipped, setIsFlipped] = useState<{ [key: string]: boolean }>({
    whatsNew: false,
    healthTracker: false,
    mealPlanner: false,
    settings: false,
  });


  const toggleSpin = (card: string) => {
    setSpinCard((prev) => ({
      ...prev,
      [card]: !prev[card],
    }));

    setTimeout(() => {
      setIsFlipped((prev) => ({
        ...prev,
        [card]: !prev[card],
      }));
    }, 350); 
  };

  return (
    <div>
      <NavDash />
      <main className="h-full px-20 pt-40 pb-20 cursor-default">
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 shadow-lg gap-4">
          
          {/* What's New Card */}
          <div
            className="bg-[#282828] border-4 border-[#353535] justify-center items-center flex flex-col rounded-xl duration-1000 cursor-pointer"
            style={{
              transform: spinCard["whatsNew"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("whatsNew")}
          >
            {!isFlipped["whatsNew"] ? (
              <div>
                <h1 className="text-4xl py-24 text-center text-[#6c63ff] font-bold">
                  What's New
                </h1>
              </div>
            ) : (
              <div className="flex flex-col justify-center  items-center"
               style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <p className="p-12 text-lg lg:text-xl xl:text-2xl">
                  We've been working hard to bring you the best fitness experience possible, 
                  and we're thrilled to introduce a brand-new set of tools and features 
                  designed to help you achieve your goals faster, smarter, and more efficiently! 
                  Check out what's new:
                </p>
              </div>
            )}
          </div>

          {/* Health Tracker Card */}
          <div
            className="bg-[#282828] border-4 border-[#353535] rounded-xl transition-transform duration-1000 flex flex-col justify-center items-center cursor-pointer"
            style={{
              transform: spinCard["healthTracker"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("healthTracker")}
          >
            {!isFlipped["healthTracker"] ? (
              <div className="flex flex-col">
                <h2 className="text-4xl p-4 text-center text-[#6c63ff] font-bold">
                  Health Tracker
                </h2>
                <div className=" justify-center flex flex-col self-center rounded-b-3xl">
                  <Image src="/tracker.svg" alt="" className="w-auto h-auto px-4 pt-4"
                    width={200} height={200}/>
                  <button className="text-2xl py-2 w-full text-center text-white bg-[#6c63ff] hover:opacity-100 opacity-80  duration-300 rounded-b-lg font-semibold ">
                    My Tracker
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center  items-center"
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <p className="p-12 text-lg lg:text-xl xl:text-2xl">
                  Your fitness journey isn't just about workouts, it's about 
                  your overall health and well-being. With the GymFit Health 
                  Tracker, you can now monitor, analyze, and optimize key health
                  metrics to stay on top of your goals.
                </p>
              </div>
            )}
          </div>

          <div className="bg-[#282828] border-4 border-[#353535] rounded-xl"></div>
          <div className="bg-[#282828] border-4 border-[#353535] rounded-xl"></div>

          <div className="bg-[#282828] border-4 border-[#353535] justify-around 
            lg:col-span-2 md:col-span-1 flex lg:grid-cols-2 rounded-xl">
            <div className="flex flex-col items-center p-4 pl-8 lg:w-2/3 h-full justify-between">
              <h3 className="text-4xl px-4 pb-4 lg:pb-2 text-[#6c63ff] font-bold">Challenges</h3>
              <p className="text-lg lg:text-xl xl:text-2xl md:pb-2 pb-4 pl-4 flex-grow flex items-center">
                Stay motivated and push your limits with Challenges & Leaderboards! Compete with 
                friends, join fitness challenges, and track your progress in real time. Earn points, 
                climb the leaderboard, and celebrate your achievements as you reach new milestones.
              </p>
              <button className="rounded-full text-white lg:mb-4 bg-[#6c63ff] px-6 py-3 mb-2 text-2xl lg:text-3xl xl:text-4xl 
                hover:opacity-100 opacity-90 duration-300 font-semibold">
                My Challenges
              </button>
            </div>
            <div className="self-center">
              <Image src="/challenge.svg" alt="" className='hidden lg:inline h-auto w-auto ' width={200} height={200}/>
            </div>
          </div>
          
          <div className="bg-[#282828] border-4 border-[#353535] rounded-xl"></div>

          <div
            className="bg-[#282828] border-4 border-[#353535] rounded-xl transition-transform duration-1000 flex flex-col justify-center items-center cursor-pointer"
            style={{
              transform: spinCard["mealPlanner"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("mealPlanner")}
          >
            {!isFlipped["mealPlanner"] ? (
              <div className="flex flex-col">
                <h2 className="text-4xl p-4 text-center text-[#6c63ff] font-bold">
                  Meal planner
                </h2>
                <div className=" justify-center flex flex-col self-center rounded-b-3xl">
                  <Image src="/meals.svg" alt="" className="w-auto h-auto px-8 pt-4"
                    width={200} height={200}/>
                  <h3 className="text-2xl  py-2 w-full text-center text-white bg-[#6c63ff] hover:opacity-100 opacity-80  duration-300 cursor-pointer rounded-b-lg font-semibold ">
                    My meal plans
                  </h3>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center  items-center"
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <p className="p-12 text-lg lg:text-xl xl:text-2xl">
                  Take control of your nutrition with our intelligent Meal Planner!
                  Easily create customized meal plans, track your daily calorie intake, 
                  and get personalized nutrition recommendations tailored to your fitness goals.
                  Whether you're bulking, cutting, or maintaining, our Meal Planner 
                  helps you stay on track with healthy, balanced meals designed for optimal 
                  performance and well-being.
                </p>
              </div>
            )}
          </div>

          
          <div
            className="bg-[#282828] border-4 border-[#353535] rounded-xl transition-transform duration-1000 flex flex-col justify-center items-center cursor-pointer"
            style={{
              transform: spinCard["settings"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("settings")}
          >
            {!isFlipped["settings"] ? (
              <div className="flex flex-col">
                <h2 className="text-4xl p-4 text-center text-[#6c63ff] font-bold">
                  My settings
                </h2>
                <div className=" justify-center flex flex-col self-center rounded-b-3xl">
                  <Image src="/settings.svg" alt="" className="w-auto h-auto px-8 pt-4"
                    width={200} height={200}/>
                  
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center text-md lg-xl xl:text-2xl  items-center gap-4 p-4"
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <a href="" className=" text-white px-4 py-2 rounded-xl bg-[#6c63ff] duration-300 opacity-80 hover:opacity-100">
                <button>Account settings</button>
                </a>
                <a href="" className=" text-white px-4 py-2 rounded-xl bg-[#6c63ff] duration-300 opacity-80 hover:opacity-100">
                <button>Preferences</button>
                </a>
                <a href="" className=" text-white px-4 py-2 rounded-xl bg-[#6c63ff] duration-300 opacity-80 hover:opacity-100">
                <button>Fitness and Health tracking</button>
                </a>
                <a href="" className=" text-white px-4 py-2 rounded-xl bg-[#6c63ff] duration-300 opacity-80 hover:opacity-100">
                <button>Privacy and security</button>
                </a>
                <a href="" className=" text-white px-4 py-2 rounded-xl bg-[#6c63ff] duration-300 opacity-80 hover:opacity-100">
                <button>Support and Help center</button>
                </a>
              </div>
            )}
          </div>

      </div>
    </main>
  </div>
  );
}
