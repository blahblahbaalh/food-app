import { createContext, useReducer } from "react";

// =============================(A) FOR useContext ====================================//
//A1.1) for useContext syntax suggestion
export const CartContext = createContext({
    cart: {},
    addToCart: () => {},
    deleteFromCart: () => {},
    clearCart: () => {},
});



// =============================(B) FOR useREDUCER ====================================//
//B1.2) menuList

//B1) Initial State
const initialState = {
    totalCost: 0,
    totalNumItems: 0,
    menuList: [
        {
            id: 1,
            name: "Pizza",
            description: "Ridiculous! Pizza",
            cost: 22.99,
            numItems: 0,
        },
        {
            id: 2,
            name: "Schnitzel",
            description: "SENSEIIII. A german's specialty!",
            cost: 16.50,
            numItems: 0,
    
        },
        {
            id: 3,
            name: "Icecream",
            description: "Molten chocolates at the bottom of icecream are the best",
            cost: 13.10,
            numItems: 0,
    
        }
    ]
}

//B2) action object
const ACTIONS = {
    REMOVE_ITEM: "REMOVE_ITEM",
    ADD_ITEMS: "ADD_ITEMS",
    CLEAR_CART: "CLEAR_CART"

}

//B3) reducer
const cartReducer = (state, action) => {
    const {id, amount } = action.payload || {};

    switch (action.type){
        case ACTIONS.REMOVE_ITEM: {
            const foundIndex = state.menuList.findIndex(each => each.id === id);
            if (foundIndex < 0 || state.menuList[foundIndex].numItems === 0){ return state};
            const foundItem = state.menuList[foundIndex];
            return {
                totalCost: state.totalCost - foundItem.cost,
                totalNumItems: state.totalNumItems - 1,
                menuList: [
                    ...state.menuList.slice(0, foundIndex),
                    {
                        ...foundItem,
                        numItems: foundItem.numItems -1
                    },
                    ...state.menuList.slice(foundIndex + 1, state.menuList.length),
                ]
            }
        }
        case ACTIONS.ADD_ITEMS:{
            const foundIndex = state.menuList.findIndex(each => each.id === id);
            if (foundIndex < 0){ return state};
            const foundItem = state.menuList[foundIndex];
            return {
                totalCost: state.totalCost + (foundItem.cost * +amount),
                totalNumItems: state.totalNumItems + +amount,
                menuList: [
                    ...state.menuList.slice(0, foundIndex),
                    {
                        ...foundItem,
                        numItems: foundItem.numItems + +amount
                    },
                    ...state.menuList.slice(foundIndex + 1, state.menuList.length),
                ]
            }
        }
        case ACTIONS.CLEAR_CART: {
            return initialState
        }
        default: return state;
    }

}

// =============================MAIN COMPONENT====================================//
function CartProvider({children}){
    const [cart, dispatchCart] = useReducer(cartReducer, initialState);
    return(
        <CartContext.Provider value={{
            cart: cart,
            addToCart: (id, amount) => { dispatchCart({type: ACTIONS.ADD_ITEMS, payload: {id, amount}})},
            deleteFromCart: (id) => { dispatchCart({type: ACTIONS.REMOVE_ITEM, payload: {id}})},
            clearCart: () => {dispatchCart({type: ACTIONS.CLEAR_CART})}
        }}>
        {children}
        </CartContext.Provider >
    )
}

export default CartProvider;