import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action.js';

import {
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
  CheckoutItemContainer,
  ImageContainer
} from './checkout-item.styles.jsx';

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispath = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispath(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispath(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispath(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;