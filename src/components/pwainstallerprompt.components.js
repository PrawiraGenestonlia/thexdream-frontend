import React, { Fragment, useState, useGlobal } from 'reactn';



export default (props) => {
  const [showModal, setShowModal] = useGlobal('gShowPromptModal');
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
        <div class="fixed pin z-50 overflow-auto bg-smoke-500 flex">

        </div>
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
  const AndroidAndUnknown = () => {
    return (
      <Fragment>
        {
          showModal ?
            <div class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-500 flex">
              <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
                <span onClick={() => { setShowModal(false) }} class="absolute pin-t pin-r pt-4 px-4">
                  <svg class="h-12 w-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
                <div onClick={props.installAppOnClick}>
                  <span>Install the app</span>
                </div>
              </div>
            </div>
            : null
        }

      </Fragment>
    )
  }
  return (
    <Fragment>
      {props.platform === "iOS" ? iOS() : null}
      {props.platform === "Android" ? AndroidAndUnknown() : null}
      {props.platform === "Unknown" ? AndroidAndUnknown() : null}
    </Fragment>
  )
}