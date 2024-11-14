
const FilterReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER_PRODUCT":
            return {
                ...state,
                All_Product: [...action.paylod],
                Filter_Product: [...action.paylod],
            }

        case "SET_GRID_VIEW":
            return {
                ...state,
                Grid_View: true
            }

        case "SET_LIST_VIEW":
            return {
                ...state,
                Grid_View: false
            }

        case "UPDATE_SORT_PRODUCT":
            return {
                ...state,
                Sort_Value: action.paylod
            }

        case "SORT_PRODUCT":

            const { Filter_Product, Sort_Value } = state;
            let tepSortProduct = [...Filter_Product];
            const Sorting = (a, b) => {
                switch (Sort_Value) {
                    case "lowest":
                        return a.price - b.price;
                    // tepSortProduct = tepSortProduct.sort((a, b) => a.price - b.price);
                    // return {
                    //     ...state,
                    //     Not_Found: false,
                    //     Filter_Product: tepSortProduct
                    // }
                    case "highest":
                        return b.price - a.price
                    // tepSortProduct = tepSortProduct.sort((a, b) => b.price - a.price);
                    // return {
                    //     ...state,
                    //     Not_Found: false,
                    //     Filter_Product: tepSortProduct
                    // }
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    // tepSortProduct = tepSortProduct.sort((a, b) => a.name.localeCompare(b.name));
                    // return {
                    //     ...state,
                    //     Not_Found: false,
                    //     Filter_Product: tepSortProduct
                    // }
                    case "z-a":
                        return b.name.localeCompare(a.name);
                    // tepSortProduct = tepSortProduct.sort((a, b) => b.name.localeCompare(a.name));
                    // return {
                    //     ...state,
                    //     Not_Found: false,
                    //     Filter_Product: tepSortProduct
                    // }
                    default: return (a, b);

                }
            }
            tepSortProduct = tepSortProduct.sort(Sorting);
            return {
                ...state,
                Not_Found: false,
                Filter_Product: tepSortProduct
            }

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.paylod;
            return {
                ...state,
                Filter: {
                    ...state.Filter,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCT":
            const { All_Product, Filter } = state;
            const { text, category, company, color, price } = Filter;
            let tepFilterProduct = [...All_Product];

            if (text) {
                tepFilterProduct = tepFilterProduct.filter((curElm) => {
                    const searchProduct = curElm.name.toLowerCase().includes(text);
                    return searchProduct;
                })
            }
            if (category) {
                tepFilterProduct = tepFilterProduct.filter((curElm) => {
                    if (category === "All") {
                        return curElm;
                    }
                    return curElm.category === category;
                });
            }
            if (company) {
                tepFilterProduct = tepFilterProduct.filter((curElm) => {
                    if (company === "All") {
                        return curElm;
                    }
                    return curElm.company === company;
                });
            }
            if (color != "All") {
                tepFilterProduct = tepFilterProduct.filter((curElm) => {
                    let { colors } = curElm;
                    return colors.includes(color);
                });
            }
            if (price) {
                tepFilterProduct = tepFilterProduct.filter((curElm) => {
                    return curElm.price <= price;
                });
            }

            return {
                ...state,
                Not_Found: false,
                Filter_Product: tepFilterProduct,
            }

        case "CLEAR_ALL_FILTERS":
            return {
                ...state,
                Not_Found: false,
                Filter: {
                    text: "",
                    category: "All",
                    company: "All",
                    color: "All",
                    price: 6000000,
                    minPrice: 0,
                },
            }
        default: return state;
    }
}

export default FilterReducer;