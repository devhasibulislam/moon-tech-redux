import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "../actionTypes/productActionType";

const initialState = {
  cart: [],
  wishlist: [],
};

const productReducer = (state = initialState, action) => {
  const selectCart = state.cart.find(
    (product) => product._id === action.payload._id
  );
  console.log(selectCart);

  const selectWishlist = state.wishlist.find(
    (product) => product._id === action.payload._id
  );

  switch (action.type) {
    case ADD_TO_CART:
      if (selectCart) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectCart._id
        );
        selectCart.quantity = selectCart.quantity + 1;
        return {
          ...state,
          cart: [...newCart, selectCart],
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      if (selectCart.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectCart._id
        );
        selectCart.quantity = selectCart.quantity - 1;
        return {
          ...state,
          cart: [...newCart, selectCart],
        };
      }

      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    case ADD_TO_WISHLIST:
      if (selectWishlist) return state;

      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
