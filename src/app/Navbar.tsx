"use client"; 

import { useState, useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { useRouter } from "next/navigation"; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1024);
  const router = useRouter(); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="h-20 w-full bg-[#282828] fixed  border-b-4 border-[#353535] z-40 flex items-center  justify-between px-8 text-white"
    style={{borderBottomColor: !isOpen ? "#353535" : "transparent"}}>
      
      <h1 className="lg:text-4xl text-3xl text-[#6c63ff] font-bold cursor-default">
        GymFit
      </h1>

      {screenWidth > 768 && (
        <ul className="lg:text-2xl text-xl font-bold flex space-x-8 cursor-pointer">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item} className="hover:opacity-70 hover:underline duration-300 ">{item}</li>
          ))}
        </ul>
      )}

      {/* Login & Register Section */}
      <div className="lg:text-2xl text-xl font-bold flex items-center space-x-8 cursor-pointer">
        {screenWidth > 768 ? (
          <ul className="flex space-x-8">
            <li className="flex items-center cursor-pointer hover:text-[#6c63ff] duration-300" onClick={() => router.push("/Login")}>
              Login
            </li>
            <li 
              onClick={() => router.push("/Register")} 
              className="bg-white text-[#282828] rounded-lg px-4 py-1 
              hover:bg-[#6c63ff] hover:text-white duration-300 cursor-pointer">
              Sign up
            </li>
          </ul>
        ) : (
          <div className="flex items-center space-x-6">
            <FaBarsStaggered
              onClick={toggleDropdown}
              className="text-white text-2xl cursor-pointer"
            />
            <div>
              <ul className="flex items-center space-x-4">
                <li className="flex items-center cursor-pointer" onClick={() => router.push("/login")}>
                  Login
                </li>
                <li 
                  className="bg-white text-[#282828] rounded-lg px-4 py-1 
                  hover:bg-[#6c63ff] hover:text-white duration-300 cursor-pointer"
                  onClick={() => router.push("/register")} 
                >
                  Sign up
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      
      {isOpen && screenWidth <= 768 && (
        <div className="absolute top-20 left-0 w-full bg-[#282828] flex flex-col items-center text-xl font-bold py-4 cursor-pointer">
          <ul className="w-full flex flex-col items-center space-y-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item} className="py-2 hover:opacity-70 hover:underline duration-300">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
