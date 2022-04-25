import classes from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

const Pagination = ({postsPerPage,totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
            <div className={classes['pagination-container']}>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <NavLink activeClassName={classes.active} to={`/main/${number}`} onClick={() => paginate(number)}>
                            {number}
                        </NavLink>
                    </li>
                ))}
            </div>
        );
    };

export default Pagination;