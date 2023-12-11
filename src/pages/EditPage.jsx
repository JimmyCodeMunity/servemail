import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';

function EditPage() {
    const { id,email } = useParams();
    const navigate = useNavigate();
    // const [name, setName] = useState("");
    // const [quantity, setQuantity] = useState("");
    // const [price, setPrice] = useState("");
    // const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        quantity: "",
        price: "",
        image: ""
    })



    const getProduct = async (e) => {
        setIsLoading(true)
        try {

            const response = await axios.get(`https://node-backend-test.vercel.app/api/product/productsbyid/${id}`);
            setProduct({
                name: response.data.name,
                quantity: response.data.quantity,
                price: response.data.price,
                image: response.data.image
            })
            setIsLoading(false)
            toast.error(response.data)

        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }

    }
    useEffect(() => {
        getProduct()
    }, [])


    //update
    const updateProduct = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await axios.put(`https://node-backend-test.vercel.app/api/product/updateproduct/${id}`, product);
            Swal.fire({
                icon: 'success',
                title: `${product.name} updated successfully`,
            });
            navigate('/shop')

        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)

        }
    }

    const showLoader = () => {
            Swal.fire({
                icon: 'success',
                title: 'loading...',
            })

        

    }

    const closeLoader = () =>{
        Swal.close();
    }
    useEffect(() => {
        showLoader()
    }, [])
    return (
        <MainLayout>
            <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
                <h2 className="font-semibold text-xl mb-4 text-center block">Edit {product.name}</h2>
                <form className="space-y-2" onSubmit={updateProduct}>
                    {isLoading ? showLoader : (
                        !showLoader
                    )}
                    <div>
                        <label htmlFor="">Product Name</label>
                        <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter product name" />
                    </div>
                    <div>
                        <label htmlFor="">Quantity</label>
                        <input type="number" value={product.quantity} onChange={(e) => setProduct({ ...product, quantity: e.target.value })} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter amount" />
                    </div>

                    <div>
                        <label htmlFor="">Price</label>
                        <input type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter price" />
                    </div>

                    <div className="flex gap-3">
                        <div>
                            <img src={product.image} alt="" className="rounded-full w-24 h-24" />
                        </div>
                        <div>
                            <label htmlFor="">Image URL</label>
                            <input type="text" value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter image url" />
                        </div>
                    </div>

                    <div>

                        <button className="mt-5 block w-full bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-green-600 hover:cursor-pointer">Update</button>


                    </div>

                </form>
            </div>
        </MainLayout>
    );
}

export default EditPage;
