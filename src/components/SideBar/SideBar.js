import classes from './SideBar.module.css';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className={classes.list}>
        <ul>
            <li>
                <NavLink to='/' activeClassName={classes.active}>Все духи</NavLink>
            </li>
            <li>
                <NavLink to='/' activeClassName={classes.active}>Мужская парфюмерия</NavLink>
            </li>
            <li>
                <NavLink to='/' activeClassName={classes.active}>Женская парфюмерия</NavLink>
            </li>
        </ul>
    </div>
    )
}

export default SideBar;