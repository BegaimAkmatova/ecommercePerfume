import { useEffect, useState } from "react";
import classes from "./Content.module.css";
import Pagination from '../Pagination/Pagination'
import Posts from './../Pagination/Posts';
import { useDebounce } from "../../hooks/useDebounce";
import { useLocation } from "react-router-dom";


const Content = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [httpError, setHttpError] = useState(null);
    const params = useLocation()
    const page = params.pathname.split('/')[params.pathname.split('/').length - 1]
    
    const [currentPage, setCurrentPage] = useState(page || 2);
    const [postsPerPage] = useState(5);
    const debouncedValue = useDebounce(inputValue,1000)

   
    
    const filteredPerfume = items.filter(item => {
        return item.name.toLowerCase().includes(debouncedValue.toLowerCase())
    })

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

  const submitHandler = (e) => {
      e.preventDefault();

      setInputValue('');
  }

useEffect(() => {
    const fetchPerfume = async () => {
        const response = await fetch('https://perfume-ea4d9-default-rtdb.firebaseio.com/perfume.json')
        if(!response.ok) {
            throw new Error('Something went wrong!')
        }
        const responseData = await response.json();
        const loadedPerfume = [];
        for (const key in responseData) {
            loadedPerfume.push({
                id:key,
                name:responseData[key].name,
                title:responseData[key].title,
                url:responseData[key].url,
                price:responseData[key].price
            })
        }
        setItems(loadedPerfume);
        setIsLoading(false);
    }
    fetchPerfume().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message)
    })
},[])

if(isLoading) {
    return <p className={classes.loading}>Loading...</p>
}

if(httpError) {
    return <p className={classes.httpError}>{httpError}</p>
}

    const lastPostsIndex = currentPage * postsPerPage
    const firstPostsIndex = lastPostsIndex - postsPerPage
    const currentPosts = filteredPerfume.slice(firstPostsIndex, lastPostsIndex)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
return (
        <>
            <form onSubmit={submitHandler}>
                <input 
                    className={classes.input}
                    placeholder="Введите название бренда или аромата..."
                    onChange={inputChangeHandler}
                    value={inputValue}
                />
            </form>
        <ul className={classes.cards}>
            <Pagination totalPosts={filteredPerfume.length} postsPerPage={postsPerPage} paginate={paginate}/>
        </ul>
        <Posts posts={currentPosts} loading={isLoading}/>
    </>
    );
};

export default Content;
