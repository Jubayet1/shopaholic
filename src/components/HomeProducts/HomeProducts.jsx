import React, { useContext } from 'react'
import { StoreContext } from '../../context-nd-reducer/StoreContext'

const HomeProducts = ({ info }) => {
    const { name, image, description } = info
    const { addToBasket } = useContext(StoreContext)
    const handleClick = (item) => {
        addToBasket(item)
    }
    return (
        <div className='text-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="text-center text-2xl">{name}</h1>
                    <p>{description}</p>
                </div>
                <button
                    className="bg-teal-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 w-36 mx-auto mb-4 rounded"
                    onClick={e => handleClick(info)}>
                    Add to Basket
                </button>
            </div>
        </div>
    )
}

export default HomeProducts