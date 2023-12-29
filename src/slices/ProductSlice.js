import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[] ,
}

export const productSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    add_product: (state,action) => {
      let tempProducts={...state};
      tempProducts['products']=action?.payload
      return tempProducts;
    },
    append_product: (state,action) => {
      let tempProducts={...state};
      tempProducts['products']=[action?.payload].concat( tempProducts['products'])
      return tempProducts;
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_product, append_product,} = productSlice.actions

export default productSlice.reducer