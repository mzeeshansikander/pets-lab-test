import React, { FC } from 'react'

interface Props{
    children: React.ReactNode
}

const Container:FC<Props> = ({children}) => {
  return (
    <div className='w-[90%] mx-auto pt-3'>{children}</div>
  )
}

export default Container