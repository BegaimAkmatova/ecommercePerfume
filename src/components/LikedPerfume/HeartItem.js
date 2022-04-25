import Heart from '../ContentItem/Heart';
import classes from './HeartItem.module.css';

const HeartItem = (props) => {  
    const {img, name, title, price} = props.item;

    return (
        <li className={classes.li}>
            <div className={classes.img}>
                <Heart className={classes.heart}/>
                <img src={img} alt="perfume" />
                <h2>{name}</h2>
                <p>{title}</p>
                <span>Цена: </span>
                <b>{price} сом</b>
            </div>
        </li>
    )
}

export default HeartItem;