import React, { Fragment } from 'reactn';

export default () => {
  const refresh = () => {
    window.location.reload(true);

  };
  return (
    <Fragment>
      <span>Home Page</span>
      <p>
        current react version {process.env.REACT_APP_GIT_SHA}
      </p>
      <p>
        <button onClick={refresh}>refresh</button>
      </p>
    </Fragment>
  )
}