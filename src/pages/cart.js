import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase_init';


let currentUser;
const getFromLocalStorage = () => {
    currentUser = localStorage.getItem('currentUser');
    currentUser = JSON.parse(currentUser);
    console.log(currentUser)
}

const Cart = () => {
    getFromLocalStorage();
    const [book, setbook] = useState([]);
    //const [user] = useAuthState(auth);
    useEffect(() => {
        if (currentUser) {
            fetch(`http://localhost:5000/booking?customerEmail=${currentUser.email}`)
                .then(res => res.json())
                .then(data => setbook(data));
        }
        console.log(book);


    }, [currentUser])
    return (

        <div>My Cart:{book.length}


            <div class="overflow-x-auto w-full">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Booked Product</th>
                            <th>number of Product</th>
                            <th>Date of Booking</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            book.map(a =>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div class="flex items-center space-x-3">

                                            <div>
                                                <div class="font-bold">{a.customerName}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {a.bookingName}

                                        <span class="badge badge-ghost badge-sm">Thanks for selecting</span>
                                    </td>
                                    <td>{a.bookingAmount}</td>
                                    <th>
                                        <button class="btn btn-ghost btn-xs">{a.date}</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>


                    <tfoot>
                        <tr>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>

    );
};

export default Cart;