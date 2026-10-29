
import React from 'react';

const Maps = () => {
    return (
        <div
            className="map-container"
            style={{
                width: '100%',
                maxWidth: '600px',
                height: '400px'
            }}
        >
            <iframe
                title="Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d646881.8174771927!2d7.11660705!3d50.70357239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1793277924125!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
            />
        </div>
    );
};

export default Maps;
