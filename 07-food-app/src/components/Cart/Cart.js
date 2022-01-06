import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../store/CartContext';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={Math.random(item.id + 14)}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={() => addItemHandler(item)}
      onRemove={() => removeItemHandler(item.id)}
    >
      {item.name}
    </CartItem>
  ));

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
