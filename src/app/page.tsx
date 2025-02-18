import { FaBarsStaggered } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="h-20 bg-[#282828] items-center flex">
      <h1 className="lg:text-4xl text-3xl font-bold ml-8 cursor-default">Gym Site</h1>
      <ul className="lg:text-2xl text-xl font-bold justify- flex space-x-8 mx-auto cursor-pointer">
        <li className="hover:text-[#606060] duration-300">Home</li>
        <li className="hover:text-[#606060] duration-300">About</li>
        <li className="hover:text-[#606060] duration-300">Services</li>
        <li className="hover:text-[#606060] duration-300">Contact</li>
      </ul>
      <ul className="lg:text-2xl text-xl font-bold justify- flex mr-8 space-x-8 cursor-pointer">
        <li className="hover:text-[#606060] duration-300">Login</li>
        <li className="hover:text-[#606060] duration-300">Register</li>
        <FaBarsStaggered/>
      </ul>

    </div>
  );
}
