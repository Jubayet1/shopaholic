import React from 'react'
import { createContext, useReducer } from 'react'

import reducer, { initialState } from './reducers'

export const StoreContext = createContext()


const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToBasket = (product) => {
        const updatedProducts = state.products
        updatedProducts.push(product)
        dispatch({
            type: "ADD",
            payload: updatedProducts
        })
    }

    const removeProduct = (product) => {
        const restProducts = state.products.filter(item => item._id !== product._id)
        dispatch({
            type: "REMOVE",
            payload: restProducts
        })
    }

    const value = { addToBasket, removeProduct, products: state.products }

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    )
}

export default StoreProvider




// const [state, dispatch] = useReducer(reducer, initialState)

//     const addToBasket = (product) => {
//         const updatedProducts = state.products
//         updatedProducts.push(product)
//         dispatch({
//             type: "ADD",
//             payload: updatedProducts
//         })
//     }

//     const removeProduct = (product) => {
//         const restProducts = state.products.filter(item => item._id !== product._id)
//         dispatch({
//             type: "REMOVE",
//             payload: restProducts
//         })
//     }
