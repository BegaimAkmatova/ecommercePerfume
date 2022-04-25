import CartHeart from './CartHeart';
import classes from './Perfume.module.css';

const Perfume = () => {
    return (
        <>
            <div className={classes.perfume}>
                <h1>Мои закладки</h1>
            </div>
            <CartHeart />
        </>
        
    )
}

export default Perfume;