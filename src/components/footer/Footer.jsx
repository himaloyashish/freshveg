"use client"
import { IconButton } from '@mui/material';
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

        <div>
            <p>FreshVeg</p>

            <div>
                <div>
                    <div>
                        <p>
                            Welcome to FreshVeg, your online haven for the freshest, most vibrant vegetables you can find! Whether you're a seasoned home cook, a busy professional seeking healthy options, or simply someone looking to add more color to your plate, FreshVeg has everything you need.
                        </p>
                    </div>
                    <div>
                        <input type="email" name="" id="" />
                        <button type="submit">Submit</button>
                    </div>
                    <div>
                        <p>Information</p>
                        <div>
                            <Link href={'about'}>About Us</Link>
                            <Link href={'contact'}>Contact Us</Link>
                            <Link href={'contact'}>Terms & Condition</Link>
                            <Link href={'blog'}>Return & Refunds</Link>
                            <Link href={'blog'}>Blog</Link>
                        </div>
                    </div>
                    <div>
                        <p>Quick Contact</p>
                        <div>
                            <div className='flex'>
                               
                                <p>Gulshan 2, Round Square</p>
                            </div>
                            <div className='flex'>
                                
                                <p>https://freshveg-cyan.vercel.app/</p>
                            </div>
                            <div className='flex'>
                                
                                <p>+88 99878 - 8779</p>
                            </div>
                        </div>
                    </div>
                    <div>
                       
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;