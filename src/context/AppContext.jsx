import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [seller, setIsSeller] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [compareItems, setCompareItems] = useState([]);

    const addToCompare = (product) => {

  if (compareItems.find(item => item._id === product._id)) return;

  if (compareItems.length >= 2) {
    alert("You can compare only 2 products");
    return;
  }

  const updated = [...compareItems, product];
  setCompareItems(updated);

  if (updated.length === 2) {
    navigate("/compare");
  }
};


    const removeFromCompare = (id) => {
    setCompareItems(compareItems.filter(item => item._id !== id));
    navigate("/");
    };


    // 🔥 FETCH PRODUCTS FROM BACKEND
    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);


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



    // 🔢 Total Quantity (all items)
    const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
    }, 0);

    // 💰 Grand Total Price
    const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
    }, 0);



    const value = { navigate, user, setUser, seller, setIsSeller, products, setProducts, addToCart, cartItems, setCartItems, removeFromCart, increaseQty, decreaseQty, compareItems, addToCompare, removeFromCompare , totalQuantity , totalPrice }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => {
    return useContext(AppContext);
}