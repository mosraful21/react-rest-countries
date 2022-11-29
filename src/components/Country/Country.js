import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, area, region} = props.country;

    return (
        <div className='country bg-info'>
            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Area : {area}</p>
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;