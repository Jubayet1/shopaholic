import React from 'react'
import { useContext } from 'react'


import { StoreContext } from '../../context-nd-reducer/StoreContext'
import BasketProducts from '../../components/BasketProducts/BasketProducts'


const Basket = () => {
    const { products } = useContext(StoreContext)

    return (
        <div className='flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 px-8 border-double'>{products.map((item, i) => <BasketProducts key={i} info={item} />)}</div>
    )
}

export default Basket