import React from 'react';
import Order from './Order';

const Footer = () => {
  const hour = new Date().getHours();

  const openingHour = 12;
  const closingHour = 22;

  const isOpen = hour >= openingHour && hour < closingHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closingHour={closingHour} />
      ) : (
        <p>
          We are currently closed. We will happily welcome you again between{' '}
          {openingHour}
          :00 and {closingHour}
          :00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
