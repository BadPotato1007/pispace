import { Routes, Route, Link } from "react-router-dom";

//pages 
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;