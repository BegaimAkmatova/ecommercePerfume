import {FaShoppingCart} from 'react-icons/fa';
import { useSelector} from 'react-redux';

const HeaderCart = (props) => {
    const totalAmount = useSelector(state => state.cart.item);

    return (
        <>
            <div>
                <FaShoppingCart fontSize={25}/>  
                <span>{totalAmount.length}</span>  
            </div>
        </>
    )
}

export default HeaderCart;