import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import Reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const getCartProduct = () => {
    const cart = localStorage.getItem("Abhi-Cart");
    if (cart) {
        return JSON.parse(cart);
    } else return [];
}
const initialState = {
    CartProduct: getCartProduct(),
    TotalCartItems: 0,
    SubTotal: 0,
    ShoppingFee: 5000,
    TotalPrice: 0,
}
const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: "ADD_CART_PRODUCT", paylod: product })
    }

    const setDecrese = (id) => {
        dispatch({ type: "SET_DECRESE", paylod: id })
    }

    const setIncrese = (id) => {
        dispatch({ type: "SET_INCRESE", paylod: id })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", paylod: id })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART_ITEMS" })
    }

    useEffect(() => {
        localStorage.setItem("Abhi-Cart", JSON.stringify([...state.CartProduct]));
        dispatch({ type: "UPDATE_TOTAL_ITEMS" })
        dispatch({ type: "UPDATE_TOTAL_PRICE" })
    }, [state.CartProduct]);


    return <CartContext.Provider value={{ ...state, addToCart, setDecrese, setIncrese, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
}

// Custom Hook

const useCartProduct = () => {
    return useContext(CartContext);
}

export { CartContext, CartContextProvider, useCartProduct }