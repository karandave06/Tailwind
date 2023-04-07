import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <div id='contact' className='bg-[#2699fb] w-full py-10 text-white'>
    <div className='m-4 px-6 py-3 flex flex-wrap justify-around gap-[2rem] md:gap-[10rem] mx-[30px]'>

<div className="logo">
<div className=''>
    <h1 className='text-black font-bold text-[20px] md:text-[28px]'>Karan Dave</h1>
    {/* <p className='text-[15px]  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quo molestias eius totam quidem. Corporis a quo aperiam ipsa.</p> */}
    
<div className='flex gap-2 my-2 flex-0.2  justify-start text-2xl'>
    <AiFillFacebook className='text-white'/>
    <AiFillInstagram className='text-white'/>
    <AiFillTwitterSquare className='text-white'/>
    <AiFillGithub className='text-white'/>

</div>

</div>
</div>


<div className="links flex-wrap flex gap-20">




<div className='block'>
<div>

    <h1 className='text-black font-bold '>Solutions</h1>
    <p>Anylatics</p>
    <p>Marketing</p>
    <p>Commerce</p>
    <p>Pricing</p>
</div>
</div>

<div className='block'>
<div>
    <h1 className='text-black font-bold '>Compony</h1>
    <p>About</p>
    <p>Blog</p>
    <p>Jobs</p>
    <p>Press</p>
    <p>Careers</p>
</div>
</div>

<div className='block'>
<div>
    <h1 className='text-black font-bold '>Support</h1>
    <p>Pricing</p>
    <p>Documention</p>
    <p>Guids</p>
    <p>Api Status</p>
</div>
</div>

</div>



    </div>
    </div>
  )
}

export default Footer
