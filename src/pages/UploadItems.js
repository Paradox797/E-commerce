import React from 'react'
import { format } from 'date-fns';
import auth from '../firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { getAuth, onAuthStateChanged } from "firebase/auth";
let currentUser;
const getFromLocalStorage = () => {
    currentUser = localStorage.getItem('currentUser');
    currentUser = JSON.parse(currentUser);
    console.log(currentUser)
}
const UploadItems = ({ date, booked, setbooked }) => {
    //const { _id, cardtittle, item_number, img } = booked;
    const { user, loading, error } = useAuthState(auth);
    // console.log(user);
    //const firebaseUser = useAuthState(auth, data.email, data.password);
    const formattedDate = format(date, 'PP');
    // const asd=useQuery('available',()=> fetch('http://localhost:5000/as')
    //          .then(res => res.json())
    //         )





    const handleBooking = event => {
        event.preventDefault();
        getFromLocalStorage();
        const booking = {
            date: formattedDate,
            sellerName: currentUser.name,
            SellerEmail: currentUser.email,
            cardtittle: event.target.name_field.value,
            phone: event.target.phone_field.value,
            des: event.target.des_field.value,
            item_number: event.target.number_item.value,
            img: event.target.imgUrl_field
        }
        console.log(booking)

        fetch('http://localhost:5000/uploadItems', {
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
                <div className=" form-control w-full max-w-xs">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg"> Please follow the process</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-item-center mt-3'>
                        <input type="text" id="date_field" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        {/* <input type="text" name="name" disabled value={currentUser?.displayName || ''} placeholder="Type here your name" className="input input-bordered w-full max-w-xs" /> */}
                        <input type="text" name="name" id="name_field" placeholder="Type here your name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" id="des_field" placeholder="Type here Products' description:" className="input input-bordered w-full max-w-xs" />
                        <input type="text" id="imgUrl_field" name="img" placeholder="give the products image's url" className="input input-bordered w-full max-w-xs" />
                        <input type="email " name="email" disabled value={currentUser?.email || ''} placeholder="Type here your email" className="input input-bordered w-full max-w-xs" />
                        <input type="phone " name="phone" placeholder="give your phone Number" className="input input-bordered w-full max-w-xs" />
                        {/* <input type="email " name="email" id="email_field" placeholder="Type here your email" className="input input-bordered w-full max-w-xs" /> */}
                        <select id="number_item" className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Number of Items available:</option>
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
export default UploadItems;