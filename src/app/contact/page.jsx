"use client"
import Image from "next/image";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div> 
            <h1 className="text-center logo my-10">Lets Keep in Touch</h1>
            <div className="md:flex items-center mb-20">
                <div className="md:w-1/2 flex justify-center">
                    <Image className="animation" src="/contact.png" width={400} height={600} alt="contact"></Image>
                </div>

                <div className="flex-1">
                    <form className="flex  p-4 flex-col gap-4 mx-auto " onSubmit={handleSubmit(onSubmit)}>
                        <input className="input md:w-[60%] input-bordered border-black" type="text" placeholder="Name" {...register("name", { required: true })} />

                        <input className="input md:w-[60%] input-bordered border-black" type="text" placeholder="Email" {...register("email", { required: true })} />

                        <textarea className="textarea textarea-lg md:w-[60%] textarea-bordered border-black" type="text" placeholder="Your Message" {...register("message", { required: true })} />

                        <div className="w-full md:w-[50%] ">
                            <button className="btn btn-outline w-[50%]" type="submit">send</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;






