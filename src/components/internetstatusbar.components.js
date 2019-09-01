import React, { Fragment, useState, useEffect } from 'reactn';

export default () => {
  const [internetStatus, setInternetStatus] = useState(true);
  const [lastOfflineTime, setLastOfflineTime] = useState(null);

  useEffect(() => {
    window.addEventListener('online', (e) => {
      setInternetStatus(true);
      setLastOfflineTime(new Date().getTime());
    });
    window.addEventListener('offline', (e) => {
      setInternetStatus(false);
    });
  }, []);

  function showStatusBar() {
    //when offline to online
    if (lastOfflineTime) {
      setTimeout(() => { setLastOfflineTime(null) }, 3000);
      return (
        <Fragment>
          <header className="fixed z-10 bottom-0 w-screen">
          <div class="flex bg-green-100 border border-green-500 text-green-800 px-4 py-1 rounded text-xs inset-x-0 bottom-0 justify-center" role="alert">
            <strong class="font-bold">Online!  </strong>
            <span class="block inline ml-2">Welcome back!</span>
          </div>
          </header>
        </Fragment>
      )
    }
    //when offline
    if (!internetStatus) {
      return (
        <Fragment>
          <header className="fixed z-10 bottom-0 w-screen">
          <div class="flex bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded text-xs inset-x-0 bottom-0 justify-center" role="alert">
            <strong class="font-bold">Offline!  </strong>
            <span class="block inline ml-2">Some features may not be functional</span>
          </div>
          </header>
        </Fragment>
      )
    }
  }

  return (
    <Fragment>
      {showStatusBar()}
    </Fragment>
  )
}