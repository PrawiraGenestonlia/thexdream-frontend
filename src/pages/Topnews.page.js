import React, { Fragment, useState, useEffect } from 'reactn';
import axios from 'axios';
// import request from "superagent";
import debounce from "lodash.debounce";
import config from '../config';
import { NewsCard } from '../components';
import { PullToRefresh, PullDownContent, ReleaseContent, RefreshContent } from "react-js-pull-to-refresh";

export default () => {
  const [currentnews, setCurrentNews] = useState('');
  const [loadedArticles, setLoadedArticles] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // window.onscroll = debounce(() => {
  //   if (isLoading || !hasMore) return;
  //   if (
  //     (window.innerHeight + document.documentElement.scrollTop)
  //     === document.documentElement.offsetHeight
  //   ) {
  //     setLoadedArticles(loadedArticles + 1);
  //     // setIsLoading(true);
  //     if (loadedArticles >= currentnews.totalResults) setHasMore(false);
  //   }
  // }, 100);

  const onRefresh = () => {
    // axios.get(config.server_url + config.api.getTopNews)
    //   .then(res => {
    //     // console.log(res);
    //     res.status === 200 && setCurrentNews(res.data);
    //     res.status === 200 && setLoadedArticles(res.data.totalResults);
    //   })
    //   .catch(err => {
    //     alert(err);
    //   })
    window.location.reload();
  };

  useEffect(() => {
    axios.get(config.server_url + config.api.getTopNews)
      .then(res => {
        // console.log(res);
        res.status === 200 && setCurrentNews(res.data);
        res.status === 200 && setLoadedArticles(res.data.totalResults);
      })
      .catch(err => {
        alert(err);
      })
  }, []);


  return (
    <Fragment>
      {/* <PullToRefresh
        pullDownContent={<PullDownContent />}
        releaseContent={<ReleaseContent />}
        refreshContent={<RefreshContent />}
        pullDownThreshold={200}
        onRefresh={onRefresh}
        triggerHeight={20}
        backgroundColor='white'
        startInvisible={true}
      > */}
      {/* <a href={articles.url} ><NewsCard data={articles} /></a> */}
      {
        currentnews && currentnews.articles.map((articles, index) => {
          if (index < loadedArticles)
            return <NewsCard data={articles} />
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
        <div className="flex align-center">There is no more top news at the moment!</div>
      }
    </Fragment>
  )
}