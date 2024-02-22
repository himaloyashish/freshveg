import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div >
            <div className='md:flex justify-between items-center px-10 pt-6'>
                <ul>
                    <Link className='text-xl font-bold' href={"/"}>Fresh Veg</Link>

                </ul>
                <ul className='md:flex gap-5'>
                    <Link className='text-xl font-bold' href={"/about"}>About</Link>
                    <Link className='text-xl font-bold' href={"/store"}>Store</Link>
                    <Link className='text-xl font-bold' href={"/dashboard"}>Dashboard</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;