import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductCard from '../components/ProductCard';
import Swal from 'sweetalert2';
//import { toast } from 'react-toastify';

function Shop() {
    const [products, setProduct] = useState([]);


    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://node-backend-test.vercel.app/api/product/allproducts');
            setProduct(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error)

        }

    }




    useEffect(() => {
        fetchProducts()

    }, [])

    const otpSend = () => {
        
        const result = Swal.fire({
            title: 'Enter OTP',
            input: 'text',
            showCancelButton:true,
            customClass: {
                validationMessage: 'my-validation-message',
            },
            preConfirm: (value) => {
                if (!value) {
                    Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Your name is required')
                }
            },
        })

        if(result){
            toast.success("OTP sent")
        }

    }

    



    return (
        <MainLayout>
            <div>
                <Link to="/create" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Add Product
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>

                <button onClick={() => otpSend()} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    OPT
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 flex justify-start items-center my-5 px-4">

                {products.length > 0 ? (
                    <>
                        {products.map((item, index) => (

                            <ProductCard key={index} product={item} />

                        ))}
                    </>
                ) : (
                    <p>No product found</p>
                )}


            </div>
        </MainLayout>
    );
}

export default Shop;
