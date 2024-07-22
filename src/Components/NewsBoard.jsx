import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem";


function NewsBoard({categories}) {

    const [articles, setArticles] = useState([])

    useEffect(() => {

        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categories}&apiKey=45cefdcb04fa448d9c2b60512f124919`;

        fetch(url)
            .then(res => res.json())
            .then(data=>{
                if(data && data.articles){
                    setArticles(data.articles)
                }
            })
            // .then(data => setArticles(data.articles));

    }, [categories])
    return (
        <div>
            <h2 className="text-center"><span className="badge bg-danger ">News</span> Updates</h2>

            {articles.map((news, index) => {
                return <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url} 
                    />
            })}
        </div>
    )
}

export default NewsBoard