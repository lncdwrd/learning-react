import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedItems;
    const isExistingItem = state.items.some(
      (item) => item.id === action.item.id
    );

    if (isExistingItem) {
      /**
       * Update Item : Return Item
       * https://stackoverflow.com/a/50504081/14935692
       */
      updatedItems = state.items.map((item) =>
        item.id === action.item.id
          ? { ...item, amount: item.amount + action.item.amount }
          : item
      );
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }

  if (action.type === 'REMOVE') {
    let updatedItems;
    const itemToUpdate = state.items.find((item) => item.id === action.id);

    if (itemToUpdate.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = state.items.map((item) =>
        item.amount > 1 ? { ...item, amount: item.amount - 1 } : item
      );
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount - itemToUpdate.price,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
