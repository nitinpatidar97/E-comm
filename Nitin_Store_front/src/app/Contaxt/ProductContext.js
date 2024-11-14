import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import Reducer from "../Reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoaging: false,
    isError: false,
    featureProduct: [],
    products: [],
    isSingleLoading: false,
    singleProduct: {},
    cartImg : {}
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const product = await res.data;
            dispatch({ type: "MY_API_DATA", paylod: product });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    const getSingleProducts = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const product = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", paylod: product });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }
    const setCurrentImg = (img) => {
        dispatch({type:"SET_CART_IMG", paylod : img});
    }  

    useEffect(() => {
        getProducts(API);
    }, []);

    return <AppContext.Provider value={{ ...state, getSingleProducts, setCurrentImg }} >{children}</AppContext.Provider>
}

// Custom Hook
const useProduductContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useProduductContext }