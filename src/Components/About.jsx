import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = ({ redirecttoWha }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const redirected = () => {
    redirecttoWha(window.open(`https://wa.me/+919007062180`, "_blank"));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex mt-16 flex-col md:flex-row items-center justify-center h-auto md:h-[90vh] top-16 p-4"
    >
 
      <motion.div
        className="relative rounded-xl h-[60vh] w-[96%] sm:w-[60%] sm:h-[70vh] md:w-[37%] lg:h-[90vh] bg-cover bg-center shadow-lg"
        style={{ backgroundImage: "url('/images/out.jpg')" }}
        initial={{ opacity: 0, y: "100vh" }}
        animate={inView ? { opacity: 1, y: "0" } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      
      <motion.div
        className="relative ml-8 mt-8 md:mt-16 md:ml-8 w-full md:w-[50%]"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h3
          className="text-lg md:text:xl tracking-widest font-medium text-gray-800 mb-1"
          variants={itemVariants}
        >
          ABOUT US
        </motion.h3>
        <motion.div
          className="w-20 absolute rounded md:w-24 h-[3px] bg-gradient-to-r from-pink-600 mx-auto md:mx-0"
          variants={itemVariants}
        ></motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-orange-500 to to-amber-400 bg-clip-text text-transparent mt-2"
          variants={itemVariants}
        >
          The Best Holidays Start Here!
        </motion.h1>

        <motion.p
          className="text-sm md:text-base mt-4 text-gray-500 leading-6"
          variants={itemVariants}
        >
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.
        </motion.p>

        <motion.p
          className="mt-4 text-sm md:text-base font-bold leading-6 text-blue-600"
          variants={itemVariants}
        >
          Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
          723156 <br />
          Contact us: <span>+91 9007062180 🤙</span>
        </motion.p>

        <motion.button
          onClick={redirected}
          className="w-32 md:w-34 h-10 md:h-10 mt-3 active:scale-75 shadow-lg bg-pink-500 shadow-pink-950 rounded-md hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm md:text-xl"
          variants={itemVariants}
        >
          Book Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default About;
