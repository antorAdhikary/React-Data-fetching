import React from 'react';
import useFetch from '../DataFetch/useFetch';
import './Home.css'

const loadingMessage = 'Data Loading !'
const errorMessage = 'Data not found !'
const Home = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    const {data, loading, error} = useFetch(url);

    const todoElement = data && data.map((todo) => {
        return <div className='card'>
            <h4 key={todo.id}>{todo.name}</h4>
            <p>{todo.body}</p>
        </div>
    })
    return (
        <div className='container'>
            
            {todoElement}
            {loading && loadingMessage}
            {error && errorMessage}
        </div>
    );
};

export default Home;