import React, { createContext, useState } from "react"

const ShoppingContext = () => {
    const CartsContext = createContext({})
    const CartsProvider = (props) => {
        const [carts, setCarts] = useState([])
        const addItem = (item) => {
            setCarts(carts => [...carts, item])
        }
        const removeItem = (index) => {
            setCarts([
                ...carts.slice(0, index),
                ...carts.slice(index + 1, carts.length)
            ])
        }
        const cartsContext = { carts, addItem, removeItem }
        return (
            <CartsContext.Provider value={cartsContext}>
                {props.children}
            </CartsContext.Provider>
        )
    }
    return {
        CartsContext,
        CartsProvider
    }
}
export default ShoppingContext()