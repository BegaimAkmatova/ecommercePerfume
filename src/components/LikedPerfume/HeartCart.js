import {FaRegHeart} from 'react-icons/fa';
import { useSelector } from 'react-redux';

const HeartCart = () => {
    const select = useSelector(state => state.cart.favorite);

    return (
        <>
            <FaRegHeart fontSize={25}/>
            <span>{select.length}</span>
        </>
    )   
}

export default HeartCart;