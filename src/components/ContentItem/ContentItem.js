import classes from './ContentItem.module.css';
import { useDispatch} from 'react-redux';
import { cartActions } from './../../store/cart-slice';
import Button from '../UI/Button';
import Heart from './Heart';
import React from 'react';
import { Link } from 'react-router-dom';

const ContentItem = (props) => {
    const dispatch = useDispatch();
    const {img,name, title, price,id} = props;

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            title,
            img,
            price,
        }))
    }

    const addToLikedHandler = () => {
        dispatch(cartActions.addFavoriteItem({
            id,
            name,
            title,
            img,
            price,
        }))
    }

    return (
            <div className={classes.card}>
                <div className={classes.liked}>
                    <Link onClick={addToLikedHandler}>
                        <Heart />
                    </Link>
                </div>
                <img src={props.img} alt="perfume" />
                <h2>{props.name}</h2>
                <p>{props.title}</p>
                <div className={classes.quanty}>
                    <div className={classes.price}>
                        <span>Цена: </span>
                        <b>{props.price} kgs</b>
                    </div>
                    <div className={classes.action}>
                        <Button onClick={addToCartHandler} >В корзину</Button>
                    </div>
                </div>
            </div>
    )
}

export default ContentItem;