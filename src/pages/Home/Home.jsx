import React from 'react'
import { data } from '../../data/Data'
import Products from '../../components/Products/Products'

const Home = () => {
    return (
        <div className='flex flex-col items-center gap-4 lg:grid lg:grid-cols-3 px-8 border-double'>
            {data.map((item, i) => <Products key={i} info={item} />)}
        </div>
    )
}

export default Home