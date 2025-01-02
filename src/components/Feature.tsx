import React from 'react'

export default function Feature() {
  return (
   <div>
    <section className='py-8 bg-neutral-50 mb-40'>
      <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up tranition-all duration-500 ease-in-out transform hover:translate-y-[-px] hover:text-black text-red-600'>
        Kashaf Yasir : Inspiration start here, explore ideas and insights that spart growth !
      </h2>
      <p className='text-center m-4 mt-4 text-sm text-black sm-:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100 '>Step into a world where ideas come to life, stories captivate your imagination, and inspiration knows no bounds. Our blog is your gateway to exploring fresh perspectives, unlocking creativity, and staying ahead of the curve. Whether you’re seeking expert advice, trend insights, or a spark of motivation, this is the space where curiosity meets clarity. Dive in and discover something extraordinary today!</p>
    <div className='mx-auto max-w-7xl px-5'>
      <h1 className='text-3xl font-bold text-center my-8  text-red-600 animate-color-change'> Explore Our Categories {" "}</h1>
    <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100 '>
      {[
        "Artifical intelligence",
        "HTML",
        "Virtual Reality ",
        "Web Development",
        "Next.js",
        "Technology"
      ].map((category, index)=> (
        <div key={index}
        className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-pink-500 hover:text-lack transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center text-neutral-600">
          <p className='text-center text-lg font-semibold'>{category}</p>
          <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-im-out'></div>
          </div>
      ))}
    </div>
    </div>
    <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10 '>
      Welcome to a digital haven where words weave magic, ideas transcend boundaries, and stories connect us all. Our blog is more than just a collection of articles—it's a platform for dreamers, thinkers, and doers to find their tribe. Whether you're seeking inspiration, practical advice, or a moment of escape, you've landed in the right place. From thought-provoking insights to actionable tips, each post is crafted with care, aiming to add value to your journey. Dive deep into topics that matter, explore trends that shape the world, and discover a world of possibilities with us. Here, every word is a step closer to creativity, empowerment, and growth. Let this space be your go-to corner for inspiration, conversation, and a little dose of magic.
    </p>
    </section>
   </div>
  )
}
