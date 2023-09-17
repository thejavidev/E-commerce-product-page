import {
    createSlice
} from "@reduxjs/toolkit";

const items = localStorage.getItem("products") !== null ? JSON.parse(localStorage.getItem("products")) : [];
// const totalQuantitys = localStorage.getItem("totalquantity") !== null ? JSON.parse(localStorage.getItem("totalquantity")) : 0;

const setLocalFnc = (item, cartQuantity) => {
    localStorage.setItem("products", JSON.stringify(item));
    // localStorage.setItem("totalquantity", JSON.stringify(cartQuantity));
};

const initialState = {
    cartItems: items,
    // cartQuantity: totalQuantitys
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((element) => element.id === action.payload.id);
            if (itemIndex >= 0) {
                // state.cartItems[itemIndex].cartQuantity += 1;
                state.cartItems[itemIndex].quantity += action.payload.count;
                state.cartItems[itemIndex].count = action.payload.count;
                state.cartItems[itemIndex].newCount += action.payload.count;
            } else {
                const tempProduct = {
                    ...action.payload,
                    // cartQuantity: 1 // Yeni eklenen ürünün miktarını 1 olarak ayarlayın
                };
                state.cartItems.push(tempProduct);
            }

            // cartQuantity'yi güncelleyin
            state.cartQuantity += 1;
            setLocalFnc(state.cartItems.map((item) => item));
            // setLocalFnc(state.cartItems.map((item) => item), state.cartQuantity);
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((element) => element.id === action.payload.id);
            if (itemIndex >= 0) {
                // Ürünü sepetten silmek ucun
                state.cartItems.splice(itemIndex, 1);
                // cartQuantity'yi güncelleyin
                // state.cartQuantity -= 1;
                // setLocalFnc'i çağırarak güncel verileri localStorage'a kaydedin
                setLocalFnc(state.cartItems);
            }
        },
    }
});

export const {
    addToCart,
    removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;