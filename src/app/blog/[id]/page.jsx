import Image from 'next/image';
import React from 'react';


async function getData({id}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
    if (!res.ok) {
        return console.error();
    }
    return res.json()
}



const BlogPost = async ({ params }) => {
    const datas = await getData(params.id);    
    console.log(datas); 
    // datas is undefined i dont know why
    return (


        <div >
            <div className="hero"> 
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src="/blog1.png" width={550} height={100} alt='730*420sized'></Image>
                    <div >
                        <h1></h1>
                        <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, molestiae voluptatem fugiat nisi dolor aliquam aliquid laudantium accusantium laboriosam totam! Quam suscipit ipsa labore excepturi praesentium repellat ut nulla fugiat.</p>

                        <div className="flex gap-4 items-center">
                            <Image className='rounded-full object-contain' width={48} height={48} alt='avetor' src="https://i.pinimg.com/736x/1b/73/c0/1b73c012f99894588b709ad8de2a7b0e.jpg" />

                            <p>Name of the poster</p>
                        </div>


                    </div>
                </div>
            </div>
            <p className='px-4 py-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo error non, esse mollitia sequi ipsam facilis placeat deserunt quo, porro obcaecati. Facere vero quibusdam nisi expedita voluptatum nesciunt quasi dignissimos culpa delectus itaque aliquam, perferendis, est, cupiditate placeat obcaecati. Distinctio itaque quisquam assumenda, quibusdam ullam error similique quia doloribus voluptatem laboriosam obcaecati ut, repellendus adipisci, deserunt quasi impedit temporibus nulla! Nobis consequuntur assumenda
                <br />
                <br />

                doloremque modi minus, placeat itaque ipsa quibusdam consequatur qui dolores, soluta ipsum tenetur officia nam, alias accusamus illum perspiciatis similique. Doloribus in inventore maiores obcaecati optio vitae quod? Quod, ratione, rerum placeat eligendi dolore cupiditate consequatur incidunt eos quidem suscipit officia. Corrupti ex blanditiis vel quo reiciendis, repellendus, ab maiores officia magni illo saepe quibusdam harum hic qui. Provident quisquam accusantium distinctio asperiores, consequatur unde eligendi perspiciatis commodi et odit nostrum enim, tempora laudantium iure, officia magnam quidem
                <br />
                <br />
                debitis! Recusandae, ratione praesentium provident consequuntur quibusdam similique necessitatibus soluta, nulla minus architecto a quaerat, explicabo impedit quas unde consectetur blanditiis quam laboriosam velit asperiores quisquam possimus doloribus. Harum pariatur minus laudantium. Praesentium excepturi ea voluptate error doloremque aspernatur, assumenda, officiis facilis obcaecati aliquam ut atque perspiciatis sequi maiores laudantium officia? Est qui eaque pariatur nemo fugit, blanditiis voluptates.</p>
        </div>



    );
};

export default BlogPost;








