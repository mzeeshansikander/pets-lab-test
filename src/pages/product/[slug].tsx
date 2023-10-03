import Container from '@/components/Container'
import { getProduct } from '@/services/products'
import { Product } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'
import Image from 'next/image'
import React, { FC, useEffect } from 'react'

interface Props {
    data: Product
}

const Product:FC<Props> = ({data}) => {
    
  return (
    !data ? (
        <div className='flex justify-center items-center min-h-[20rem]'>
            <h1 className='text-2xl font-bold'>No product found</h1>
        </div>
    ) : (
        <Container>
            <div className='flex justify-center gap-4 mt-5 min-h-[20rem] w-full'>
                <div className='w-1/4'>
                    <img alt='product img' src={data?.image_src} className='w-full'/>
                </div>
                <div className='w-3/4'>
                    <h1 className='text-2xl font-bold'>{data?.title}</h1>
                    <h1 className='my-2'>Tags</h1>
                    {
                        data?.tags?.map((item, index) => {
                            return (
                                <span key={index} className='bg-gray-200 px-2 py-1 p-2 border border-black mr-2 mt-2 rounded-2xl text-sm'>{item}</span>
                            )
                        }
                        )
                    }
                    <h1 className='my-2'>Price: {data?.price}</h1>
                </div>
            </div>

        </Container>
    )
  )
}

export async function getServerSideProps(req:NextApiRequest) {
    // Fetch data from external API
    const data = await getProduct(req.query.slug as string)
    // Pass data to the page via props
    return { props: { data } }
  }
   

export default Product