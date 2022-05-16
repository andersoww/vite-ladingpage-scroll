import { useCallback, useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = useCallback(() => {
    setIsOpen(!isOpen)
  }, [setIsOpen, isOpen])

  return (
    <div>
      <Navbar onOpen={toggleSideBar} />
      <Sidebar onClose={toggleSideBar} isOpen={isOpen} />
      <HeroSection />
    </div>
  );
}
export default Home;