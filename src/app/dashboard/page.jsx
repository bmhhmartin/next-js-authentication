'use client'
import React from 'react';
import Header from '../components/Header';
import {useSession} from "next-auth/react";

const Page = () => {
    let session = useSession();
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto">
                <h1 className="font-bold text-red-700 text-3xl py-5">Welcome to Dashboard</h1>
                <h2>{JSON.stringify(session)}</h2>
            </div>
        </div>
    );
};

export default Page;