import React, { Fragment } from 'reactn';
import { Link } from 'react-router-dom';
import config from '../config';

export default () => {
  return (
    <Fragment>
      <span>Not Found</span>
      <Link to={config.routes.homepage}>Click here to go to homepage</Link>
    </Fragment>
  )
}