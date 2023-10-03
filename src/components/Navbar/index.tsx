import Image from 'next/image'
import React from 'react'

const Index = () => {
  return (
    <div className='w-full h-[7rem] bg-navbar shadow-xl p-2 flex justify-center items-center'>
        <Image src={'/logo.png'} alt='logo' width={50} height={5}/>
    </div>
  )
}

export default Index