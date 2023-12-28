import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[] ,
}

export const productSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    add_product: (state,action) => {
    state?.products.push(...action?.payload)
    },
    append_product: (state,action) => {
    state?.products?.shift(action?.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_product, append_product} = productSlice.actions

export default productSlice.reducer