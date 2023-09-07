
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="flex items-center justify-between space-x-4 bg-slate-800 py-3 px-10">
                <div>
                    <h3 className='text-white font-bold text-2xl'>
                        <Link href="/">Logo</Link>
                    </h3>
                </div>
                <div className='flex gap-4'>
                    <Link href="/about" class="nav-style">About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;