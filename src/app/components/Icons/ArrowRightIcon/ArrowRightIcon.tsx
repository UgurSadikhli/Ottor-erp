import React from 'react';

interface Props {
    color: string
}

const ArrowRightIcon = ({color}: Props) => {
    return (
        <svg width="9.000000" height="17.000000" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="paint_linear_59_157_0" x1="8.000000" y1="0.000002" x2="-0.000002" y2="15.999999" gradientUnits="userSpaceOnUse">
                <stop stop-color="#14ADD6"/>
                <stop offset="1.000000" stop-color="#384295"/>
            </linearGradient>
        </defs>
        <path id="shape" d="M8 0L0 8L8 16" stroke="url(#paint_linear_59_157_0)" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>
    );
};

export default ArrowRightIcon;

