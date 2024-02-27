"use client"

import Link from 'next/link';
import React from 'react';

// // MUI icon 
// import AddLocationIcon from '@mui/icons-material/AddLocation';
// import LanguageIcon from '@mui/icons-material/Language';
// import CallEndIcon from '@mui/icons-material/CallEnd';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';




const Footer = () => {
    return (

        <div className='bg-[#C5EBAA] '>
            <p className='p-6 text-2xl'>FreshVeg</p>

            <div>
                <div className='grid md:grid-cols-3 gap-10 px-6 py-4'>
                    <div>
                        <p className='text-xl'>
                            Welcome to FreshVeg, your online haven for the freshest, most vibrant vegetables you can find! Whether you're a seasoned home cook, a busy professional seeking healthy options, or simply someone looking to add more color to your plate, FreshVeg has everything you need.
                        </p>
                    </div>

                    <div>
                        <p className='text-xl font-bold'>Information</p>
                        <div className='flex flex-col'>
                            <Link className='font-bold' href={'about'}>About Us</Link>
                            <Link className='font-bold' href={'contact'}>Contact Us</Link>
                            <Link className='font-bold' href={'contact'}>Terms & Condition</Link>
                            <Link className='font-bold' href={'blog'}>Return & Refunds</Link>
                            <Link className='font-bold' href={'blog'}>Blog</Link>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Quick Contact</p>
                        <div>
                            <p className='font-bold'>Gulshan 2, Round Square</p>
                            <Link href={'https://freshveg-cyan.vercel.app/'} className='font-bold'></Link>
                            <p className='font-bold'>+88 99878 - 8779</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;