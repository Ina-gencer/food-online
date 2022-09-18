import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from 'react';
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div>
           <img src={`./${dish.img}.jpg`} alt="dish"/>
           <div className="check_list"><h2>{dish.name} <span>$ {dish.price}</span></h2></div>
           
           <ChangeQuantity  quantity={quantity} setQuantity={setQuantity}/>
           <button onClick={()=> {dispatch(addItemToCart({dish, quantity}));
        }}>Add To Cart</button>
        </div>
    );
}

export default Dish;
