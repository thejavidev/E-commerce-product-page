import {
    createSlice
} from "@reduxjs/toolkit";

const items = localStorage.getItem("products") !== null ? JSON.parse(localStorage.getItem("products")) : []

const initialState = {
    cartItems: items,
}

export const setLocalFnc = (item) => {
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

        }
    }
})

export const {
    addToCart
} = cartSlice.actions;

export default cartSlice.reducer