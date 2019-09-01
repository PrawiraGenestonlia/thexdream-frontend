import React, { Fragment } from 'reactn';

export default () => {
  const refresh = () => {
    window.location.reload(true)
  };
  return (
    <Fragment>
      <span>Home Page</span>
      <p>
        <button onClick={refresh}>refresh</button>
      </p>
    </Fragment>
  )
}