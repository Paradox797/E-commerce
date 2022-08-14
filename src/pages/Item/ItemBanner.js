import React from 'react';
import image from '../../assets/images/BigSale.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const ItemBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen bg-base-200">
            < div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt="Big Sale" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>Today's Date: {format(date, 'PP')}</p>
                </div>
            </div >
        </div >
    );
};
export default ItemBanner;