import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from '../assets/assets'


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [seller, setIsSeller] = useState(false);
    const [products, setProducts] = useState(dummyProducts);
    const [cartItems, setCartItems] = useState([]);


    const addToCart = (product) => {

        setCartItems((prevCart) => {

            const existingItem = prevCart.find(item => item._id === product._id);

            if (existingItem) {
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item._id !== id));
    };




    const increaseQty = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item._id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };



    const decreaseQty = (id) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item._id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0) // remove if 0
        );
    };





    const value = { navigate, user, setUser, seller, setIsSeller, products, setProducts, addToCart, cartItems, setCartItems, removeFromCart, increaseQty, decreaseQty }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => {
    return useContext(AppContext);
}