import React from 'react'
import ProductInfocard from './ProductInfocard'
import a from '../../assets/images/1.jpg'
import b from '../../assets/images/2.jpg'
import c from '../../assets/images/3.jpg'
import d from '../../assets/images/4.jpg'
import e from '../../assets/images/5.jpg'
const ProductInfo = () => {
    return (
        <div className='grid grid-clos-1 lg:grid-cols-3 gap-5'>
            <ProductInfocard img={a}></ProductInfocard>
            <ProductInfocard img={b}></ProductInfocard>
            <ProductInfocard img={c}></ProductInfocard>
            <ProductInfocard img={d}></ProductInfocard>
            <ProductInfocard img={e}></ProductInfocard>

        </div>
    )
}

export default ProductInfo