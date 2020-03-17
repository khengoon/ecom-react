import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartItemsTotal = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((accumulatedTotal, cartItem) => accumulatedTotal + cartItem.price * cartItem.quantity, 0)
)