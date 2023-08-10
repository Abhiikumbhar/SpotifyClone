// import './App.css';
import "./output.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className='bg-blue-500'>name</div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
