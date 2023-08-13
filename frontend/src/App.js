// import './App.css';
import "./output.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import LoginComponent from "./routes/Login.js";
import SignupComponent from "./routes/Signup.js";
import HomeComponent from "./routes/Home.js";
function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element ={ <LoginComponent/>}/>
          <Route path="/signup" element ={ <SignupComponent/>}/>
          <Route path="/home" element ={ <HomeComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
