import React from 'react'
import { format } from 'date-fns';
import auth from '../../firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { getAuth, onAuthStateChanged } from "firebase/auth";
let currentUser;
const getFromLocalStorage = ()=>{
    currentUser = localStorage.getItem('currentUser') ;
    currentUser = JSON.parse(currentUser);
    console.log(currentUser)
}
const Booking_modal = ({ date, booked, setbooked }) => {
    const { _id, cardtittle, item_number, img } = booked;
    const { user, loading, error } = useAuthState(auth);
    console.log(user);
    //const firebaseUser = useAuthState(auth, data.email, data.password);
    const formattedDate = format(date, 'PP');
    // const asd=useQuery('available',()=> fetch('http://localhost:5000/as')
    //          .then(res => res.json())
    //         )





    const handleBooking = event => {
        event.preventDefault();
        getFromLocalStorage();
        const booking = {
            bookingID: _id,
            bookingName: cardtittle,
            bookingNumber: item_number,
            date: formattedDate,
            customerEmail: currentUser.email,
            customerName: currentUser.name,
            phone: event.target.phone_field.value,
            location: event.target.location_field.value,
            bookingAmount: event.target.number_item.value,
            bookingImg: img
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.success) {
                    toast(`Successfully added to the cart`)
                }
                else {
                    toast.error("You already have booked items today from this service,please try next day")
                }
                setbooked(null);
            });


    }

    return (
        <div>
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{cardtittle} added to the cart</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-item-center mt-3'>
                        <input type="text" id="date_field" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                         <input type="text" name="name" disabled value={currentUser?.displayName || ''} placeholder="Type here your name" className="input input-bordered w-full max-w-xs" />
                        {/*<input type="text" name="name" id="name_field" placeholder="Type here your name" className="input input-bordered w-full max-w-xs" />*/}
                        <input type="text" id="location_field" placeholder="Type here your location" className="input input-bordered w-full max-w-xs" />
                        <input type="text" id="phone_field" name="phone" placeholder="Type here your phone number" className="input input-bordered w-full max-w-xs" />
                         <input type="email " name="email" disabled value={currentUser?.email || ''} placeholder="Type here your email" className="input input-bordered w-full max-w-xs" />
                        {/*<input type="email " name="email" id="email_field" placeholder="Type here your email" className="input input-bordered w-full max-w-xs" />*/}
                        <select id="number_item" className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Number of Item:</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div >
            </div >
        </div >
    );
};
export default Booking_modal;
