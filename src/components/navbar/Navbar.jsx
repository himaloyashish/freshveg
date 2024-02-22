import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link href={"/"}>Fresh Veg</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/store"}>Store</Link>
                <Link href={"/dashboard"}>Dashboard</Link>
            </ul>
        </div>
    );
};

export default Navbar;