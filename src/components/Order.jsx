import React from 'react';

const Order = ({ closingHour }) => {
  return (
    <div className='order'>
      <p>
        We're currently open until {closingHour}:00. Come visit us or order
        online
      </p>
      <button className='btn'>Order</button>
    </div>
  );
};

export default Order;
