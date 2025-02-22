import { useState } from "react";

const Carousel: React.FC = () => {
  return <SlideBox />;
};

const SlideBox: React.FC = () => {
  const slides = [
    "The next generation of personal fitness is now.",
    "Cutting edge health tools to help you reach your goals.",
    "Personally tailored plans to help you realize your fitness future."
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
   
      <div className="relative w-[300px] h-[200px]">
        {slides.map((slideText, index) => (
          <div
            key={index}
            className={`flex items-center justify-center bg-[#6c63ff] rounded-xl h-[200px] w-full text-center p-6 shadow-lg 
              absolute transition-opacity duration-1000 ease-out 
              ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
          >
            <p className="font-semibold text-white">{slideText}</p>
          </div>
        ))}
      </div>

    
      <div className="flex gap-4 absolute bottom-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[14px] w-[14px] rounded-full cursor-pointer 
              transition-all duration-300
              ${currentSlide === index ? "bg-white scale-110" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;



