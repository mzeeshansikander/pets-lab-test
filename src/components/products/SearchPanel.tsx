import { getProducts } from '@/services/products';
import { Product } from '@/types';
import React, { FC, use, useEffect, useState } from 'react';

const priceFilter = [
    {
        value: 30,
        label: 'Price < 30'
    },
    
    {
        value: 40,
        label: 'Price < 40'
    },
    {
        value: 50,
        label: 'Price < 50'
    },
]
const tagsFilter = [
    {
        value: 'Dog',
        label: 'Dogs'
    },
    
    {
        value: 'Cat',
        label: 'Cats'
    },
    {
        value: 'Chews',
        label: 'Chews'
    },
]

interface Props {
    getData: (params?:any) => void;      
}


const SearchPanel:FC<Props> = ({getData}) => {
    const [price, setPrice] = useState(-1)
    const [tag, setTag] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [show, setshow] = useState(false)

    useEffect(() => {
        getProductData()
    }, [price, tag, isSubscribed])

    const getProductData = async () => {
            let dataToSend:any ={page:1}
            if(price != -1){
                dataToSend = {...dataToSend, price}
            }
            if(tag != ''){
                dataToSend = {...dataToSend, tag}
            }
            if(isSubscribed){
                dataToSend = {...dataToSend, isSubscribed}
            }else{
                if(dataToSend.hasOwnProperty('isSubscribed'))
                    delete dataToSend.isSubscribed
            }
        
            getData(dataToSend)
    }

  return (
    <div  className='w-full p-3 h-fit top-5 bg-white md:sticky static'>
        <button onClick={() => setshow(prev => !prev)} className='bg-black text-white px-5 py-2 md:hidden block rounded-md mx-auto mb-2'>Apply Filters</button>
        <div className={`md:block ${ show ? 'block': 'hidden'}`}>
            <h1>Filters</h1>
            {/* price filter */}
                <div className=' my-5'>
                    <h3>Price</h3>
                    <div className='w-[95%] mx-auto'>
                        {
                            priceFilter.map((item, index) => {
                                return (
                                    <div key={index} className=' flex items-center gap-2'>
                                        <input 
                                            type="radio" 
                                            id={item.label}
                                            checked={price == item.value} 
                                            onChange={()=> setPrice(price == item.value ? -1 : item.value )}
                                        />
                                        <label htmlFor={item.label}>{item.label}</label>
                                    </div>
                                )
                            })
                            
                        }
                        <div className=' flex items-center gap-2'>
                                        <input 
                                            type="radio" 
                                            id="allprice" 
                                            checked={price == -1} 
                                            onChange={()=> setPrice(-1)}
                                        />
                                        <label htmlFor="allprice">All</label>
                                    </div>
                    </div>
                </div>
            {/* tags filter */}
                <div className=' my-5'>
                        <h3>Tags</h3>
                        <div className='w-[95%] mt-2 mx-auto'>
                            {
                                tagsFilter.map((item, index) => {
                                    return (
                                        <div key={index} className=' flex items-center gap-2'>
                                            <input type="radio" id={item.label} checked={tag == item.value} onChange={()=> setTag(tag == item.value ? '' : item.value )} value={item.value}/>
                                            <label htmlFor={item.label}>{item.label}</label>
                                        </div>
                                    )
                                })
                            }
                            <div className=' flex items-center gap-2'>
                                        <input 
                                            type="radio" 
                                            id="css" 
                                            checked={tag == ''} 
                                            onChange={()=> setTag('')}
                                        />
                                        <label htmlFor="html">All</label>
                                    </div>
                        </div>
                    </div>
            {/* subsription filter */}
                    <div className=' my-5'>
                        <h3>Subscription</h3>
                        <div className='w-[95%] mt-2 mx-auto'>
                            {
                                <div className=' flex items-center gap-2'>
                                    <input type="checkbox" id="subs" checked={isSubscribed} onChange={()=> setIsSubscribed(!isSubscribed)}/>
                                    <label htmlFor="subs">Subscription products</label>
                                </div>
                            
                            }
                        </div>
                    </div>

        </div>
    </div>
  )
}

export default SearchPanel