import React from 'react';

const Info = ({ label, value }) => {
    return (
        <div className='info'>
            {value ? (
            <div>{value}</div>
            ) : (
            <div>{label}</div>
            )
            }
        </div>
    )
};

export default Info;
