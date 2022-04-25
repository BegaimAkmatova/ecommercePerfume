import OrderForm from './OrderForm';
import classes from './Ordering.module.css';
import { useSelector } from 'react-redux';
import {useState} from 'react';

const Ordering = () => {
    const select = useSelector(state => state.cart.item)
    const [isCheck, setIsCheck] = useState(false);

    const hideOrderHandler = () => {
        setIsCheck(true);
    }

    const orderHandler = (data) => {
        console.log(data)
        fetch('https://perfume-ea4d9-default-rtdb.firebaseio.com/orders.json', {
            method: 'PUT',
            body: JSON.stringify({
                user: data,
                orderedItems: select.item
            })
        })
    } 
    return (
        <div className={classes.order}>
            <h1>Оформление заказа</h1>
            {!isCheck && <OrderForm onConfirm={orderHandler} onCloseOrder={hideOrderHandler}/>}
        </div>
    )
}

export default Ordering;