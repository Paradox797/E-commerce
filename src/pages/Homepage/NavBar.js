import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';


const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };

    const menubar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/process">Process</Link></li>
        {/* <li><Link to="/uploadItems">UploadItems</Link></li> */}
        {
            user && <li><Link to="/myDashboard">Dashboard</Link></li>
        }
        <li>{user ? <button class="btn btn-active btn-ghost" onClick={logout}>SignOut</button> : <Link to="/login">Login</Link>}</li>
    </>

    return (
        <div className="navbar bg-base-100">
            < div className="navbar-start" >
                <div className="dropdown" >
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div >
                <div className='grid gap-1 grid-rows-2'>
                    <p1> <strong > Trust & Trade </strong></p1>
                    <span className="text-blue-500"><small>Change the Approaches not Yours choices</small></span>
                </div>

            </div >
            <div className="navbar-center hidden lg:flex" >
                <ul className="menu menu-horizontal p-0" >
                    {menubar}
                </ul >
            </div >
            <div className="navbar-end" >
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <label htmlFor="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open</label>
                <a className="btn"> <Link to="/Item">Let's go Shopping</Link></a >
            </div >

        </div >
    );
};

export default NavBar;
