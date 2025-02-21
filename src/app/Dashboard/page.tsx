"use client";

import Image from "next/image";
import NavDash from "./NavDash";
import { useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";


export default function Home() {
 
  const [spinCard, setSpinCard] = useState<{ [key: string]: boolean }>({
    whatsNew: false,
    healthTracker: false,
    mealPlanner: false,
    challenges: false,
    settings: false,
    workoutLibrary: false,
    questions: false,
    blog: false,
  });

  const [isFlipped, setIsFlipped] = useState<{ [key: string]: boolean }>({
    whatsNew: false,
    healthTracker: false,
    mealPlanner: false,
    challenges: false,
    settings: false,
    workoutLibrary: false,
    questions: false,
    blog: false,
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
      <main className="h-full text-white px-20 pt-40 pb-20 cursor-default">
        <div className="w-full max-w-screen-xlg h-full max-h-screen-xlg px-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 shadow-lg gap-4">
          
          
          <div
            className="bg-[#282828] border-4  border-[#353535] justify-center items-center  rounded-xl duration-1000 cursor-pointer"
            style={{
              transform: spinCard["whatsNew"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("whatsNew")}
          >
            {!isFlipped["whatsNew"] ? (
              <div className="relative w-full h-[500px]">
                <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
              <h1 className="text-6xl md:text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#6c63ff] duration-300 rounded-xl px-8 py-4 text-center text-[#282828] hover:text-white font-bold">
                Whats New
              </h1>
              </div>
            ) : (
              <div className=" w-full h-[500px] flex flex-col justify-center items-center absolute top-0 left-0 "
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
                  <p className="p-12 text-lg lg:text-xl xl:text-2xl text-center text-white bg-[#6c63ff]">
                  We've been working hard to bring you the best fitness experience possible, 
                  and we're thrilled to introduce a brand-new set of tools and features 
                  designed to help you achieve your goals faster, smarter, and more efficiently! 
                  Check out what's new:
                </p>
              </div>
            )}
          </div>
          
          <div
            className="bg-[#282828] border-4  border-[#353535] justify-center items-center  rounded-xl duration-1000 cursor-pointer"
            style={{
              transform: spinCard["healthTracker"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("healthTracker")}
          >
            {!isFlipped["healthTracker"] ? (
              <div className="relative w-full h-[500px]">
              <h1 className="text-5xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#6c63ff] duration-300 rounded-xl px-8 py-4 text-center text-[#282828] hover:text-white font-bold">
                Health Tracker
              </h1>
              <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
              <Image 
                src="/tracker.svg" 
                alt="Meal Planner" 
                className="w-full h-full object-cover absolute top-0 left-0"
                width={0}
                height={0}/>
            </div>
            ) : (
              <div className="relative w-full h-[500px]"
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
                <Image 
                  src="/tracker.svg" 
                  alt="Health Tracker" 
                  className="w-full h-full object-cover absolute top-0 left-0"
                  width={0}
                  height={0} 
                />
                <div className="flex flex-col justify-center h-full items-center absolute top-0 left-0 w-full">
                  <p className="p-12 text-lg lg:text-xl xl:text-2xl text-center text-white bg-[#6c63ff]">
                  Track your journey to better health with our intuitive health tracker! 
               This all-in-one tool helps you monitor vital metrics, from daily steps to 
               heart rate, sleep patterns, and calories burned.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div
            className="bg-[#282828] border-4  border-[#353535] justify-center items-center  rounded-xl duration-1000 cursor-pointer"
            style={{
              transform: spinCard["mealPlanner"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("mealPlanner")}
          >
            {!isFlipped["mealPlanner"] ? (
              <div className="relative w-full h-[500px]">
              <h1 className="text-5xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#6c63ff] duration-300 rounded-xl px-8 py-4 text-center text-[#282828] hover:text-white font-bold">
                Meal Planner
              </h1>
              <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
              <Image 
                src="/meals.svg" 
                alt="Meal Planner" 
                className="w-full h-full object-cover absolute top-0 left-0"
                width={0}
                height={0}/>
            </div>
            
            ) : (
              <div className="relative w-full h-[500px]"
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
                <Image 
                  src="/meals.svg" 
                  alt="Health Tracker" 
                  className="w-full h-full object-cover absolute top-0 left-0"
                  width={0}
                  height={0} 
                />
                <div className="flex flex-col justify-center h-full items-center absolute top-0 left-0 w-full">
                  <p className="p-12 text-lg lg:text-xl xl:text-2xl text-center text-white bg-[#6c63ff]">
                  Simplify your meal planning and take control of your nutrition with our Meal Planner!
                   Whether you're looking to eat healthier, lose weight, or just streamline your daily meals,
                    our intuitive tool helps you plan balanced, nutritious meals that fit your lifestyle and
                     dietary preferences.
                  </p>
                </div>
              </div>

            )}
          </div>
          
          <div
            className="bg-[#282828] border-4  border-[#353535] justify-center items-center  rounded-xl duration-1000 cursor-pointer"
            style={{
              transform: spinCard["workoutLibrary"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("workoutLibrary")}
          >
            {!isFlipped["workoutLibrary"] ? (
              <div className="relative w-full h-[500px]">
              <h1 className="text-5xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#6c63ff] duration-300 rounded-xl px-8 py-4 text-center text-[#282828] hover:text-white font-bold">
                workout Library
              </h1>
              <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
              <Image 
                src="/workout.svg" 
                alt="Meal Planner" 
                className="w-full h-full object-cover absolute top-0 left-0"
                width={0}
                height={0}/>
            </div>
            ) : (
              <div className="relative w-full h-[500px]"
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
                <Image 
                  src="/workout.svg" 
                  alt="Health Tracker" 
                  className="w-full h-full object-cover absolute top-0 left-0"
                  width={0}
                  height={0} 
                />
                <div className="flex flex-col justify-center h-full items-center absolute top-0 left-0 w-full">
                  <p className="p-12 text-lg lg:text-xl xl:text-2xl text-center text-white bg-[#6c63ff]">
               Unlock a world of fitness possibilities with our comprehensive workout library!
                Whether you're a beginner or a seasoned athlete, our curated collection of 
                workouts is designed to help you reach your fitness goals, one exercise at a time.
                </p>
              </div>
              </div>
            )}
          </div>

          <div
            className="bg-[#282828] border-4  border-[#353535] justify-center items-center  rounded-xl duration-1000 cursor-pointer"
            style={{
              transform: spinCard["challenges"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("challenges")}
          >
            {!isFlipped["challenges"] ? (
              <div className="relative w-full h-[500px]">
              <h1 className="text-5xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#6c63ff] duration-300 rounded-xl px-8 py-4 text-center text-[#282828] hover:text-white font-bold">
                Challenges and leaderboards
              </h1>
              <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
              <Image 
                src="/challenge.svg" 
                alt="Meal Planner" 
                className="w-full h-full object-cover absolute top-0 left-0"
                width={0}
                height={0}/>
            </div>
            ) : (
              <div className="relative w-full h-[500px]"
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
                <Image 
                  src="/challenge.svg" 
                  alt="Health Tracker" 
                  className="w-full h-full object-cover absolute top-0 left-0"
                  width={0}
                  height={0} 
                />
                <div className="flex flex-col justify-center h-full items-center absolute top-0 left-0 w-full">
                  <p className="p-12 text-lg lg:text-xl xl:text-2xl text-center text-white bg-[#6c63ff]">
               Take your fitness journey to the next level with our exciting and motivating gym challenges!
                Whether you're looking to build strength, improve endurance, or test your limits, our challenges
                 are designed to inspire and push you to achieve more.
                </p>
              </div>
              </div>
            )}
          </div>

          <div
            className="bg-[#282828] border-4  border-[#353535] justify-center items-center  rounded-xl duration-1000 cursor-pointer"
            style={{
              transform: spinCard["questions"] ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
            onClick={() => toggleSpin("questions")}
          >
            {!isFlipped["questions"] ? (
              <div className="relative w-full h-[500px]">
              <h1 className="text-5xl md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white hover:bg-[#6c63ff] duration-300 rounded-xl px-8 py-4 text-center text-[#282828] hover:text-white font-bold">
                Any questions
              </h1>
              <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
              <Image 
                src="/questions.svg" 
                alt="Meal Planner" 
                className="w-full h-full object-cover absolute top-0 left-0"
                width={0}
                height={0}/>
            </div>
            ) : (
              <div className="relative w-full h-[500px]"
              style={{transform: spinCard ? 'rotateY(180deg)' : 'rotateY(0)'}}>
                <FaArrowRotateRight className="absolute top-4 right-4 z-10 text-[#6c63ff] text-5xl hover:rotate-180 duration-300"/>
                <Image 
                  src="/questions.svg" 
                  alt="Health Tracker" 
                  className="w-full h-full object-cover absolute top-0 left-0"
                  width={0}
                  height={0} 
                />
                <div className="flex flex-col justify-center h-full items-center absolute top-0 left-0 w-full">
                  <p className="p-12 text-lg lg:text-xl xl:text-2xl text-center text-white bg-[#6c63ff]">
               Find quick answers to the most commonly asked questions about our services, products, and features. 
               Whether you're a first-time user or a seasoned pro, our FAQ section is here to help you get 
               the information you need fast.
                </p>
              </div>
              </div>
            )}
          </div>

        
        </div>
      </main>
  </div>
  );
}
