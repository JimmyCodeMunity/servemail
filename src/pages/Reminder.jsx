import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

function Reminder() {
    const [receiverEmail, setReceiverEmail] = useState('');
    const [isLoading,setIsLoading] = useState(false);


    //handle mailing
    const handleEmailSend = async(e) =>{
        //prevent refreshing
        e.preventDefault();
        //alert('product added')
        if(receiverEmail === ""){
            toast.error('Kindly fill all the inputs');
            return;
        }
        try {
            setIsLoading(true)
            const response = await axios.post('https://anonimous-mailserver.vercel.app/sendreminder',{email:receiverEmail});
            //toast.success(`Save ${response.data.receiver} successfully`);
            setIsLoading(false);
            Swal.fire({
                icon:'success',
                title:'Reminder Email sent successfully',
            })
            

            
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
            
        }
    }

      const showToast = () =>{
        toast.success("Toast active");

      }
    return (
        <MainLayout>
            <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
                <h2 className="font-semibold text-xl mb-4 text-center block">Send Reminder</h2>
                <form onSubmit={handleEmailSend} className="space-y-2">
                    <div>
                        <label htmlFor="">User Email</label>
                        <input type="text" value={receiverEmail} onChange={(e) => setReceiverEmail(e.target.value)} className="w-full block px-3 border text-gray-500 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 space-y-3 my-2 placeholder-gray-400" placeholder="enter user email" />
                    </div>

                    

                    <div>
                        {!isLoading ? (
                            <button className="mt-5 block w-full bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Send Email</button>
                        ):(
                            <button className="mt-5 block w-full bg-green-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-green-600 hover:cursor-pointer">Sending..</button>
                        )}

                    </div>

                </form>
            </div>

        </MainLayout>
    );
}

export default Reminder;
