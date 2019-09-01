import React, { useGlobal, useEffect, useState, } from 'reactn';
import Conditional from 'react-simple-conditional';
import { PwaInstallerPrompt, } from '../components';


export default () => {
  const [gTestState, setgTestState] = useGlobal('gTestState');
  const [installButton, setInstallButton] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);

  const currentDevice = getMobileOperatingSystem();
  const checkGitVersion = () => {
    if (localStorage.getItem('gitversion')) {
      if (localStorage.getItem('gitversion') !== process.env.REACT_APP_GIT_SHA) {
        console.log("git version has changed");
        localStorage.setItem('gitversion', process.env.REACT_APP_GIT_SHA);
        //refresh
      }
    }
    else {
      localStorage.setItem('gitversion', process.env.REACT_APP_GIT_SHA);
    }
  }
  useEffect(() => {


    console.log("Listening for Install prompt on");

    window.addEventListener('beforeinstallprompt', e => {
      // For older browsers
      e.preventDefault();
      console.log("Install Prompt fired");
      setInstallPrompt(e);
      // See if the app is already installed, in that case, do nothing
      if ((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true) {
        return false;
      }
      // Set the state variable to make button visible
      setInstallButton(true);
    })

    window.addEventListener('appinstalled', e => {
      // For older browsers
      e.preventDefault();
      console.log("App is successfully installed before");
    });

    // Prevents window from moving on touch on older browsers.
    window.addEventListener('touchmove', function (event) {
      event.preventDefault()
    }, false)

    // Allows content to move on touch.
    // document.querySelector('.body-container').addEventListener('touchmove', function (event) {
    //   event.stopPropagation()
    // }, false)
  }, []);

  async function installApp() {
    if (!installPrompt) return false;
    installPrompt.prompt();
    let outcome = await installPrompt.userChoice;
    if (outcome.outcome === 'accepted') {
      console.log("App Installed")
    }
    else {
      console.log("App not installed");
      alert('Hope you will install me soon!');
    }
    // Remove the event reference
    setInstallPrompt(null);
    // Hide the button
    setInstallButton(false);
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    try {
      // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
      }
      if (/android/i.test(userAgent)) {
        return "Android";
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
      }
    } catch (err) {
      return "Error";
    }
    return "Unknown";
  }

  return (
    <>
      {
        currentDevice === "Windows Phone" || currentDevice === "Android" || currentDevice === "Unknown" ?
          <Conditional condition={installButton} >
            <PwaInstallerPrompt platform="Android" installAppOnClick={installApp} />
          </Conditional> : null
      }
      {
        currentDevice === "iOS" && !window.navigator.standalone ?
          <PwaInstallerPrompt platform="iOS" />
          : null
      }
      {/* <div className="relative p-2">
        <h1>Home</h1>
        <p>current</p>
        <div>
          <div>test case: {gTestState}</div>
          <button onClick={() => { setgTestState(gTestState + 1) }}>change</button>
        </div>
        <p>you are browsing using {currentDevice}</p>
      </div> */}
    </>
  );
}