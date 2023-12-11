import React from 'react';
import MainLayout from '../layout/MainLayout';

function HomePage() {
  return (
    <MainLayout>
      <div className='container border-gray-200 dark:bg-gray-900 w-full '>
        <section className="h-[100vh]">
          <div className="justify-center items-center">
            <div className="text-center py-6 mt-6">
              <h2 className=" text-white text-4xl my-10 font-bold">Welcome to PaxMailer</h2>
              <div>
                <button class="h-12 w-40 rounded-3xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
                  Get Started
                </button>
              </div>
            </div>
            <div className="relative h-[90vh] w-full justify-start">
              <img src="https://unbounce.com/photos/Group-32284.png" className="inset-0 overflow-hidden h-full w-full" alt="" />

            </div>
          </div>
        </section>
        <section className="h-[100vh] mt-36">
        <h1 className="text-3xl text-center font-bold my-24 text-white ">Brands</h1>
          <div className="flex justify-evenly items-center">
            
            <div>
              <h2 className='text-white font-bold uppercase text-2xl'>Samsung</h2>
            </div>
            <div>
              <h2 className='text-white font-bold uppercase text-2xl'>Apple</h2>
            </div>
            <div>
              <h2 className='text-white font-bold uppercase text-2xl'>Sony</h2>
            </div>
            <div>
              <h2 className='text-white font-bold uppercase text-2xl'>Vitron</h2>
            </div>
            <div>
              <h2 className='text-white font-bold text-2xl uppercase'>Lenovo</h2>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default HomePage;
