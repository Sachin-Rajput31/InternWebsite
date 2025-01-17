import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import "remixicon/fonts/remixicon.css";

const Services = () => {
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
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1.05, 
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
    <motion.div
      ref={ref}
      className="relative flex flex-col-reverse md:flex-row items-center md:items-start h-auto md:h-screen  p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
     
      <motion.div 
        className="flex  h-[300px] sm:h-[400px] md:h-[90%] w-full md:w-[60%] mt-6 md:mt-20 md:ml-8 rounded shadow-2xl shadow-blue-200"
        initial={{ opacity: 0, y: "100vh" }}
        animate={inView ? { opacity: 1, y: "0" } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ backgroundImage: "url('/images/service.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
      </motion.div> 

      
      <motion.div className="w-full  ml-14 md:ml-[80px] md:w-[60%] md:mt-32 relative flex flex-col items-start space-y-8 mt-8 md:mt-0 md:ml-8">
        <motion.h3 
          className="text-lg md:text-xl tracking-widest font-medium text-gray-900 mb-1"
        >
          SERVICES
        </motion.h3>
        <motion.div className="w-20  absolute md:w-24 h-[2.5px] rounded-lg bg-gradient-to-r from-pink-500 md:absolute rounded-md"></motion.div>
        <motion.p
          className="text-3xl md:relative bottom-3 sm:text-4xl font-medium bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"
        >
          Strive Only For The Best.
        </motion.p> 


        <motion.ul
          className="grid grid-cols-1  sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
         
          {[
            { icon: "ri-shield-star-line", text: "High Class Security", bg: "bg-[#dbeafe]", color: "#60a5fa" },
            { icon: "ri-24-hours-line", text: "24 Hours Room Service", bg: "bg-[#fce7f3]", color: "#f472b6" },
            { icon: "ri-restaurant-2-fill", text: "Restaurant", bg: "bg-[#f3e8ff]", color: "#c084fc" },
            { icon: "ri-map-2-line", text: "Tourist Guide Support", bg: "bg-[#ffe4e6]", color: "#fb7185" },
          ].map((service, index) => (
            <motion.li 
              key={index}
              variants={itemVariants} 
              className="flex items-center space-x-4"
            >
              <div className={`h-14 w-14 flex items-center justify-center rounded-full ${service.bg}`}>
                <span className={service.icon} style={{ fontSize: "38px", color: service.color }}></span>
              </div>
              <span className="text-gray-900 text-base md:text-lg font-medium">{service.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      
      </motion.div>
      
    </motion.div>
    <div className='h-auto w-[92%] rounded-2xl my-20 mx-auto bg-[#fff] shadow-2xl shadow- p-6'>
  <div className='flex flex-col md:flex-row justify-around items-center h-full'>
    <div className='text-center mb-6 md:mb-0'>
      <h4 className='font-bold text-4xl'>100+</h4>
      <h5 className='text-2xl mt-2'>Bookings Completed</h5>
    </div>
    <div className='text-center'>
      <h1 className='font-bold text-4xl'>150+</h1>
      <h5 className='text-2xl mt-2'>Happy Customers</h5>
    </div>
  </div>
</div>

    </>
  );
};

export default Services;
