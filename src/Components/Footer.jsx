import React from 'react';

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const redirecttoWha = () => {
    window.open(`https://wa.me/+919007062180`, "_blank");
  };

  return (
    <>
      <footer className='bg-[#0c0a09]'>
        <div className='text-white md:ml-4 py-28 px-4 md:px-8 flex flex-col md:items-center lg:items-start lg:flex-row lg:justify-around text-center md:text-center lg:text-start space-y-12 lg:space-y-0'>
          <div className='text-xl'>
            <h1 className='font-medium text-xl bg-gradient-to-r from-purple-300 to-teal-400 bg-clip-text text-transparent'>
              Kingsukh Guest House
            </h1>
            <div className='lg:w-72 text-[18px] opacity-60 tracking-wide font-[200] mt-9 space-y-2'>
              <p>
                Discover a world of comfort, luxury, and adventure as you explore
                our curated selection of hotels, making every moment of your getaway
                truly extraordinary.
              </p>
            </div>
            <div className='mt-8'>
              <button
                onClick={redirecttoWha}
                className="w-40 h-14 bg-gradient-to-r md:mt-20 from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-gradient hover:scale-105 transform transition rounded-md text-white text-xl"
              >
                Book Now
              </button>
            </div>
          </div>

          <div className='text-xl'>
            <h1 className='font-medium tracking-wide'>QUICK LINKS</h1>
            <div className='mt-9 space-y-3'>
              <h4 onClick={() => scrollToSection('home')} className='cursor-pointer opacity-35 duration-200 hover:opacity-90'>
                Browse Destinations
              </h4>
              <h4 onClick={() => scrollToSection('rooms')} className='cursor-pointer opacity-35 duration-200 hover:opacity-75'>
                Special Offers & Packages
              </h4>
              <h4 onClick={() => scrollToSection('rooms')} className='cursor-pointer opacity-35 duration-200 hover:opacity-75'>
                Room Types & Amenities
              </h4>
              <h4 onClick={() => scrollToSection('home')} className='cursor-pointer opacity-35 duration-200 hover:opacity-75'>
                Customer Reviews & Ratings
              </h4>
            </div>
          </div>

          <div className='text-xl'>
            <h1 className='font-medium tracking-wide'>OUR SERVICES</h1>
            <div className='mt-9 space-y-3'>
              <h4 onClick={() => scrollToSection('services')} className='cursor-pointer opacity-35 duration-200 hover:opacity-75'>
                Concierge Assistance
              </h4>
              <h4 onClick={() => scrollToSection('services')} className='cursor-pointer opacity-35 duration-200 hover:opacity-75'>
                Flexible Booking Options
              </h4>
            </div>
          </div>

          <div className='text-xl'>
            <h1 className='font-medium  tracking-wide'>CONTACT US</h1>
            <div className='mt-9 md:w-72 space-y-3'>
              <h4 className='cursor-pointer opacity-35 duration-200 hover:opacity-75'>
                Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </h4>
              <h4 className='cursor-pointer opacity-35 duration-200 hover:opacity-75'>
                kkghosh0099@gmail.com
              </h4>
              <h4 className='cursor-pointer opacity-35 duration-200 hover:opacity-75'>
                +91 9007062180
              </h4>
            </div>
          </div>
        </div>

        <p className='opacity-50 mt-8  text-[17px] font-[350] tracking-wider text-white text-center cursor-pointer'>
          Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
