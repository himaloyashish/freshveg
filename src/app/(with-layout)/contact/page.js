import React from 'react';

export const metadata = {
    title: "Contact Page",
    description: " This is Contact page"
}

const ContactPage = () => {

    

    return (
        <div className='bg-[#e0e1ee] py-16 '>
            <div className='w-72 m-auto bg-[#ccb5dc] h-96 p-10 rounded-md shadow-md'>
                <p className='font-bold '>Contact us</p>
                <form action="" className='flex flex-col'>
                    <label htmlFor="Name" className='py-2'>Name</label>
                    <input type="text" name="name" id="" />
                    <label htmlFor="Name" className='py-2'>Email</label>
                    <input type="email" name="email" id="" />
                    <button type="submit"  className='pt-3 shrink-1 bg-slate-300 '>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;