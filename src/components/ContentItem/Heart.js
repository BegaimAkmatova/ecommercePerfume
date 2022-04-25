import classes from './Heart.module.css';
import {useState} from 'react';

const Heart = () => {
    const [active, setActive] = useState(false);

    const activeChangeHandler = () => {
        setActive(!active)
    }
    return (
        <div className={classes.heart} onClick={activeChangeHandler}>
            <img src={active ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png' : 'https://cdn-s-static.arzamas.academy/storage/microrubric_entry/557/preview_icon_picture-3c3e73b7-cf02-4515-83d5-f79b5261345a.png'} alt='heart' />
        </div>
    )
}

export default Heart;