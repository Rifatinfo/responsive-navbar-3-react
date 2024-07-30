import { useState } from 'react';
import './App.css'
import { IoLogoJavascript } from "react-icons/io5";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { BiCross } from "react-icons/bi";



function App() {
  
   const [open, setOpen] = useState(false); 

  return (
    <>
  
     <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400'> 
         <header className='flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md'>
            <a href="" className='flex items-center gap-3'>
                <IoLogoJavascript className='text-3xl hover:scale-105 transition-all ' />
                <span className='font-semibold text-2xl'>React Nav</span>
            </a>
            <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Home</li>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Product</li>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Explore</li>
              <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Contact</li>
            </ul>

            <div className='relative hidden md:flex items-center justify-center gap-3'>
                          <input type="text" placeholder="Search here"
                                 className="input input-bordered input-info w-full max-w-xs rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500" />
            </div>
            <span className='lg:hidden block text-4xl cursor-pointer  mr-3' onClick={() => setOpen(!open)}>
              {
                open ?  <BiCross /> : <RiMenuUnfold2Fill /> 
              }
            </span>

            <div className={`absolute lg:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform duration-500 ease-in  ${open ? 'opacity-100' : 'opacity-0'}`}>
             <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
             <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Product</li>
             <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Explore</li>
             <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact</li>
            </div>
         </header>
      </div>     
 
    </>
  )
}

export default App
