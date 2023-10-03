import { Product } from '@/types';
import React, { FC } from 'react';
import ProductCard from './ProductCard';

interface Props {
    products: Product[];
}

const ProductSection:FC<Props> = ({products}) => {
  return (
        <div className=' flex gap-5 flex-wrap'>
            {
                products.map((product:Product, index:number) => {
                    return (
                        <ProductCard product={product}/>
                    )
                })
            }
        </div>
    )
}

export default ProductSection