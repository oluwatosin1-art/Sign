import Sign from "./components/Sign"
import Login from "./components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/Login" element={<Login />}/>
        </Routes>
   
    </div>
  );
};

export default App;