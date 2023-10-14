import Image from "next/image";

export default function Home() {
  console.log('this is home page');
  return <div className="md:flex items-center mx-auto justify-between px-4">

    <div className="flex-1 text-center md:text-left flex flex-col justify-center ">
      <h1 className="text-6xl logo">Better Design <br /> For Your Digital <br /> Product</h1>
      <p className="my-8 md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, similique id cumque necessitatibus nulla itaque hic sit, </p>
      <div>
        <button className="btn btn-outline w-[40%]">See our works</button>
      </div>
    </div>

    <div className="md:w-1/2 flex items-center  justify-end">
      <Image  src="/home1.png" width={800} height={20} alt="home banner"></Image>
    </div>
  </div>;
}
