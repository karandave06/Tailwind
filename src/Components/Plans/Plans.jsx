import React from 'react'
import Card from './Card'
import card1 from '../../../public/card1.png'
import card2 from '../../../public/card2.png'
import card3 from '../../../public/card3.png'


function Plans() {
  return (
    <div className='py-[100px]' id='course'>

    <div className='max-w-[1240px] mx-10 md:mx-auto md:grid grid-cols-3 gap-5  relative'>


    <div className='shadow-xl  h-[500px] my-8 duration-400 hover:scale-105'><Card img={card2} text={"Web Davelopment"}  price={`$128`}  color="bg-green-800 p-2 w-40"/></div>
    <div className='shadow-xl  h-[500px] my-8 duration-400 hover:scale-105 bg-gray-100'>{<Card img={card1} text={"Digital Marketing"}  price={`$128`} color="bg-black p-2 w-40 text-green-600"/>}</div>
    <div className='shadow-xl  h-[500px] my-8 duration-400 hover:scale-105'><Card img={card3} text={"App Development"} price={`$128`} color="bg-green-800 p-2 w-40 text-black"/> </div>
      
    </div>
    </div>
  )
}

export default Plans
