import React from 'react';

const Service = ({service}) => {
    const {name , price} = service;
    return (
        <div>
             <h2>price : {price}</h2>
        </div>
    );
};

export default Service;