// import './App.css';
import "./output.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import LoginComponent from "./routes/Login.js";
function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element ={ <LoginComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
