import Image from "next/image";
import Link from "next/link";


const About = () => {
    return (
        <div>
            {/* upper image side */}
            <div className="top-0">
                <Image className=" px-4 top-0 " src='/about.png' width={1360} height={250} alt="about"></Image>
                <div className="md:relative z-10 bottom-24 left-10  py-2 md:text-white px-4 md:bg-[#047096] w-[100%] md:w-[40%]">
                    <h2 className="text-3xl">Digital Storytellers</h2 >
                    <h3>Handcrafting award winning digital experinece</h3>
                </div>
            </div>

            {/* divided section */}
            <div className="md:flex justify-center gap-20 pb-20 px-4"> 
            {/* who are we */}
            <div className="flex-1">
                <h1 className="logo">who are we?</h1> 

                <p className="my-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aliquid labore alias facere nesciunt, iusto non similique iure eos quia corrupti? Ex explicabo deserunt delectus ea totam eligendi, cumque, numquam quam recusandae quo, tempore magnam. Et eum explicabo tempore voluptatibus veritatis consequatur illo maxime! Dolorum, repellendus ab dicta, ratione adipisci 
                <br />
                <br />
                facere molestias officia autem aliquid ullam doloribus suscipit! Temporibus maxime ea corrupti quos tenetur nesciunt voluptatem ipsum, necessitatibus iste fuga saepe provident nobis ducimus optio exercitationem ipsa expedita labore eius 
                <br /> 
                <br /> 
                perspiciatis officia voluptates nemo. Natus voluptatem nostrum necessitatibus accusamus illum, vel sint quos ipsa est perferendis! A exercitationem modi qui!</p>
            </div>
            {/* who are we */}
            <div className="flex-1">
                <h1 className="logo">who are we?</h1> 

                <p className="my-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aliquid labore alias facere nesciunt, iusto non similique iure eos quia corrupti? Ex explicabo deserunt delectus ea totam eligendi, cumque, numquam quam recusandae quo, tempore magnam. Et eum explicabo tempore voluptatibus veritatis consequatur illo maxime! Dolorum, repellendus ab dicta, ratione adipisci facere molestias 
                <br /> 
                <br /> 
                -suscipit! Temporibus maxime ea corrupti quos tenetur nesciunt 
                <br />
                <br />
                -suscipit! Temporibus maxime ea corrupti quos tenetur nesciunt 
                <br />
                <br />
                -suscipit! Temporibus maxime ea corrupti quos tenetur nesciunt 
                <br />
                </p> 

               <Link href='/contact'> <button className="btn btn-outline">Contact</button></Link>
            </div>

            </div>
        </div>
    );
};

export default About;