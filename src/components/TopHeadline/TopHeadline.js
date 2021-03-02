import React, { useEffect, useState } from 'react';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);

    useEffect (() => {
        const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=3bc372cc03284b9cbd579e4850dce890';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top HeadLines: {articles.length}</h1>
        </div>
    );
};

export default TopHeadline;