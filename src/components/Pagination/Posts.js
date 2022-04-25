import React from 'react';
import ContentItem from '../ContentItem/ContentItem';
import classes from './Pagination.module.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className={classes['list-group-item']}>
      {posts.map(post => (
        <li key={post.id} >
            <ContentItem
              key={post.id}
              id={post.id}
              name={post.name}
              title={post.title}
              img={post.url}
              price={post.price}
            />
        </li>
      ))}
    </ul>
  );
};

export default Posts;