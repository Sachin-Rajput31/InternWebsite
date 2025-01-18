import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import About from "./About";
import Rooms from "./Rooms";
import Services from "./Services";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import MyMap from "./MyMap.jsx";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";


const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const redirecttoWha = () => {
    window.open(`https://wa.me/+919007062180`, "_blank");
  };
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className="relative w-full h-screen" id="home">
     <motion.div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/ayodhya.webp')" }}
  initial={{ scale: 1 }}
  animate={{ scale: 1.1 }}
  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
>

        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </motion.div>
      <nav
  className={`fixed top-0 w-full py-7 h-[5rem] pt-10 px-8 md:px-8 z-20 flex justify-between items-center bg-slate-700 bg-opacity-50 backdrop-blur ${
    scrolling ? "bg-slate-900  text-white" : "text-gray-200"
  } transition-all duration-300`}
>
        <div className="text-xl md:text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-200 to-teal-300 bg-clip-text text-transparent break-words max-w-[200px]">
          Kingsukh <br />
          Guest House
        </div>

        <div className="hidden md:flex flex text-xl space-x-6 lg:space-x-8">
          <Link  onClick={() => handleScroll("home")}
            to="/home"
            className="text-white hover:text-pink-600 hover:scale-x-110 transition-all duration-300"
          >
            Home
          </Link>
          <Link onClick={() => handleScroll("about")}
            to="/about"
            className="text-white hover:text-pink-600 hover:scale-x-110 transition-all duration-300"
          >
            About
          </Link>
          <Link onClick={() => handleScroll("rooms")}
            to="/rooms"
            className="text-white hover:text-pink-600 hover:scale-x-110 transition-all duration-300"
          >
            Rooms
          </Link>
          <Link onClick={() => handleScroll("services")}
            to="/services"
            className="text-white hover:text-pink-600 hover:scale-x-110 transition-all duration-300"
          >
            Services
          </Link>
          <Link  onClick={() => handleScroll("gallery")}
            to="/gallery"
            className="text-white hover:text-pink-600 hover:scale-x-110 transition-all duration-300"
          >
            Gallery
          </Link>
          <Link  onClick={() => handleScroll("contactUs")}
            to="/contact"
            className="text-white hover:text-pink-600 hover:scale-x-110 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={redirecttoWha}
          className="w-36 h-12 hidden md:block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-gradient hover:scale-105 transform transition rounded-md text-white text-xl"
        >
          Book Now
        </button>
        {!isOpen ? <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-5xl text-white">≡</span>
        </div> : <div
          className=" text-3xl cursor-pointer"
          onClick={() => setIsOpen(isOpen)}
        >
          <span className="text-3xl md:hidden z-20  text-white">X</span>
        </div> }
         </nav>
      

      {isOpen && (
        
        <div className="fixed top-0 left-0 w-full h-full z-20 bg-pink-500 bg-opacity-100 flex flex-col items-center justify-center md:hidden">
          <Link
            to="/home"
            className="text-2xl w text-white hover:text-black mb-4"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-2xl text-white hover:text-black mb-4"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-2xl text-white hover:text-black mb-4"
            onClick={() => setIsOpen(false)}
          >
            
          </Link>
          <Link 
            to="/rooms" 
            className="text-2xl text-white hover:text-black mb-4"
            onClick={() => setIsOpen(false)}
          >
            Rooms
          </Link>
          <Link
            to="/gallery"
            className="text-2xl text-white hover:text-black mb-4"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-2xl text-white hover:text-black mb-4"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          
        </div>
      )}

      <motion.div
        className="relative flex flex-col items-center text-center h-full z-10 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[22px] tracking-wider mt-64 text-white text-opacity-50 font-medium"
          variants={tagVariants}
        >
         Simple - Unique - Friendly
        </motion.h1>

        <motion.p
          className="text-4xl md:text-7xl mt-7 font-medium tracking-wide"
          variants={tagVariants}
        >
         Make Yourself At Home <br />
          In Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Guest House
          </span>
        </motion.p>
      </motion.div>

      <div className="h-28 ml-5 rounded border-2 border-blue-50 w-[97%] relative z-10 flex justify-center bg-[#fff] ring-1 ring-[white] shadow-2xl">
        <button
          onClick={redirecttoWha}
          className="w-36 h-12 mt-8  shadow-xl active:scale-100 bg-pink-500 shadow-pink-950 rounded-md hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl"
        >
          Book Now
        </button>
      </div>
      <div id="about">
        <About redirect = {redirecttoWha} />
      </div>
   
  <div id="rooms">
  <Rooms/>
  </div>
  <div id="services">
    <Services/>
  </div>
  <div id="gallery">
    <Gallery/>
  </div>
  <div id="contactUs">
    <ContactUs/>
  </div>
  <ErrorBoundary>
  <div>
    <MyMap  />
  </div>
  </ErrorBoundary>
  <div>
    <Footer/>
  </div>
</div>

  );
};

export default Header;
