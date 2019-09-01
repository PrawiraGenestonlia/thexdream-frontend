import React, { Fragment, useEffect, useState } from 'reactn';

const sampleData = {
  source: { id: 'google-news', name: 'Google News' },
  author: 'Chiara Giordano',
  title: 'Ebola death toll in Congo now over 2,000 - The Independent',
  description:
    'Health workers struggle to control spread of disease in remote and conflict-hit areas',
  url:
    'https://news.google.com/__i/rss/rd/articles/CBMie2h0dHBzOi8vd3d3LmluZGVwZW5kZW50LmNvLnVrL25ld3Mvd29ybGQvYWZyaWNhL2Vib2xhLXZpcnVzLW91dGJyZWFrLWNvbmdvLWRlbW9jcmF0aWMtcmVwdWJsaWMtZHJjLWRlYXRoLXRvbGwtYTkwODU1NjYuaHRtbNIBf2h0dHBzOi8vd3d3LmluZGVwZW5kZW50LmNvLnVrL25ld3Mvd29ybGQvYWZyaWNhL2Vib2xhLXZpcnVzLW91dGJyZWFrLWNvbmdvLWRlbW9jcmF0aWMtcmVwdWJsaWMtZHJjLWRlYXRoLXRvbGwtYTkwODU1NjYuaHRtbD9hbXA?oc=5',
  urlToImage:
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/30/15/ebola-congo.jpg',
  publishedAt: '2019-08-30T14:42:34Z',
  content:
    'The death toll from the Congos year-long Ebola outbreak has now climbed above 2,000.\r\nGovernment data released on Friday showed the number of deaths had reached 2,006, while confirmed and probable cases of the virus had surpassed 3,000.\r\nThe death of a nine-y… [+6707 chars]'
}



export default (props) => {
  const [currentNews, setCurrentNews] = useState('');
  // const [currentTitle, setCurrentTitle] = useState([]);
  const handleClickNews = () => {
    // alert('You have clicked me');
    return (
      <div className="bg-blue-500 h-screen w-screen">

      </div>
    )
  }
  useEffect(() => {
    var arr = props.data.title.split(" - ");
    var temp = props.data;
    temp.description = temp.description ? temp.description : "Description not available at the moment";
    // temp.urlToImage = temp.urlToImage ? temp.urlToImage : "https://dummyimage.com/1x1/fff/fff.png";
    temp.shorttitle = arr[0];
    temp.publisher = arr[1];
    temp.publishtime = new Date(props.data.publishedAt);
    setCurrentNews(temp);
    // console.log(temp);

    //
  }, [props]);
  return (
    <Fragment>
      {currentNews ?
        <div class="max-w-sm w-full lg:max-w-full lg:flex mb-4" onClick={() => { handleClickNews() }}>
          {currentNews.urlToImage ? <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url('${currentNews.urlToImage}')` }}
            title={currentNews.shorttitle}> </div>
            :
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url('https://lousbarandgrill.com/wp-content/uploads/2018/08/news-1.jpg')` }}
              title={currentNews.shorttitle}> </div>
          }
          {/* <div class="border-t border-r border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"/> */}
          <div class="xl:w-screen lg:w-screen border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                You will be directed to the original site
            </p>
              <div class="text-gray-900 font-bold text-xl mb-2">{currentNews.shorttitle}</div>
              <p class="text-gray-700 text-base">{currentNews.description}</p>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <p class="text-gray-900 leading-none">
                  <a href={currentNews.url}>
                    {currentNews.publisher}
                  </a>
                </p>
                <p class="text-gray-600">{currentNews.publishtime.toLocaleString()} </p>
              </div>
            </div>
          </div>
        </div>
        : null}
    </Fragment>
  )
}

