import React, { useGlobal, useEffect, Fragment } from 'reactn'

export default () => {
  const [gNews, setgNews] = useGlobal('gSelectedNews');
  useEffect(() => {
    console.log("gNews", gNews);
  }, []);
  return (
    <Fragment>
      <div dangerouslySetInnerHTML={{ __html: gNews }} />
    </Fragment>
  )
}