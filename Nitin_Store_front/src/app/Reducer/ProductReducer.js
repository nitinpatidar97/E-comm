const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING": return {
            ...state,
            isLoading: true,
        }

        case "API_ERROR": return {
            ...state,
            isLoading: false,
            isError: true,
        }

        case "MY_API_DATA":
            const featureProduct = action.paylod.filter((curEle) => {
                return curEle.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                products: action.paylod,
                featureProduct: featureProduct,

            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            }

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.paylod,
            }
        case "SET_CART_IMG":
            return {
                ...state,
                isSingleLoading: false,
                cartImg: action.paylod
            }

        default: return state;
    }
}

export default ProductReducer;