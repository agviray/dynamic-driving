import React from 'react';

const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6930.495497117473!2d-95.5535837!3d29.712582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c2d0dbcd2415%3A0xabbdd94ee596c923!2sDynamic%20Driving!5e0!3m2!1sen!2sus!4v1703203555704!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 'none' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
