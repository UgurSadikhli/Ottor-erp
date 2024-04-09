import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    imageUrl: string;
}

const AuthLayout: React.FC<LayoutProps> = ({ children, imageUrl }) => {
    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    {children}
                </div>
                <div className="col-lg-6 d-none d-lg-block p-0">
                    <img src={imageUrl} className="img-fluid h-100"
                         style={{objectFit: 'cover', width: '100%', height: '100%'}} alt="right-side-img"/>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
