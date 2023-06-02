import React from 'react'

const Products = ({ info }) => {
    const { name, image, description } = info
    return (
        <div className='text-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="text-center text-2xl">{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Products