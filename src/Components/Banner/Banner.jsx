import React from 'react'
import Typed from 'react-typed'

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[100px] text-center'>

     <div className='font-bold text-3xl text-[30px] md:text-[50px] md:my-[40px]'>
        Learn with us
     </div>
     <div className='text-white text-[30px]  md:text-[80px] md:my-[10px] font-bold'>
        Grow with us
     </div>
     <div className='text-white text-[30px] md:text-[65px] md:my-[10px] fotn-bold'>
        Karan
     </div>
     <div className='text-white text-[38px] md:text-[65px] md:my-[10px] fotn-bold'>
         <Typed 
        className='text-[30px] md:text-[60px] text-black font-bold '
            strings={['FullStack Daveloper',
            'Web Designer',
            'React']}
            typeSpeed={100}
            backSpeed={50}
            loop={true}
            
            
            
        />
     </div>

     
     <button className=  'hover:bg-[#393939] bg-black text-white p-3 rounded'>Get Started</button>


    </div>
  )
}

export default Banner
