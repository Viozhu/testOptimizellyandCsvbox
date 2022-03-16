import React, { useState } from "react";
import { createInstance, OptimizelyProvider } from "@optimizely/react-sdk";
import { Data } from "./important/data";
import { Uploadfiles } from "./important/uploadfiles";

const optimizelyClient = createInstance({ sdkKey: "JyRJVzQGhFWRcQjdU3v6k" });

function App() {
  const [isDone, setIsDone] = useState(false);

  optimizelyClient.onReady().then(() => {
    setIsDone(true);
  });

  return (
    <OptimizelyProvider
      optimizely={optimizelyClient}
      user={{ id: "default_user" }}
    >
      {isDone && <Data />}
      <Uploadfiles />
    </OptimizelyProvider>
  );
}

export default App;

// Split version
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
