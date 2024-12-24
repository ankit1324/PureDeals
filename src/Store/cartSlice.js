import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [{
        id: 1,
        name: "Throwback Hip Bag",
        href: "#",
        color: "Salmon",
        price: "$90.00",
        quantity: 1,
        imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
        imageAlt:
            "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
        {
            id: 2,
            name: "Medium Stuff Satchel",
            href: "#",
            color: "Blue",
            price: "$32.00",
            quantity: 1,
            imageSrc:
                "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
            imageAlt:
                "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
        }],
    reducers: {
        addItem: (state, action) => {
            items.push(action.payload);
        },
        removeItem: (state, action) => {
            return items.remove(action.payload);
        }
    }
})
const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;