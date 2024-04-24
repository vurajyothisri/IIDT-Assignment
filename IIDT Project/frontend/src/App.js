
import './App.css';
import Navbar from './Components/nav';
import { Outlet } from "react-router-dom";

function App() {
  return (
   <>
    <Navbar />
    <Outlet />
   </>
  );
}

export default App;
