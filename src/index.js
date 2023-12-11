import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals';
//import { toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  // <RouterProvider router={router}/>
  <React.StrictMode>
    <GoogleOAuthProvider clientId="220359881181-6cjc6gecv8q46di8d093d4lj76918at0.apps.googleusercontent.com">
      <BrowserRouter>
        <App />
      </BrowserRouter >
    </GoogleOAuthProvider>
  </React.StrictMode>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
