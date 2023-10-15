import Image from 'next/image';


const Category = ({ params }) => {
    console.log(params);
    return (
        <div>
            <h1 className='text-[#35bdcd]'>{params.category}</h1>

            <div>
                <section className=" body-font">
                    <div className="container mx-auto flex py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="">Before they sold out
                                <br className="hidden lg:inline-block" />readymade gluten
                            </h1>
                            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                            <div className="flex justify-center">
                                <button className="inline-flex btn btn-outline">See more</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <Image src="/illust1.png" width={720} height={120} alt='illust'></Image>
                        </div>
                    </div>
                </section>

                <section className=" body-font">
                    <div className="container mx-auto flex lg:flex-row-reverse px-5 py-10 flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24  flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
                            <h1 >Before they sold out
                                <br className="hidden lg:inline-block" />readymade gluten
                            </h1>
                            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                            <div className="flex justify-center">
                                <button className="inline-flex btn btn-outline">See more</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <Image src="/illust2.png" width={720} height={120} alt='illust'></Image>
                        </div>
                    </div>
                </section>


                <section className=" body-font">
                    <div className="container mx-auto flex py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className=" ">Before they sold out
                                <br className="hidden lg:inline-block" />readymade gluten
                            </h1>
                            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                            <div className="flex justify-center">
                                <button className="inline-flex btn btn-outline">see more</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <Image src="/illust3.png" width={720} height={120} alt='illust'></Image>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Category;