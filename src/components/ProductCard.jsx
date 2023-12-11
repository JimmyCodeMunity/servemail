import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'


function ProductCard({ product }) {
    const navigate = useNavigate()


    //delete product
    const deleteProduct = async (id) => {
        
        const result = await Swal.fire({
            title: "Do you really want to delete?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete it!'
        })

        if (result.isConfirmed) {
            try {
                await axios.delete(`https://node-backend-test.vercel.app/api/product/deleteproduct/${id}`)
                toast.error("Product deleted")
                navigate('/shop')



            } catch (error) {
                toast.error(error.message)

            }

        }
        // toast.or("Delete clicked")


    }

    const showImage = (image) =>{
        Swal.fire({
            imageUrl: image,
            imageHeight: '100%',
            imageWidth:'100%',
            imageAlt: image
          });
    }

    return (
        <div>
            <div class="max-w-sm mb-6 bg-white border border-gray-200 mx-3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#">
                    <img class="rounded-t-lg w-full h-60" src={product.image} alt="" onClick={()=>showImage(product.image)} />
                </Link>
                <div class="p-5">
                    <Link to="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kshs.{product.price}</p>
                    <div className="flex mt-2 gap-4">
                        <button onClick={() => deleteProduct(product._id)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Delete
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        <Link to={`/edit/${product._id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Edit
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;
