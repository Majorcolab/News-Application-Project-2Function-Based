import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&apikey=${props.apiKey}&page=${page}&max=${props.max}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    setLoading(false);
    console.log(parsedData);
    props.setProgress(100);
  };

  useEffect(() => {
    
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&apikey=${props.apiKey}&page=${page + 1}&max=${props.max}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults);
    console.log(parsedData);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop:'90px' }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles?.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.image}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  max: 9,
  category: "sports",
};

News.propTypes = {
  country: PropTypes.string,
  max: PropTypes.number,
  category: PropTypes.string,
};

export default News;
