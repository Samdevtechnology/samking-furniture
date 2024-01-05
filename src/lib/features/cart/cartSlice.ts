import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "@/lib/types/Product";

interface CartProduct extends Product {
  quantity?: number;
}

interface CartState {
  cartItems: CartProduct[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  loggedIn: boolean;
}

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || "[]")
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  loggedIn: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProduct>) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // existingItem.quantity++;
        existingItem.quantity = (existingItem.quantity ?? 0) + 1;
        // toast.info("Increased product quantity", {
        //   position: "bottom-left",
        // });
      } else {
        const tempProductItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProductItem);
        // toast.success("Product added to cart", {
        //   position: "bottom-left",
        // });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action: PayloadAction<CartProduct>) {
      const itemToDecrease = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (
        itemToDecrease &&
        itemToDecrease.quantity &&
        itemToDecrease.quantity > 1
      ) {
        itemToDecrease.quantity--;
        //   toast.info("Decreased product quantity", {
        //     position: "bottom-left",
        //   });
      } else if (itemToDecrease && itemToDecrease.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        //   toast.error("Product removed from cart", {
        //     position: "bottom-left",
        //   });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action: PayloadAction<CartProduct>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      // toast.error("Product removed from cart", {
      //   position: "bottom-left",
      // });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity = 0 } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity || 0;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = parseFloat(total.toFixed(2));
    },
    // setLoggedIn(state, action) {
    //   state.loggedIn = action.payload;
    //   if (state.loggedIn) {
    //     // If user logs in, sync cart with server
    //     state.items.forEach(item => {
    //       // updateCartOnServer(item);
    //     });
    //     state.items = []; // Clear local cart after syncing with server
    //   }
    // },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
