import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div className="relative h-screen ">
      <Navbar />

      <div>
        <h1 className="mt-8 text-xl font-semibold p-2">Online course</h1>
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

      <div className="absolute bottom-0 pb-4">
        <Footer className="" />
      </div>
    </div>
  );
};

export default Services;
