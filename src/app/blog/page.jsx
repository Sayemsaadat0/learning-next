import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <Link href='/blog/test1' className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src="/blog1.png" width={450} height={100} alt='730*420sized'></Image>
                    <div className='md:px-5'>
                        <h1>1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, amet.</h1>
                        <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, molestiae voluptatem fugiat nisi dolor aliquam aliquid laudantium accusantium laboriosam totam! Quam suscipit ipsa labore excepturi praesentium repellat ut nulla fugiat.</p>
                    </div>
                </div>
            </Link>
            <Link href='/blog/2' className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src="/blog2.png" width={450} height={100} alt='730*420sized'></Image>
                    <div className='md:px-5'>
                        <h1>2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, amet.</h1>
                        <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, molestiae voluptatem fugiat nisi dolor aliquam aliquid laudantium accusantium laboriosam totam! Quam suscipit ipsa labore excepturi praesentium repellat ut nulla fugiat.</p>
                    </div>
                </div>
            </Link>
            <Link href='/blog/3' className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src="/blog3.png" width={450} height={100} alt='730*420sized'></Image>
                    <div className='md:px-5'>
                        <h1> 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, amet.</h1>
                        <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, molestiae voluptatem fugiat nisi dolor aliquam aliquid laudantium accusantium laboriosam totam! Quam suscipit ipsa labore excepturi praesentium repellat ut nulla fugiat.</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Blog;