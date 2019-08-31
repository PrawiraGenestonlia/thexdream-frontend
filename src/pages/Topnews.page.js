import React, { Fragment, useState, useEffect } from 'reactn';
import axios from 'axios';
// import request from "superagent";
import debounce from "lodash.debounce";
import config from '../config';
import { NewsCard } from '../components';

export default () => {
  const [currentnews, setCurrentNews] = useState('');
  const [loadedArticles, setLoadedArticles] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // window.addEventListener("scroll", debounce(() => {
  //   if (
  //     (window.innerHeight + document.documentElement.scrollTop)
  //     >= document.documentElement.offsetHeight
  //   ) {
  //     setLoadedArticles(loadedArticles + 2);
  //   }
  // }, 100));

  window.onscroll = debounce(() => {
    if (isLoading || !hasMore) return;
    if (
      (window.innerHeight + document.documentElement.scrollTop)
      === document.documentElement.offsetHeight
    ) {
      setLoadedArticles(loadedArticles + 2);
      // setIsLoading(true);
      if (loadedArticles === currentnews.totalResults) setHasMore(false);
    }
  }, 100);

  useEffect(() => {
    axios.get(config.server_url+config.api.getTopNews)
      .then(res => {
        // console.log(res);
        res.status === 200 && setCurrentNews(res.data);
        res.status === 200 && setLoadedArticles(5);
      })
      .catch(err => {
        alert(err);
      })
  }, []);


  return (
    <Fragment>
      {
        currentnews && currentnews.articles.map((articles, index) => {
          if (index < loadedArticles) return <NewsCard data={articles} />
          else return null;
        })
      }
      {isLoading &&
        <div>Loading...</div>
      }
      {/* {
        isLoading &&
        setTimeout(() => { setIsLoading(false) }, 500)
      } */}
      {!hasMore &&
        <div>There is no more top news at the moment!</div>
      }
    </Fragment>
  )
}