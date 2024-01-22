import React, { useState } from "react";
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = "8c0aa8e5a59e09b4e6a7914d804dc301";
  const [progress, setProgress] = useState(0);
  
return (
  <div>
    <Router>
      <NavBar />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />

      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" max={9} country="in" category="general" />} />
        <Route exact path="/bussiness" element={<News setProgress={setProgress} apiKey={apiKey} key="bussiness" max={9} country="in" category="bussiness" />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" max={9} country="in" category="entertainment" />} />
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" max={9} country="in" category="general" />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" max={9} country="in" category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" max={9} country="in" category="science" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" max={9} country="in" category="sports" />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" max={9} country="in" category="technology" />} />
      </Routes>
    </Router>
  </div>
);
}

export default App;