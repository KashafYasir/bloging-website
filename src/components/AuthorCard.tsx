import React from 'react'

export const AuthorCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
        <img className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
        src="../images/profile..png"
        alt="Author Image"/>

        <div> 
          <h2 className='text-xl font-bold'>Kashaf Ali</h2>
          <p className='text-slate-500'>
            {" "}
            Microbiologist | Web Developer{" "}
          </p>
          <div className='mt-4 flex space-x-3'>
            <a 
            href="#"
            className='px-4 -y-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 tranistion duration-300'>
             Github 
            </a>

            <a 
            href="#"
            className='px-4 -y-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 tranistion duration-300'>
            Linkedin
            </a>

            <a 
            href="#"
            className='px-4 -y-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 tranistion duration-300'>
            Twitter
            </a>
         
            </div>
        </div>
        </div>
        

        <p className='mt-4 text-black leading-relaxed '>
          I am a passionate Web developer  with expertise in HTML CSS and Javescript and sharing knowlegde through articles </p>
        </div>
  )
}
