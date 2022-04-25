import Content from "./Content";
import classes from './Content.module.css';
import SideBar from './../SideBar/SideBar';
import Carousel from "../CarouselData/Carousel";
import oneImg from '../../assets/images/images (1).jpg';
import twoImg from '../../assets/images/images (2).jpg';
import threeImg from '../../assets/images/images (3).jpg';
import fourImg from '../../assets/images/images (4).jpg';
import fiveImg from '../../assets/images/images (5).jpg';
import sixImg from '../../assets/images/dukhi-flakon-parfium-blesk-serdechki.jpg';

const Contents = () => {

    return (
        <>  
            <div className={classes.image}>
                <Carousel />
            </div>
            <div className={classes.images}>
                <img src={oneImg} alt='img'/>
                <img src={twoImg} alt='img'/>
                <img src={threeImg} alt='img'/>
                <img src={fourImg} alt='img'/>
                <img src={fiveImg} alt='img'/>
                <img src={sixImg} alt='img'/>
            </div>
            <SideBar />
            <div className={classes.blok}>
                <h1>Все духи</h1>
            <div className={classes.content}>
                <Content />
            </div>
            </div> 
        </>
    )
}

export default Contents;