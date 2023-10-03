import { Product } from '@/types';
import React, { FC } from 'react'

interface Props {
    product: Product;        
}

const ProductCard:FC<Props> = ({product}) => {
  return (
    <div className="flex-1 bg-white max-w-full md:max-w-[19rem] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href={`/product/${product.slug}`}>
      <img src={product.image_src} alt="Product" className="h-80 w-full object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">{product?.vendor}</span>
        <p className="text-lg font-bold text-black truncate block capitalize">{product?.title}</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">${product?.price}</p>
        </div>
      </div>
    </a>
  </div>
  )
}

export default ProductCard