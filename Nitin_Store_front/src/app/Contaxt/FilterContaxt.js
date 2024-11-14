import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import { useProduductContext } from "./ProductContext";
import Reducer from "../Reducer/FilterReducer";

const FilterContaxt = createContext();

const initialState = {
    All_Product: [],
    Filter_Product: [],
    Grid_View: true,
    Not_Found : false,
    Sort_Value : "lowest",
    Filter : {
        text : "",
        category : "All",
        company : "All",
        color : "All",
        price : 6000000,
        minPrice : 0,
    },
}

const FilterContaxtProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);
    const { products } = useProduductContext();

    const SetGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" });
    }

    const SetListView = () => {
        dispatch({ type: "SET_LIST_VIEW" });
    }

    const Sorting = (value) => {
        dispatch({ type: "UPDATE_SORT_PRODUCT", paylod : value });
    }

    const FilterProducts = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        dispatch({ type: "UPDATE_FILTERS_VALUE", paylod : {name, value} });
    }
    
    const ClearFilters = () => {
        dispatch({ type: "CLEAR_ALL_FILTERS"});
    }

    useEffect(() => {
        dispatch({ type: "SET_FILTER_PRODUCT", paylod: products });
    }, [products]);
    
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCT"});
        dispatch({ type: "SORT_PRODUCT"});
    }, [products, state.Not_Found, state.Sort_Value, state.Filter]);

    return <FilterContaxt.Provider value={{ ...state, SetGridView, SetListView, Sorting, FilterProducts, ClearFilters}}>
        {children}
    </FilterContaxt.Provider>
}

// Custom Hook

const useFliterContaxt = () => {
    return useContext(FilterContaxt);
}

export { FilterContaxtProvider, useFliterContaxt }