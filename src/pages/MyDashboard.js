import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyDashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl font-bold text-accent-500'>Dashboard</h2>
                <Outlet></Outlet>



            </div>
            <div class="drawer-side">
                <label htmlFor="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


                    <li><Link to="/myDashboard"> Cart</Link></li>
                    <li><Link to="/myDashboard/review">Review</Link></li>
                    <li><Link to="/myDashboard/allUser"> All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default MyDashboard;