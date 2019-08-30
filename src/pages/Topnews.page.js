import React, { Fragment, useState, useEffect } from 'reactn';
import axios from 'axios';
import config from '../config';
import { NewsCard } from '../components';

export default () => {
  const [currentnews, setCurrentNews] = useState('');
  useEffect(() => {
    axios.get(config.server_url + config.api.getTopNews)
      .then(res => {
        // console.log(res);
        res.status === 200 && setCurrentNews(res.data);
      })
      .catch(err => {
        alert(err);
      })
  }, []);


  return (
    <Fragment>
      {currentnews ? <NewsCard data={currentnews.articles[0]}/> : null}
      <span>Top News</span>
    </Fragment>
  )
}