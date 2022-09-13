import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceSection from "../components/ServiceSection";
import client from "../sanity";

const Services = () => {
  const [email, setEmail] = useState("");

  const submitEmail = async () => {
    try {
      await client.create({
        _type: "emailCustomer",
        emailText: email,
      });
    } catch (error) {
      console.log(error);
    }

    setEmail("");
  };

  return (
    <div className="relative h-screen ">
      <Navbar />

      <h1 className="mt-8 text-xl font-semibold p-2 text-center">
        Online course
      </h1>

      <ServiceSection />

      <div className="flex justify-center items-center flex-col mt-10">
        <a
          href="http://thenewrich-school.thinkific.com"
          className=" text-md p-2 text-green-600"
          rel="noreferrer"
          target="_blank"
        >
          thenewrich-school.thinkific.com
        </a>
        <p className="text-sm p-2 ">
          Investing course to learn how market works and how you can beat it!
        </p>
        <p className="text-sm p-2 ">
          Want to learn more? {""}
          <span className="font-semibold ">Follow the link</span>
        </p>
      </div>

      <p className="text-md my-6 font-bold text-center">
        Want to learn each of my moves first hand?
      </p>

      <div className="flex justify-center items-center mt-6 space-x-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="p-2 border border-dashed border-green-600 w-[300px] focus:outline-none"
          placeholder="Enter email"
        />
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={submitEmail}
          className="px-14 duration-1000 py-4 bg-green-600 cursor-pointer rounded-full text-white font-bold hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 outline-none hover:  scale-110"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col space-y-10 justify-center items-center mt-10">
        <h1 className="text-3xl text-green-600 uppercase font-semibold">
          payment
        </h1>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-black uppercase">PAYPAL EMAIL</h2>
          <a
            href="mailto:romanoszervos@gmail.com"
            className="text-green-600 underline"
          >
            romanoszervos@gmail.com
          </a>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-black uppercase">PAYPAL MERCHANT ID</h2>
          <h2 className="text-2xl text-black uppercase">9YFANEXYMK9JY</h2>
        </div>
      </div>

      <Footer className="" />
    </div>
  );
};

export default Services;
