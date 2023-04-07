import React from 'react'


const Card = ({img,text,price,color}) => {
  return (
    <div className='flex items-center flex-col gap-4 justify-center'>

     <div className=' md:mt-[-3rem] w-[20%] md:w-[35%] '>
        <img src={img} alt="card1"/>
     </div>

     <div className='font-bold text-[20px] md:text-[30px]'>
        {text}
     </div>

     <div className='font-bold text-[30px]'>
     {price}
     </div>

     <div className="text-[15px]  p-3">This is very helpful for you</div>
     <div className="text-[15px]  p-3 text-center">Go and learn new thing's really halpfull <br /> Now</div>
     <div className="text-[15px]  p-3">Expand your knowladge</div>
     <button className={color}>
        Start Trial
     </button>

    </div>
  )
}

export default Card
