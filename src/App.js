import './App.css';
import NavBar from './pages/Homepage/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Homepage/Dashboard';
import Login from './pages/Login/Login';
import Process from './pages/Process/Process';
import Account from './pages/Account/Account';
import ProductInfo from './pages/ProductInfo/ProductInfo';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/process" element={<Process />} />
        <Route path="/account" element={<Account />} />
        <Route path="/productInfo" element={<ProductInfo />} />
      </Routes>
    </div>
  );
}

export default App;
