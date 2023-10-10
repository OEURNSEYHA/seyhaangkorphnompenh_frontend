import React from "react";
import {Routes, Route} from'react-router-dom'
import Login from "./Login";
import Data from "./Data";
function App() {
  return <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/data" element={<Data/>}/>
    </Routes>
  </>;
}

export default App;
