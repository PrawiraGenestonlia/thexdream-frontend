import React, { Fragment, useState } from 'reactn';



export default (props) => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const iOS = () => {
    return (
      <Fragment>
        <p>Click here to install for iOS</p>
      </Fragment>
    )
  }
  const Android = () => {
    return (
      <Fragment>
        <p>Click here to install for android</p>
      </Fragment>
    )
  }
  const Unknown = () => {
    return (
      <Fragment>
        <p>Click here to install for unknown</p>
      </Fragment>
    )
  }
  return (
    <Fragment>
      {props.platform === "iOS" ? iOS() : null}
      {props.platform === "Android" ? Android() : null}
      {props.platform === "Unknown" ? Unknown() : null}
    </Fragment>
  )
}