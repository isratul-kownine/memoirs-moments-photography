import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name , price, picture,about} = service;
    return (
        <div className='service'>
            
             <img src={picture} alt="" />
             <h3>{name}</h3>
             <p>Price : $ <small>{price}</small></p>
             <p>{about}</p>
             <button> Book : {name}</button>
        </div>
    );
};

export default Service;