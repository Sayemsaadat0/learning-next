import Image from "next/image";

export default function Home() {
  console.log('this is home page');
  return <div>
    <Image width={500} height={50} src="/home.png" alt=""></Image>
  </div>;
}
