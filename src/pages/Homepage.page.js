import React, { Fragment } from 'reactn';

export default () => {
  const refresh = () => {
    window.location.reload(true);

  };
  return (
    <Fragment>
      <div style={{ alignItems: 'center', justifySelf: 'center' }}>
        <p style={{ textAlign: 'center' }}>
          This application is still undergoing development. You can start using the
          news
          function (navigate through the menu)
        </p>
        <p style={{ textAlign: 'center' }}>
          Contact <a>praw0001@e.ntu.edu.sg</a> for any suggestions.
        </p>
      </div>

      {/* <p>current version {process.env.REACT_APP_GIT_SHA}</p> */}
      {/* <p><button onClick={refresh}>refresh</button>s</p> */}
    </Fragment>
  )
}