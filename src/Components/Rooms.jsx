
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Rooms = ({redirecttoWha}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
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
      const redirected = () => {
        redirecttoWha(window.open(`https://wa.me/+919007062180`, "_blank"));
      };
    
  return (
    <motion.div className='h-screen w-full text-xl mt-48 ml-8 bg-white'

    ref={ref}
    >
        <motion.div
                className="relative mt-8 md:mt-16 md:ml-8 w-full md:w-full"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
       <motion.h3
          className="text-lg md:text:xl  tracking-wide font-medium text-gray-800 mb-1"
          variants={itemVariants}
        >
        OUR LIVING ROOM
        </motion.h3>
          <motion.div
                  className="w-28 absolute rounded md:w-40 h-[3px] bg-gradient-to-r from-pink-600 mx-auto md:mx-0"
                  variants={itemVariants}
                ></motion.div>
        <motion.h1
          className="text-3xl mt-4 md:text-4xl font-medium bg-gradient-to-r from-orange-500 to to-amber-500 bg-clip-text text-transparent mt-2"
          variants={itemVariants}
        >
       The Most Memorable Rest Time Starts Here.
        </motion.h1>

        
        <div className="flex overflow-x-auto space-x-9 md:w-full bg-[#fff] mt-16 px-4 scrollbar-hide">

  <motion.div className="h-[450px] mb-7 md:mb-7  shadow-xl shadow-red-600  rounded-2xl flex-shrink-0 w-[330px] flex-col"
  variants={itemVariants}>
    <div 
      className="h-[40%] inset-0 bg-cover bg-center rounded-t-xl"
      style={{ backgroundImage: "url('/images/room1.jpg')" }}
    ></div>
    <h6 className="m-6 font-medium">Cozy Haven Room</h6>
    <h4 className='text-gray-800 text-base px-6 w-[350px]'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</h4>
    <h4 className='text-gray-400 font-medium  mt-2 px-6 w-[350px]'>Starting from {" "} <span className='font-bold text-xl bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent'> Rs.1000/night</span></h4>
    <motion.button 
              onClick={redirected}
              className="w-32 md:w-34 h-10 md:h-10 mt-6 ml-5 active:scale-75 shadow-lg bg-pink-500 shadow-pink-950 rounded-md hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm md:text-xl"
              variants={itemVariants}
            >
              Book Now
            </motion.button>
  </motion.div>
  <motion.div className="h-[450px] mb-7 md:mb-7  shadow-xl shadow-red-500  rounded-2xl flex-shrink-0 w-[330px] flex-col"
  variants={itemVariants}>
    <div 
      className="h-[40%] inset-0 bg-cover bg-center rounded-t-xl"
      style={{ backgroundImage: "url('/images/recep.jpg')" }}
    ></div>
    <h6 className="m-6 font-medium">Lux Cozy Room</h6>
    <h4 className='text-gray-800 text-base px-6 w-[350px]'>This is for newly design room with AC and all comfort making things have there in this rooms</h4>
    <h4 className='text-gray-400 font-medium  mt-2 px-6 w-[350px]'>Starting from {" "} <span className='font-bold text-xl bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent'> Rs.1300/night</span></h4>
    <motion.button 
              onClick={redirected}
              className="w-32 md:w-34 h-10 md:h-10 mt-6 ml-5 active:scale-75 shadow-lg bg-pink-500 shadow-pink-950 rounded-md hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm md:text-xl"
              variants={itemVariants}
            >
              Book Now
            </motion.button>
  </motion.div>
  <motion.div className="h-[450px] mb-7 md:mb-7  shadow-xl shadow-red-600  rounded-2xl flex-shrink-0 w-[330px] flex-col"
  variants={itemVariants}>
    <div 
      className="h-[40%]  inset-0 bg-cover bg-center rounded-t-xl"
      style={{ backgroundImage: "url('/images/large.jpg')" }}
    ></div>
    <h6 className="m-6 font-medium">Larger Room</h6>
    <h4 className='text-gray-800 text-base px-6 w-[350px]'>Larger and all comfortable room for budget friendly and with 24/7 customer helping addon </h4>
    <h4 className='text-gray-400 font-medium  mt-2 px-6 w-[350px]'>Starting from {" "} <span className='font-bold text-xl bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent'> Rs.1600/night</span></h4>
    <motion.button 
              onClick={redirected}
              className="w-32 md:w-34 h-10 md:h-10 mt-6 ml-5 active:scale-75 shadow-lg bg-pink-500 shadow-pink-950 rounded-md hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm md:text-xl"
              variants={itemVariants}
            >
              Book Now
            </motion.button>
  </motion.div>
  
  <motion.div className="h-[450px] shadow-2xl shadow-red-600  rounded-2xl flex-shrink-0 w-[330px] flex-col"
  variants={itemVariants}>
    <div
      className="h-[40%] inset-0 bg-cover bg-center rounded-t-xl"
      style={{ backgroundImage: "url('/images/small.jpg')" }}
    ></div>
    <h6 className="m-6 font-medium">Spacious Serenity Suite</h6>
    <h4 className='text-gray-800 text-base px-6 w-[350px]'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</h4>
    <h4 className='text-gray-400 font-medium  mt-2 px-6 w-[350px]'>Starting from {" "} <span className='font-bold text-xl bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent'> Rs.1500/night</span></h4>
     <motion.button
               onClick={redirected}
               className="w-32 md:w-34 h-10 md:h-10 mt-6 ml-5 active:scale-75 shadow-lg bg-pink-500 shadow-pink-950 rounded-md hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm md:text-xl"
               variants={itemVariants}
             >
               Book Now
             </motion.button>
  </motion.div>
</div>
</motion.div>
</motion.div>

  )
}

export default Rooms
