
import { useSelector } from 'react-redux';

import HeartItem from './HeartItem';

const CartHeart = () => {

    const select = useSelector(state => state.cart.favorite);

    return (
        <ul style={{'display':'flex'}}>
            {select.map(item => (
                <HeartItem 
                item={{
                    key:item.id,
                    id: item.id,
                    img:item.url,
                    name:item.name,
                    price: item.price,
                    }}
                />
            ))}
        </ul>
    )
}

export default CartHeart;