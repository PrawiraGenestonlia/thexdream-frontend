import React, { useGlobal } from 'reactn';

function App() {
  const [gTestState, setgTestState] = useGlobal('gTestState');
  return (
    <div className="App">
      <div>
        <div>test case: {gTestState}</div>
        <button onClick={() => { setgTestState(gTestState + 1) }}>change</button>
      </div>
    </div>
  );
}

export default App;
