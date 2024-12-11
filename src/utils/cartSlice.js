import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      debugger;
      let index = state.items.findIndex((value) => {
        //console.log(value.data.menuTitle, action.payload.data.menuTitle);
        return value.data.menuTitle === action.payload.data.menuTitle;
      });
      // mutating the state
      if (index === -1) state.items.push(action.payload);
      else {
        // we are mutating the state, but in vanilla(older) redux, it was PROHIBITED TO MUTATE STATE, u needed to do something like this-
        // let newState = [...state] and then change newState and return the newState, returning was mandatoru
        // but now it is needed to mutate the state and we are not mandatorily need to return it
        // behind the hood redux is still craating a new state and mutating and rturning it and redux toolkit uses IMMER(library) for this.

        //! RTK says, u either mutate the state or return a new state
        state.items[index].qtyToAdd++;
      }
    },

    removeItem: (state, action) => {
      let itemToRemove = action.payload;
      let index = state.items.findIndex(
        (value) => value.data.menuTitle === action.payload.data.menuTitle
      );
      if (index >= 0) {
        state.items[index].qtyToAdd--;
        if (state.items[index].qtyToAdd === 0) {
          state.items.splice(index, 1);
        }
      }
    },

    clearCart: (state) => {
      state.items.length = 0; // empties the array items
      // if u do state.item = [] // this wont work bcoz we have to mutate the state in redux toolkit. And here it is not mutating the state, it is just referencing to new memory location

      //! RTK says, u either mutate the state or return a new state, and this returned state will be used in the original state
      // hence this will also work ->
      // return {
      //   items: [],
      //   totalPrice: 0,
      // },
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
