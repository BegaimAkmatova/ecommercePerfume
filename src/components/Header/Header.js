import classes from './Header.module.css';
import {VscKey} from 'react-icons/vsc';
import {FiPhoneCall} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Cart from './../Cart/Cart';
import HeaderCart from './HeaderCart';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from './../../store/ui-slice';
import  {CgProfile} from 'react-icons/cg';
import HeartCart from './../LikedPerfume/HeartCart';

const Header = () => {
    const dispatch = useDispatch();
    const [cartIsShow, setCartIsShow] = useState(false);

    const cartShowHandler = () => {
        setCartIsShow(true);
    }

    const cartHideHandler = () => {
        setCartIsShow(false);
    }

    const heartShowHandler = () => {
        dispatch(uiActions.show())
    }
    
    return (
        <>
        <header >
        {cartIsShow && <Cart onCloseCart={cartHideHandler}/>}
                <div className={classes.header}>
                    <div className={classes.perfume}>
                        <Link to='/main'>
                            <h3>Perfume</h3>
                            <p>Интернет-магазин парфюмерии</p>
                        </Link>
                    </div>
                    <div >
                        <ul className={classes.ul}>
                            <li>
                                <FiPhoneCall fontSize={25}/>
                                    <Link to='/'>
                                        <span> +996 (555) 270291</span>
                                    </Link>
                                    <Link to='/'>
                                        <span> +996 (708) 318792</span>
                                    </Link>
                                    <br/>
                                    <span>call-центр работает пн-пт с 9:00 до 21:00 </span>
                            </li>
                            <li onClick={cartShowHandler} onCloseCart={cartHideHandler}>
                                <Link>
                                    <HeaderCart />
                                </Link>
                                <span>Корзина</span>
                            </li>
                            <li className={classes.heart} onClick={heartShowHandler} >
                                <Link to='/liked'>
                                    <HeartCart />
                                </Link>
                                <br/>
                                <span>Закладки</span>
                            </li>
                            <li>
                                <Link to='/'>
                                    <VscKey fontSize={25}/>
                                </Link>
                                <br/> 
                                <span>Войти</span>
                            </li>
                            <li>
                                <Link>
                                    <CgProfile fontSize={25}/>
                                </Link>
                                <br/>
                                <span>Регистрация</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            
        </>   
    )
}

export default Header;