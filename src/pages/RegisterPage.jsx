import React from 'react';
import MainLayout from '../layout/MainLayout';
import axios from 'axios';
import Swal from 'sweetalert2';
import {show} from '../../node_modules/sweetalert2/src/utils/dom/domUtils';



const RegisterPage = () => {
  const showReg = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Register',
      html:
        '<input id="name" class="swal2-input rounded" placeholder="Username">' +
        '<input id="phone" class="swal2-input" placeholder="Phone">' +
        '<input id="email" class="swal2-input" placeholder="Email">' +
        '<input id="image" type="text" class="swal2-input" placeholder="image url">',
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById('name').value,
          phone: document.getElementById('phone').value,
          email: document.getElementById('email').value,
          image: document.getElementById('image').value,
        };
      },
    });

    if (formValues) {
      try {
        // Assuming you have a backend endpoint to handle user registration
        const response = await axios.post('https://node-backend-test.vercel.app/api/user/register', formValues);

        if (response) {
          Swal.fire({
            icon: 'success',
            title: 'Registration successful!',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration failed',
            text: response.data.message,
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred during registration',
        });
      }

    }
  }
  return (
    <MainLayout>
      <div>
      <button onClick={() => showReg()} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Create Account
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
      </div>
    </MainLayout>
  );
}

export default RegisterPage;
