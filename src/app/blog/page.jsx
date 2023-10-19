import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


const Blog = async () => {
    const datas = await getData()
    // console.log(datas)
    return (

        <div className='my-10'>
            {
                datas.map((data) => (
                    <Link key={data.id} href={`/blog/${data.id}`} className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <Image src="/blog2.png" width={450} height={100} alt='730*420sized'></Image>
                            <div className='md:px-5'>
                                <h1>{data.title}</h1>
                                <p className="py-6">{data.body}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Blog;


