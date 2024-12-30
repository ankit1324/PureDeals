import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [
        {
            id: 26,
            title: "Sleek Mirror Finish Phone Case",
            price: 27,
            description:
                "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
            images: ["https://i.imgur.com/yb9UQKL.jpeg"],
            creationAt: "2024-12-23T19:08:41.000Z",
            updatedAt: "2024-12-23T19:08:41.000Z",
            category: {
                id: 2,
                name: "Electronics",
                image: "https://i.imgur.com/ZANVnHE.jpeg",
                creationAt: "2024-12-23T19:08:41.000Z",
                updatedAt: "2024-12-23T19:08:41.000Z",
            },
        },
    ],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload); // Properly push a new item to the state
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload); // Filter out the item to remove
        },
    },
});

// Selector to calculate the total price of items in the cart
export const selectTotalPrice = (state) => {
    return state.cart.reduce((total, item) => total + item.price, 0);
};

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
