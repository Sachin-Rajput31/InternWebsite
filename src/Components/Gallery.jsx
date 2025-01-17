import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const images = [
    { src: "/images/1.jpg", caption: "Beautiful Landscape" },
    { src: "/images/ayodhya.webp", caption: "Ayodhya Temple" },
    { src: "/images/baranti.webp", caption: "Baranti Lake" },
    { src: "/images/flower.jpg", caption: "Lovely Flowers" },
   
    { src: "/images/palash.webp", caption: "Blooming Palash" },
    { src: "/images/mithonDam.webp", caption: "Mithon Dam" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.h1
        ref={ref}
        className="text-lg md:text-xl text-center tracking-widest font-medium text-gray-900 mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Gallery
      </motion.h1>
      <div className="w-16 absolute left-[42%] md:left-[47%] rounded md:w-24 h-[3px] bg-gradient-to-r from-pink-600"></div>
      <div className="min-h-screen flex items-center justify-center py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map(({ src, caption }, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              variants={itemVariants}
              whileHover="hover"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100"
                variants={overlayVariants}
              >
                <p className="text-white text-lg font-semibold">{caption}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Gallery;
