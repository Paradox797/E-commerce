import './App.css';
import NavBar from './pages/Homepage/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Homepage/Dashboard';
import Login from './pages/Login/Login';
import Process from './pages/Process/Process';
import Account from './pages/Account/Account';
import AppReview from './pages/AppReview';
import Cart from './pages/Cart';
import Item from './pages/Item/Item';
import Signup from './pages/Login/SignUp';
import Requireauth from './pages/Login/Requireauth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyDashboard from './pages/MyDashboard';
import MyReview from './pages/MyReview';
import All_users from './pages/All_users';
import UploadItems from './pages/UploadItems';

function App() {
  return (
    <section>
      <div className='max-w-7xl mx-auto px-12'>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/process" element={<Requireauth><Process /></Requireauth>} />
          <Route path="/account" element={<Requireauth><Account /></Requireauth>} />

          <Route path="/Item" element={<Requireauth><Item /></Requireauth>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/uploadItems" element={<Requireauth><UploadItems /></Requireauth>} />

          <Route path="/myDashboard" element={
            <Requireauth>
              <MyDashboard />
            </Requireauth>
          }>
            <Route index element={<Cart></Cart>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
            <Route path="allUser" element={<All_users></All_users>}></Route>
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </section>

  );
}

export default App;
