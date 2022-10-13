import { Card, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

/*
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
*/

const FetchNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setIsLoading(false);
        console.log(news);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        news.map((noticia) => (
          <div key={noticia.id}>
            <div>{noticia.title}</div>
            <div>{noticia.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchNews;
