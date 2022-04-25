import Button from '../UI/Button';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from './../../store/cart-slice';
import {useEffect, useState} from 'react';

const CartItem = (props) => {
    const [discount, setDiscount] = useState(0);
    const [showDiscount, setShowDiscount] = useState(false);

    const dispatch = useDispatch();
    const {id, img, name, title, total, price, quantity} = props.item;

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            img,
            title,
            price,
            quantity,
        }))
    }

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    }

    useEffect(() => {
        if(total > 5000) {
            const discount = (total * 15) / 150
            setDiscount(discount)
            setShowDiscount(true)
        } else {
            setDiscount(0)
            setShowDiscount(false)
        }
    }, [total])

    const totalPrices = (total - discount).toFixed(2)

    return (
            <li>
                <div className={classes.img}>
                    <img src={img} alt="perfume" />
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <span>Цена: </span>
                    <b>{price} сом</b>
                    <span> ( {total} сом )</span>
                    <div>
                        <div>
                            Количество : <span>{quantity}</span>
                        </div>
                        <div>
                            <Button onClick={addToCartHandler}>+</Button>
                            <Button onClick={removeItemHandler}>-</Button>
                        </div>
                    </div>
                    <div className={classes.discount}>
                       {/* {showDiscount ? <p>Скидка:15% <span>{discount.toFixed(2)}</span> сом</p> */}
                        {showDiscount && <p>Сумма со-скидкой: <span>{totalPrices}</span> сом</p> }
                    </div>
                </div>
        </li>
    );
};

export default CartItem;
