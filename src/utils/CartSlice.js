import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const item_exisits = state.items.find(item => item.id === action.payload.id);
      if (state.items.length === 0 || !item_exisits) {
        state.items.push({ ...action.payload, count: 1 });
      } else {
        const ind = state.items.findIndex(item => item.id === action.payload.id);
        state.items[ind] = { ...state.items[ind], count: state.items[ind].count+1 };
      }
    },
    deleteItem: (state, action) => {
      const ind = state.items.findIndex(item => item.id === action.payload.id);
      if(state.items[ind].count ===1){
        state.items.splice(ind,1);
      }else{
        state.items[ind] = { ...state.items[ind], count: state.items[ind].count-1 };
      }
     
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});


export const { addItem, deleteItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
