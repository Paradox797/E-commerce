import React, { useState } from 'react';
import Footer from '../Homepage/Footer';
import AvailableItem from './AvailableItem';
import ItemBanner from './ItemBanner';

const Item = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <ItemBanner date={date} setDate={setDate}></ItemBanner>
            <AvailableItem date={date}></AvailableItem>
            <Footer></Footer>
        </div>
    );
};
export default Item;
