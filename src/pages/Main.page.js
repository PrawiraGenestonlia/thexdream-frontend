import React, { useGlobal, useEffect, useState } from 'reactn';
import Conditional from 'react-simple-conditional';

export default () => {
  const [gTestState, setgTestState] = useGlobal('gTestState');
  const [installButton, setInstallButton] = useState(false);
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    // console.log("Listening for Install prompt");
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
    }
    // Remove the event reference
    setInstallPrompt(null);
    // Hide the button
    setInstallButton(false);
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <div>
        <div>test case: {gTestState}</div>
        <button onClick={() => { setgTestState(gTestState + 1) }}>change</button>
      </div>
      <Conditional condition={installButton}
        //  style={styles.installBtn}
        onClick={installApp}>
        Install As Application
          </Conditional>
    </div>
  );
}