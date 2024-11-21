import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


export default function Newsboard({category}) {
    const [articles,setArticals] = useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=>setArticals(data.articles))

    },[category])
  return (
    <div>
        <h2 className="text-center">Latest<span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={NewsItem.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}
