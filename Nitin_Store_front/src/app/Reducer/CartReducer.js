
const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_CART_PRODUCT":
            const curProduct = action.paylod;
            const existingProduct = state.CartProduct.find(curElm => curElm.id === curProduct.id);
            if (existingProduct) {
                const updatedItem = state.CartProduct.map((curElm) => {
                    if (curElm.id === curProduct.id) {
                        let newAmount = curElm.Amount + curProduct.Amount;
                        if (newAmount < curElm.stock) {
                            return {
                                ...curElm,
                                Amount: newAmount
                            }
                        } else return {
                            ...curElm,
                            Amount: curElm.stock
                        }

                    } else return curElm;
                });
                return {
                    ...state,
                    CartProduct: updatedItem
                }
            } else return {
                ...state,
                CartProduct: [...state.CartProduct, action.paylod],
            }

        case "SET_DECRESE":
            let D_id = action.paylod;
            let temDCartProduct = [...state.CartProduct];
            let updatedCartDcreseProduct = temDCartProduct.map((curElm) => {
                if (curElm.id === D_id) {
                    let updatedAmount = curElm.Amount > 1 ? curElm.Amount - 1 : 1;
                    return {
                        ...curElm,
                        Amount: updatedAmount
                    }
                }
                return curElm;
            });
            return {
                ...state,
                CartProduct: updatedCartDcreseProduct
            }

        case "SET_INCRESE":
            const I_id = action.paylod;
            let temICartProduct = [...state.CartProduct];
            let updatedCartIncreseProduct = temICartProduct.map((curElm) => {
                if (curElm.id === I_id) {
                    let updatedAmount = curElm.Amount < curElm.stock ? curElm.Amount + 1 : curElm.stock;
                    return {
                        ...curElm,
                        Amount: updatedAmount
                    }
                }
                return curElm;
            });
            return {
                ...state,
                CartProduct: updatedCartIncreseProduct
            }

        case "REMOVE_ITEM":
            const R_id = action.paylod;
            let temRCartProduct = [...state.CartProduct];
            let updatedProduct = temRCartProduct.filter((curElm) => curElm.id != R_id);
            if (updatedProduct.length === 0) {
                return {
                    ...state,
                    CartProduct: [],
                    TotalCartItems: 0
                }
            }
            return {
                ...state,
                CartProduct: updatedProduct
            }

        case "CLEAR_CART_ITEMS":
            return {
                ...state,
                CartProduct: [],
                TotalCartItems: 0
            }

        case "UPDATE_TOTAL_ITEMS":
            let temCartProduct = [...state.CartProduct];
            if (temCartProduct.length != 0) {
                let totalItemsVal = temCartProduct.reduce((previousValue, currentValue) => {
                    const { Amount } = currentValue;
                    let totalVal = + previousValue + Amount;
                    return totalVal;
                }, 0);
                return {
                    ...state,
                    TotalCartItems: totalItemsVal
                }
            }
            return state;

        case "UPDATE_TOTAL_PRICE":
            let subTotal = state.CartProduct.reduce((previousValue, currentValue) => {
                const { Amount, price } = currentValue;
                let totalVal = + previousValue + (Amount * price);
                return totalVal;
            }, 0);
            return {
                ...state,
                SubTotal: subTotal
            }

        default: return state;
    }

}


export default CartReducer;