import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        loadProduct: (state, action) => {
            state.data = action.payload;
        },
    },
});

export default productSlice.reducer;

export const { loadProduct } = productSlice.actions;