// const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6dc7b3b6ef4048c3bd0766e3165f44d1');
import React from 'react';
import { useQuery } from 'react-query';

const Articles = (props) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const { selectedNav } = props;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${props.customName}&apiKey=${apiKey}`;

    const fetchArticles = async () => {
        const res = await fetch(apiUrl);
        return res.json();
    };

    const { data, isLoading, error } = useQuery(['articles', selectedNav], fetchArticles);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {data.articles.map((article, index) => (
                <article key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </article>
            ))}
        </div>
    );
};

export default Articles;
