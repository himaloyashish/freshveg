import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='w-72 m-auto p-6 text-center'>
            <p className='text-red-500 text-4xl'>404 !!</p>
            <p className='text-xl'>You having a wrong way</p>
            <Link href={'/'} className='text-xl bg-green-300 rounded-sm p-3'>Go Back</Link>
        </div>
    );
};

export default NotFoundPage;