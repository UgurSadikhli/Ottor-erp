import React from 'react';

interface Props {
    color: string
}

const ArrowUpIcon = ({color}: Props) => {
    return (
        <svg width="9.000000" height="12.000000" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs/>
            <path id="shape" d="M4 0.28L4 10.28M8 4.28L4 0.28L0 4.28" stroke={color} stroke-opacity="1.000000"
                  stroke-width="1.500000" stroke-linejoin="round"/>
        </svg>


    );
};

export default ArrowUpIcon;

