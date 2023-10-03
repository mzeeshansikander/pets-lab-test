import React, { useEffect, useState } from 'react'
import Container from '../Container'
import SearchPanel from './SearchPanel'
import ProductSection from './ProductSection'
import { Product } from '@/types'
import { getProducts } from '@/services/products'
import Spinner from '../Spinner'

const Index = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState<any>({})
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
          getProductsData(filters)
    }, [page])

    const getProductsData = async (params?:any) => {
        setLoading(true)
        setHasMore(true)
        try {
            const data = await getProducts({...params, page})
            setFilters(params)
            setProducts(data?.length ? data : [])
            if(data && data?.length < 6){
                setHasMore(false)
            }
            setTimeout(() => {
                setLoading(false)
            }, 500);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

  return (
    <Container>
        <div className='flex md:flex-row flex-col gap-2 my-5'>
            <div className='md:w-[25%] '>
                <SearchPanel getData={getProductsData}/>
            </div>
            <div className='w-full bg-white p-3'>
                {loading ? (
                        <div className='flex justify-center items-center min-h-[20rem]'>
                            <Spinner/>
                        </div>
                    ) : (
                        products.length > 0 ? (
                            <div>
                                <ProductSection products={products}/>
                                
                            </div>
                        ) : (
                            <div className='flex justify-center items-center min-h-[20rem]'>
                                <h1 className='text-2xl font-bold'>No products found</h1>
                            </div>
                        )
                    )}
               <div className=' flex gap-3 justify-between mt-5 text-center'>
                    <button onClick={() => page > 1 ? setPage(prev => prev - 1) : null} className='bg-black text-white px-5 py-2 rounded-md'>Previous</button>
                    <button onClick={() =>  hasMore && setPage(prev => prev + 1)} className='bg-black text-white px-5 py-2 rounded-md'>Next</button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Index