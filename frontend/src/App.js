import './App.css';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>name</div>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
