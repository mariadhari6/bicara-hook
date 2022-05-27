import React, { useState, useEffect } from "react"
/**
 * Request Top Headline from https://newsapi.org/
 * Show loading message while fetching
 * Handle Error 
 * Complete functionality of 'Load More' & 'Refresh' button
 */
const defaultNews = {
    status: 'ok',
    totalResults: 0,
    articles: []
}
const endpoint =
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=305f0756e63b47c3a697a42aac17373d";
const Berita = () => {
    const [news, setNews] = useState(defaultNews)
    const [page, setPage] = useState(1)
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [isRefresh, setRefresh] = useState(false)
    const handleRefresh = () => {
        setNews(defaultNews)
        setPage(1)
        setLoading(false)
        setRefresh(!isRefresh)
    }
    const handleLoadMore = () => {
        setPage(current => current + 1)
    }
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${endpoint}&page=${page}`)
                const result = await response.json()
                setNews(current => {
                    return (
                        {
                            ...result,
                            articles: [...current.articles, ...result.articles],
                            totalResults: result.totalResults,
                            status: result.status
                        }
                    )
                })
                if (result.status !== "ok") {
                    throw new Error("error")
                }
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [page, isRefresh])
    return (
        <div>
            <h1> Top Headline </h1>
            {isLoading && <p> Loading... </p>}
            {isError && <p> Terjadi kesalahan, silahkan refesh kembali </p>}
            <ol>
                {news.articles.map((item, index) => (
                    <li
                        key={index}
                    >
                        {" "}
                        <a href={item.url} target="blank"> {item.title} </a>
                    </li>
                ))}
            </ol>
            {news.articles.length < parseInt(news.totalResults) ? (
                <button disabled={isLoading} onClick={handleLoadMore}>
                    Load More
                </button>
            ) : null}
            <button disabled={isLoading} onClick={handleRefresh}>
                Refresh
            </button>
        </div>
    )
}
export default Berita