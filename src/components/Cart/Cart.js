import CartItem from './CartItem';
import Modal from './../UI/Modal';
import { useSelector } from 'react-redux';
import classes from './Cart.module.css';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.item);

    let content = <Button onClick={props.onCloseCart} className={classes.p}>Ваша корзина пуста</Button>;

    let sum = cartItems.reduce((sum, obj) => {
        return obj.totalPrice + sum
    }, 0);

    if(cartItems.length > 0) {
        content = (
            <>
                <ul>
                    {cartItems.map(item => (
                        <CartItem 
                        item={{
                            id: item.id,
                            img:item.url,
                            name:item.name,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                            }}
                        />
                    ))}
                </ul>
                <h2>Итого: {sum} </h2>
            <div className={classes.action}>
                <Button onClick={props.onCloseCart}>Продолжить покупки</Button>
                <Link to='/order' onClick={props.onCloseCart}>
                    <Button>Оформить заказ</Button>
                </Link>
            </div> 
        </>
    )
    }

    return (
        <Modal onCloseCart={props.onCloseCart}>
            <h1>Корзина</h1>
            {content}
        </Modal>
    )
}

export default Cart;