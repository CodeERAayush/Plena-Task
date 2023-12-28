import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[] ,
}

export const cartSlice = createSlice({
  name: 'Items',
  initialState,
  reducers: {
    add_item: (state,action) => {
    state?.items?.unshift(action.payload)
    },
    remove_item: (state,action) => {
     console.log(action?.payload?.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_item, remove_item} = cartSlice.actions

export default cartSlice.reducer