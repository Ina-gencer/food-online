import { useSelector } from 'react-redux';
import cart from './cart.png'
import CartItem from './CartItem';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div >
            <img src={cart} className="cartIcon" alt='cart'/>
            <h3>Total: $ {totalPrice}</h3>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/> )}
        </div>
    );
}

export default Cart;
