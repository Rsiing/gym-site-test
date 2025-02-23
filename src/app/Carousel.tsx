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
    <div className="w-full h-full flex flex-col bottom-10 items-center justify-center relative">
   
      <div className="relative w-[400px] h-[350px] mr-24">
        {slides.map((slideText, index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-xl h-[450px] w-[500px] text-center  p-6
              absolute transition-opacity duration-1000 ease-out 
              ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
          >
            <p className="font-semibold text-white text-4xl">{slideText}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-8 relative bottom-0 ">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[20px] w-[20px] rounded-full cursor-pointer 
              transition-all duration-300
              ${currentSlide === index ? "bg-[#6c63ff] scale-110" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;




