import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[] ,
}

export const cartSlice = createSlice({
  name: 'Items',
  initialState,
  reducers: {
    add_item: (state) => {
    console.log("add: ",state)
    },
    remove_item: (state) => {
     console.log("remove: ",state)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_item, remove_item} = cartSlice.actions

export default cartSlice.reducer