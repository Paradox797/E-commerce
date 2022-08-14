import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import Booking_modal from './Booking_modal';
import { format } from 'date-fns';
// import { useQuery } from 'react-query/build/cjs/packages/react-query/src';

const AvailableItem = ({ date }) => {
    const [services, setServices] = useState([]);
    const [booked, setbooked] = useState(null);


    // const {}=useQuery('available',()=> fetch('http://localhost:5000/service')
    //         .then(res => res.json())
    //         )


    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(date => setServices(date));
    }, [])

    return (
        <div>
            <h1 className='text-xl text-Secondary text-center' >Available items ...</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Booking
                        key={service._id}
                        service={service}
                        setbooked={setbooked}
                    ></Booking>)
                }
            </div>
            {booked && <Booking_modal
                date={date}
                booked={booked}
                setbooked={setbooked}
            ></Booking_modal>}
        </div>
    );
};
export default AvailableItem;
