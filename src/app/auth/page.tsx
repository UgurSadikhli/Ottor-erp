import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container-fluid">
           <p>hello world</p>
        </div>
    );
};

export default Layout;
