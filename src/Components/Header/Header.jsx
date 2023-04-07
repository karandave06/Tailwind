import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Header = () => {

  const [toggle,settoggle] = useState(false)

  
  return (
    <div className='bg-[#2699fb] p-4 ' id='home'>
     <div className='max-w-[1240px] py-4  flex justify-between  mx-auto   '>

     <div className='text-3xl font-bold '>
      Karan Dave
     </div>

     {toggle ? <AiOutlineClose onClick={()=>{settoggle(!toggle)}}  className='z-50 bg-[#333333] fixed right-2 text-white md:hidden block text-4xl cursor-pointer'/>
             : <AiOutlineMenu onClick={()=>{settoggle(!toggle)}} className='z-50 bg-[#333333] fixed right-2 text-white md:hidden block text-4xl cursor-pointer'/>
      }

     {/* <AiOutlineMenu onClick={()=>settoggle(!toggle)}  className='text-white md:hidden block text-4xl cursor-pointer'/> */}
     

     <ul className='md:flex hidden gap-5 text-white'>
      <li >
        <a href="#home" >
          Home
        </a>
      </li>

      <li>
        <a href="#about">
        About
        </a>
      </li>


      <li>
        <a href="#companey">
          Companey
        </a>
      </li>


      <li className='cursor-pointer'>
        <a href="#course" >
          Course
        </a>
      </li>


      <li>
        <a href="#contact" >
          Contact
        </a>
      </li>
     </ul>

     {/* Responsive design */}


     <ul className={`z-10 duration-300 md:hidden  fixed bg-black  top-[0] p-12 h-full pt-[10rem]  items-center w-[40%] flex flex-col gap-16 text-white
                            ${toggle ? `right-0` : `right-[-100%]` }  `}>
      <li className='cursor-pointer'>
        <a href="#home" onClick={()=>{settoggle(!toggle)}}>
          Home
        </a>
      </li>

      <li className='cursor-pointer'>
        <a href="#about" onClick={()=>{settoggle(!toggle)}}>
        About
        </a>
      </li>


      <li className='cursor-pointer'>
        <a href="#companey" onClick={()=>{settoggle(!toggle)}}>
          Companey
        </a>
      </li>


      <li className='cursor-pointer'>
        <a href="#course" onClick={()=>{settoggle(!toggle)}}>
          Course
        </a>
      </li>

      <li className='cursor-pointer'>
        <a href="#contact" onClick={()=>{settoggle(!toggle)}}>
          Contact
        </a>
      </li>
     </ul>

     </div>

    </div>
  )
}

export default Header
