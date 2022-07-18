import './App.css';
import { Route, Routes } from "react-router-dom";
import Header  from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
