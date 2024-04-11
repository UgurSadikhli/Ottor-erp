import React from 'react';

interface Props {
    color: string
}

const RocketIcon = ({color}: Props) => {
    return (
        <svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip5_1040">
                    <rect id="Projects" width="40.000000" height="40.000000" fill="white" fill-opacity="0"/>
                </clipPath>
            </defs>
            <rect id="Projects" width="40.000000" height="40.000000" fill="#FFFFFF" fill-opacity="0"/>
            <g clip-path="url(#clip5_1040)">
                <path id="Vector"
                      d="M26.3 28.59C26.4 28.63 26.5 28.64 26.59 28.64C26.87 28.64 27.13 28.5 27.26 28.24C28.72 25.29 29.07 22.68 28.3 20.47C27.65 18.62 26.37 17.57 25.66 17.11C25.29 20.11 24.39 23.42 22.93 26.98C22.91 27.04 22.88 27.09 22.85 27.15L26.3 28.59Z"
                      fill={color} fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector"
                      d="M5.39 20.47C4.62 22.68 4.97 25.29 6.43 28.24C6.56 28.5 6.82 28.64 7.1 28.64C7.2 28.64 7.29 28.63 7.39 28.58L10.84 27.15C10.81 27.09 10.78 27.04 10.76 26.97C9.31 23.4 8.39 20.1 8.02 17.1C7.31 17.57 6.04 18.62 5.39 20.47L5.39 20.47Z"
                      fill={color} fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector"
                      d="M21.86 5.09C19.88 1.82 17.42 0.22 17.24 0.11C17 -0.04 16.69 -0.04 16.45 0.11C16.27 0.22 13.81 1.82 11.82 5.09C13.35 5.91 15.07 6.36 16.84 6.36C18.61 6.36 20.33 5.91 21.86 5.09L21.86 5.09Z"
                      fill={color}  fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector"
                      d="M16.85 16.04C17.85 16.04 18.67 15.23 18.67 14.22C18.67 13.21 17.85 12.39 16.85 12.39C15.84 12.39 15.02 13.21 15.02 14.22C15.02 15.23 15.84 16.04 16.85 16.04Z"
                      fill={color}  fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector"
                      d="M9.33 14.21C9.33 17.74 10.27 21.84 12.14 26.41C12.25 26.69 12.53 26.88 12.82 26.88L20.86 26.88C21.16 26.88 21.44 26.69 21.55 26.41C23.42 21.84 24.36 17.73 24.36 14.21C24.36 11.05 23.6 8.46 22.58 6.4C20.83 7.34 18.86 7.85 16.84 7.85C14.82 7.85 12.85 7.34 11.11 6.39C10.09 8.46 9.33 11.05 9.33 14.21L9.33 14.21ZM16.85 10.9C18.67 10.9 20.16 12.39 20.16 14.22C20.16 16.05 18.67 17.54 16.85 17.54C15.02 17.54 13.53 16.05 13.53 14.22C13.53 12.39 15.02 10.9 16.85 10.9Z"
                      fill={color}  fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector"
                      d="M12.82 28.37C12.78 28.37 12.74 28.37 12.7 28.36C12.5 29.03 12.38 29.89 12.44 30.92C12.46 31.13 12.56 31.31 12.73 31.42C12.9 31.55 13.11 31.59 13.31 31.54L14.16 31.31C14.14 32.85 14.4 35.76 16.45 37.15C16.57 37.22 16.71 37.27 16.84 37.27C16.98 37.27 17.12 37.22 17.23 37.15C19.29 35.76 19.55 32.85 19.53 31.31L20.38 31.54C20.58 31.59 20.79 31.55 20.96 31.42C21.13 31.31 21.23 31.13 21.25 30.92C21.31 29.89 21.19 29.03 20.99 28.36C20.95 28.37 20.9 28.37 20.86 28.37L12.82 28.37Z"
                      fill={color}  fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector"
                      d="M28.1 12.77C28.46 13.12 28.89 13.37 29.34 13.54C29.81 13.71 30.27 13.8 30.71 13.8C30.81 13.8 30.92 13.78 31.03 13.77C31.13 13.75 31.24 13.71 31.34 13.66C31.43 13.6 31.51 13.54 31.57 13.45C31.63 13.36 31.66 13.25 31.66 13.12C31.66 12.87 31.53 12.69 31.24 12.56C30.95 12.42 30.62 12.28 30.22 12.15C29.87 12.03 29.53 11.89 29.15 11.75C28.78 11.6 28.45 11.42 28.13 11.18C27.83 10.95 27.57 10.66 27.37 10.33C27.18 10 27.07 9.59 27.07 9.1C27.07 8.68 27.15 8.3 27.28 7.96C27.42 7.63 27.62 7.34 27.86 7.12C28.1 6.87 28.34 6.69 28.66 6.54C28.98 6.39 29.34 6.28 29.65 6.21L29.65 5L31.46 5L31.46 6.18C31.92 6.24 32.34 6.36 32.75 6.53C33.16 6.69 33.54 6.93 33.89 7.25L32.56 9.01C32.3 8.8 32 8.62 31.66 8.5C31.33 8.37 31.01 8.31 30.71 8.31C30.59 8.31 30.46 8.31 30.33 8.33C30.19 8.34 30.07 8.37 29.95 8.42C29.83 8.46 29.74 8.54 29.66 8.63C29.59 8.72 29.54 8.84 29.54 9.01C29.54 9.15 29.59 9.25 29.66 9.34C29.74 9.43 29.84 9.51 29.99 9.59C30.13 9.66 30.3 9.72 30.46 9.8C30.65 9.86 30.83 9.92 31.03 9.98C31.36 10.09 31.71 10.22 32.09 10.36C32.45 10.5 32.78 10.69 33.1 10.92C33.4 11.15 33.66 11.43 33.86 11.78C34.06 12.13 34.16 12.56 34.16 13.07C34.16 13.46 34.09 13.81 33.93 14.13C33.78 14.45 33.59 14.72 33.34 14.95C33.1 15.18 32.81 15.37 32.48 15.54C32.15 15.69 31.75 15.81 31.45 15.89L31.45 17.27L29.68 17.27L29.68 15.93C29.22 15.87 28.6 15.74 28.07 15.53C27.54 15.31 27.09 15.01 26.66 14.6L28.1 12.77Z"
                      fill={color}  fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector"
                      d="M7.46 35.98C7.66 36.17 7.9 36.32 8.15 36.41C8.41 36.5 8.66 36.55 8.91 36.55C8.97 36.55 9.03 36.54 9.09 36.54C9.14 36.53 9.2 36.5 9.26 36.48C9.31 36.44 9.36 36.41 9.39 36.36C9.42 36.31 9.44 36.25 9.44 36.17C9.44 36.04 9.36 35.94 9.2 35.86C9.04 35.79 8.86 35.71 8.64 35.63C8.45 35.57 8.25 35.49 8.04 35.42C7.84 35.33 7.65 35.23 7.48 35.1C7.31 34.97 7.17 34.81 7.06 34.62C6.95 34.44 6.89 34.21 6.89 33.94C6.89 33.71 6.93 33.5 7.01 33.31C7.08 33.13 7.19 32.97 7.33 32.84C7.46 32.71 7.6 32.6 7.77 32.52C7.95 32.44 8.15 32.38 8.32 32.34L8.32 31.66L9.33 31.66L9.33 32.32C9.58 32.35 9.82 32.42 10.05 32.51C10.27 32.6 10.48 32.74 10.68 32.92L9.94 33.89C9.79 33.78 9.62 33.67 9.44 33.61C9.25 33.54 9.08 33.51 8.91 33.51C8.84 33.51 8.77 33.51 8.7 33.51C8.62 33.52 8.56 33.54 8.49 33.56C8.42 33.59 8.37 33.63 8.33 33.68C8.29 33.73 8.26 33.8 8.26 33.89C8.26 33.97 8.29 34.03 8.33 34.08C8.37 34.13 8.43 34.17 8.51 34.21C8.59 34.25 8.68 34.29 8.77 34.33C8.88 34.36 8.98 34.4 9.09 34.43C9.27 34.49 9.46 34.57 9.67 34.64C9.88 34.72 10.06 34.83 10.24 34.95C10.41 35.08 10.55 35.24 10.66 35.43C10.77 35.63 10.83 35.86 10.83 36.15C10.83 36.37 10.79 36.56 10.7 36.74C10.62 36.91 10.51 37.07 10.37 37.19C10.24 37.32 10.08 37.43 9.89 37.52C9.71 37.61 9.49 37.67 9.32 37.71L9.32 38.48L8.34 38.48L8.34 37.74C8.08 37.71 7.74 37.63 7.44 37.51C7.15 37.39 6.9 37.23 6.66 37L7.46 35.98Z"
                      fill={color}  fill-opacity="1.000000" fill-rule="nonzero"/>
            </g>
        </svg>


    );
};

export default RocketIcon;

