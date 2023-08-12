// import './App.css';
import "./output.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import LoginComponent from "./routes/Login.js";
import SignupComponent from "./routes/Signup.js";
function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element ={ <LoginComponent/>}/>
          <Route path="/signup" element ={ <SignupComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
