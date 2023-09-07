'use client'
import React from 'react';
import {signIn} from "next-auth/react";

const page = () => {
  return (
    <div>
        <h1 className="text-red-700 font-bold text-3xl text-center mt-5">Login Page</h1>
        <div className='border-solid border-red-400 border-2 mt-10 p-5 max-w-lg mx-auto bg-slate-50'>
            <form action="">
                <div>
                    <input className='bg-slate-300 p-2 mb-2 w-full' type="text" placeholder="Enter your email"/>
                </div>
                <div>
                    <input className='bg-slate-300 p-2 mb-2 w-full' type="password" placeholder="Enter your password"/>
                </div>
                <button className='bg-green-600 text-white py-2 px-4 w-full mb-2 mt-3'>Login</button>
            </form>
            <div>
                <button onClick={()=>signIn("github")} className='bg-slate-700 text-white py-2 px-4 w-full mb-2'>Login With GitHub</button>
                <button onClick={()=>signIn("linkedin")} className='bg-blue-600 text-white py-2 px-4 w-full mb-2'>Login With LinkedIn</button>
            </div>
        </div>
    </div>
  );
};

export default page;