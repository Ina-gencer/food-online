import dataDishes from "../../data/dataDishes";
import trash from './trash.png';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from '../../redux/cartSlice'

const CartItem = ({cartItem}) => {
    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="check_list"><p>Dish name:{dishes.name}</p></div>
            <div className="check_list"><p>Portion(s): {cartItem.quantity} </p></div>  
            <div className="check_list"><p>Price: $ {dishes.price * cartItem.quantity}</p></div>
            <span onClick={ ()=> dispatch(removeItemFromCart({cartItemId: cartItem.id})) }>
              <img className="icon" src={trash} alt="icon_delete_all" />
            </span>
        </div>
    );
}

export default CartItem;
