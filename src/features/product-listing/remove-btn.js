import React from 'react';

export default function RemoveButton(props) {
  return (
    <button
      onClick={() => props.removeFromCart(props.cartItem)}
    >Remove  ({
      (props.cartItem && props.cartItem.quantity) || 0
  })</button>
  )
}