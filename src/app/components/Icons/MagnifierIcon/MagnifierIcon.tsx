import React from 'react';

interface Props {
    color: string
}

const MagnifierIcon = ({color}: Props) => {
    return (
        <svg width="18.000000" height="18.000000" viewBox="0 -1 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs/>
        <path id="shape" d="M0 7.5C0 3.35 3.35 0 7.5 0C11.64 0 15 3.35 15 7.5C15 11.64 11.64 15 7.5 15C3.35 15 0 11.64 0 7.5ZM17 17L12.8 12.8" stroke={color} stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>
    
    

    );
};

export default MagnifierIcon;

