import classes from './Carousel.module.css';
import { images } from '../../Helpers/CarouselData';
import React, {useState} from 'react';
import {RiArrowLeftSLine} from 'react-icons/ri';
import {RiArrowRightSLine} from 'react-icons/ri';

const Carousel = () => {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className={classes.carousel}>
            <div className={classes.carouselInner}
                style={{backgroundImage: `url(${images[currImg].img})`}}
            >
                <div className={classes.left} 
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg -1)
                }}>
                    <RiArrowLeftSLine fontSize={50}/>
                </div>
                <div className={classes.center}></div>
                <div className={classes.right}
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1)
                    }}>
                    <RiArrowRightSLine  fontSize={50}/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;