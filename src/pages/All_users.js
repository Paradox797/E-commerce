import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase_init';

const updateAdmin = (user) => {
    user.isAdmin = !user.isAdmin;
    fetch('http://localhost:5000/update', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}


const All_users = () => {
    //getFromLocalStorage();
    const [user, setuser] = useState([]);

    //const [user] = useAuthState(auth);
    useEffect(() => {

        // fetch('http://localhost:5000/allusers')
        //     .then(res => res.json())
        //     .then(data => setuser(data));
        // console.log(data);


        fetch('http://localhost:5000/allusers')
            .then(res => res.json())
            .then(data => {

                setuser(data);

                console.log(data);

            });

    }, [])
    return (

        <div>Number of Users:{user.length}


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
                            <th> Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(a =>
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
                                    </td>

                                    <td>{a.email}</td>

                                    <td>
                                        <button
                                            onClick={() => updateAdmin(a)}
                                            className="btn btn-outline btn-accent"
                                        >Admin</button>

                                    </td>

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

export default All_users;