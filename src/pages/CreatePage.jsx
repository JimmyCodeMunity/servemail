import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

function CreatePage() {
    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState("");
    const [price,setPrice] = useState("");
    const [image,setImage] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const saveProduct = async(e) =>{
        //prevent refreshing
        e.preventDefault();
        //alert('product added')
        if(name === "" || quantity === "" || price === "" || image === ""){
            toast.error('Kindly fill all the inputs');
            return;
        }
        try {
            setIsLoading(true)
            const response = await axios.post('https://node-backend-test.vercel.app/api/product/productnew',{name:name, quantity:quantity, price:price, image:image});
            toast.success(`Save ${response.data.name} successfully`);
            setIsLoading(false);
            Swal.fire({
                icon:'success',
                title:'Product added successfully',
            })
            navigate('/shop');

            
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
            
        }
    }
  return (
    <MainLayout>
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="font-semibold text-xl mb-4 text-center block">Create Product</h2>
            <form onSubmit={saveProduct} className="space-y-2">
                <div>
                    <label htmlFor="">Product Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter product name" />
                </div>

                <div>
                    <label htmlFor="">Quantity</label>
                    <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter amount" />
                </div>

                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter price" />
                </div>

                <div>
                    <label htmlFor="">Image URL</label>
                    <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter image url" />
                </div>

                <div>
                    {!isLoading && (
                        <button className="mt-5 block w-full bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>
                    )}
                    
                </div>

            </form>
        </div>

    </MainLayout>
  );
}

export default CreatePage;
