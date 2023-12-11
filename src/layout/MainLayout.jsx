import React from 'react';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            
            <div>
                {children}
            </div>
            <ToastContainer/>
        </div>
    );
}

export default MainLayout;
