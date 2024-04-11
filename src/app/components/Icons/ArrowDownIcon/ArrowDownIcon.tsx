import React from 'react';

interface Props {
    color: string
}

const ArrowDownIcon = ({color}: Props) => {
    return (

        <svg width="9.000000" height="11.000000" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs/>
            <path id="shape" d="M4 10L4 0M0 6L4 10L8 6" stroke={color} stroke-opacity="1.000000"
                  stroke-width="1.500000" stroke-linejoin="round"/>
        </svg>


    );
};

export default ArrowDownIcon;

