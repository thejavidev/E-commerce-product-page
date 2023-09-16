import {
    createSlice
} from "@reduxjs/toolkit";

const items = localStorage.getItem("products") !== null ? JSON.parse(localStorage.getItem("products")) : []

const initialState = {
    cartItems: items,
}

const setLocalFnc = (item) => {
    localStorage.setItem("products", JSON.stringify(item))
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((element) => element.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = {
                    ...action.payload,
                    cartQuantity: 1
                }
                state.cartItems.push(tempProduct)
                setLocalFnc(state.cartItems.map((item) => item))
            }
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((element) => element.id === action.payload.id);
            if (itemIndex >= 0) {
                // Ürünü sepetten kaldırın
                state.cartItems.splice(itemIndex, 1);
                // setLocalFnc'i çağırarak güncel verileri localStorage'a kaydedin
                setLocalFnc(state.cartItems);
            }
        },
    }
})

export const {
    addToCart,
    removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer