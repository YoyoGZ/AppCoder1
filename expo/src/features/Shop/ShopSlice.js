import { createSlice } from "@reduxjs/toolkit";


export const shopSlice = createSlice({
    name: "Shop",
    initialState: {
        value: {
            marcaSelected: "",
            itemSelected: ""
        }
    },
    reducers: {
        setMarcaSelected: (state, payload) => {
            state.value.marcaSelected = payload;
        },
        setItemSelected: (state, payload) => {
            state.value.itemSelected = payload
        }
    }
});

export const {setMarcaSelected, setItemSelected} = shopSlice.actions;
export default shopSlice.reducer;