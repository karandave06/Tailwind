import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Newslatter = () => {

  const form = useRef();

  const sendEmail = (e) => {


    emailjs.sendForm('karandave', 'template_pmks2c1', form.current, 'RX94JvB6ZvI4HV-hC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

    <div className='w-full bg-[#2699fb] p-3 md:p-5'>

    <div className=' mx-auto md:flex py-[60px]  justify-between max-w-[1240px]'>

    <div>
      <h1 className='text-[35px] md:text-[40px] font-bold  text-white'>Want learn it skill?</h1>

      <span className='text-white'>
        Sign up to our news latter and stay up to date 
      </span>
    </div>

    <div className='my-3' id='companey'>
    <form ref={form} onSubmit={sendEmail}>

    <input type="text" name='user_name' className='w-full md:w-[15rem] my-4 p-2 text-slate-600 mr-2 rounded' placeholder='User Name'/>
    <input type="email" name='user_email' className='w-full md:w-[15rem] p-2 text-slate-600 mr-2 rounded' placeholder='Email'/>

    <input type='submit' className='hover:bg-[#393939] my-3 bg-black text-white p-2 rounded' />
    </form>
    <br />
    <p className='text-white py-2'>We care about the protection of your date.  Read our<br /> <a href="#" className='text-black'>  private policy </a></p>

    </div>
      
    </div>

   
    </div>
  )
}

export default Newslatter
