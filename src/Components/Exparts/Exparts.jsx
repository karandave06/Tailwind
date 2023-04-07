import React from 'react'
import Laptop from '../../../public/laptop.jpg'

const Exparts = () => {
  return (
    <div id='about' className='p-5 md:grid grid-cols-2 max-w-[1240px] my-10 mx-auto'>

    <div className='md:w-[80%] col-span-1 text-center'>
        <img src={Laptop} alt="" />
    </div>
    <div className='flex flex-col  justify-center  col-span-1'>
    <h1 className='text-[#00df9a] my-3'>Learn From Exparts</h1>
      <p className='my-3 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia modi recusandae mollitia asperiores commodi.</p>

      <button className= 'hover:bg-[#393939] my-3 inline md:w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
    </div>
     


    </div>
  )
}

export default Exparts
