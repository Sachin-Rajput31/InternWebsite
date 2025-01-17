import React from 'react'

const ContactUs = () => {
  return (
    <div>
    <div className="flex mr-10 md:mt-14 ml-[79px] border-2 border-orange-500 shadow-2xl shadow-black rounded-md flex-wrap md:w-[90%] justify-between bg-pink-500 text-white p-8">

  <div className="w-full  md:w-1/3">
    <h2 className="text-3xl tracking-wider px-2 py-1 inline-block rounded">
      Contact Info
    </h2>
    <div className="mt-6 space-y-4">
      
      <div className="flex items-start">
        <span className="material-icons text-black ri-map-pin-line  text-3xl"></span>
        <p className="ml-4 font-thin tracking-tighter text-2xl w-[220px] ">
          Beside Barshal Water Tank, Manpur, Barhanti,<br />
          West Bengal 723156
        </p>
      </div>
      
      <div className="flex items-start">
        <span className="ri-mail-line text-black text-3xl"></span>
        <p className="ml-4 font-thin tracking-tighter text-2xl">kkghosh0099@gmail.com</p>
      </div>
    
      <div className="flex items-start">
        <span className="ri-phone-line text-green-400 text-3xl"></span>
        <p className="ml-4 font-thin text-2xl">+91 9007062180</p>
        
      </div>
      <div className='flex p-3 space-x-3 text-4xl'>
      <i className="hover:text-blue-400 ri-facebook-fill"></i>
      <i className="hover:text-blue-400 ri-instagram-line"></i>
      <i className="hover:text-blue-400 ri-twitter-fill"></i>
      <i className="hover:text-blue-400 ri-linkedin-fill"></i>
      </div>
    
    </div>
  </div>


  <div className="w-full md:w-2/3 bg-white text-gray-800 p-6 rounded-xl shadow">
    <h2 className="text-pink-600 text-2xl font-bold mb-4">Send a Message</h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
      <div className="relative">
        <input
          type="text"
          id="first-name"
          className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 bg-transparent text-lg"
          placeholder=" "
          required
        />
        <label
          htmlFor="first-name"
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-pink-500"
        >
          First Name
        </label>
      </div>
      
      <div className="relative">
        <input
          type="text"
          id="last-name"
          className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 bg-transparent text-lg"
          placeholder=" "
          required
        />
        <label
          htmlFor="last-name"
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-pink-500"
        >
          Last Name
        </label>
      </div>
      
      <div className="relative ">
        <input
          type="email"
          id="email"
          className="peer w-[220px] md:w-[324px] border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 bg-transparent text-lg"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-pink-500"
        >
          Email Address
        </label>
      </div>
      <div className="relative ">
        <input
          type="number"
          id="number"
          className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 bg-transparent text-lg"
          placeholder=" "
          required
        />
        <label
          htmlFor="number"
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-pink-500"
        >
          Mobile Number
        </label>
      </div>
      
      
      
      
      
      <div className="relative col-span-1 md:col-span-2">
        <textarea
          id="message"
          className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 bg-transparent text-lg resize-none"
          rows="4"
          placeholder=" "
          required
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-0 top-2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-pink-500"
        >
          Write your message here...
        </label>
      </div>
      
      <div className="col-span-1 md:col-span-2 text-center">
        <button
          type="submit"
          className="bg-pink-500 w-32 border-2 tracking-wider  border-violet-300 hover:bg-pink-600 text-white py-2 px-6 rounded-full font-medium"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</div>

      
    </div>
  )
}

export default ContactUs
