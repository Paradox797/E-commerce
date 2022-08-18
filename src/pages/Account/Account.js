import React from 'react'
import { useEffect, useState } from 'react';

let currentUser;
const getFromLocalStorage = () => {
    currentUser = localStorage.getItem('currentUser');
    currentUser = JSON.parse(currentUser);
    console.log(currentUser)
}
const Account = () => {
    getFromLocalStorage();
    const [accountInfo, setaccountInfo] = useState([]);
    //const [user] = useAuthState(auth);
    useEffect(() => {
        if (currentUser) {
            fetch(`http://localhost:5000/as?email=${currentUser.email}`)
                .then(res => res.json())
                .then(data => setaccountInfo(data));
        }
        console.log(accountInfo);


    }, [currentUser])

    return (
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
                        <th>Location</th>
                        <th>Email</th>
                        <th>userID</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accountInfo.map(a =>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div class="flex items-center space-x-3">

                                        <div>
                                            <div class="font-bold">{a.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {a.location}

                                    <span class="badge badge-ghost badge-sm"></span>
                                </td>
                                <td>{a.email}</td>
                                <th>
                                    <button class="btn btn-ghost btn-xs">{a.userID}</button>
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

        </div >
    );
};

export default Account;