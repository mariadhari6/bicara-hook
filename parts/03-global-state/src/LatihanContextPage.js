import React, { useContext } from "react";
import ShoppingContext from "./ShoppingContext";
const {
    CartsContext,
    CartsProvider
} = ShoppingContext
const products = ["Baju", "Tas", "Sepatu", "Lego"]
const LangPage = () => {
    return (
        <CartsProvider>
            <Header />
            <Carts />
            <Footer />
        </CartsProvider>
    )
}
const Header = () => {
    return (
        <React.Fragment>
            <li>--- Header ---</li>
            <Menu />
        </React.Fragment>
    )
}
const Menu = () => {
    const { addItem } = useContext(CartsContext)
    console.log("Render Component Header");
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <ul>
                    {products.map((product, i) => (
                        <li key={i}>
                            <p>{product}<span><button onClick={() => addItem(product)}>Add</button></span></p>
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    )
}
const Carts = () => {
    console.log("Render component carts");
    const { carts, removeItem } = useContext(CartsContext)
    return (
        <React.Fragment>
            {carts.map((cart, i) => (
                <p key={i}>{cart}  <span><button onClick={() => removeItem(i)}>Hapus</button></span></p>
            ))}
        </React.Fragment>
    )
}
const Footer = () => {
    console.log("Render Component Footer");
    return (
        <React.Fragment>
            <div>
                Ini Component Footer
            </div>
        </React.Fragment>
    )
}
export default LangPage