import Image from "next/image";
import React from "react";
import Hands from "../assets/hands.png";
const ServiceSection = () => {
  return (
    <div>
      <div
        className="w-[full] h-[600px] object-contain flex justify-center items-center bg-no-repeat"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://import.cdn.thinkific.com/260821/2B8OhLmQpi3KnrkdNJWg_pexels-media-3740400.jpeg")`,
        }}
      >
        <p className="text-sm w-[400px] text-center text-white">
          {" "}
          | Your source of inspiration for success . Get into our world, learn
          how to make an investment and watch your life changing! | From a
          student who took this course: ' It is really insightful. A must read
          for all out there who are serious about investing and want to take it
          to the next level. As Warren Buffett said: 'price is what you pay,
          value is what you get.' Trust me this course has value way above its
          price. It essentially is going to make you money instead of taking it
          from you."
        </p>
      </div>
      <div className="flex justify-center mt-10 space-x-20">
        <h1 className="text-3xl text-black font-light ">
          Who Should Take This Course:
        </h1>

        <div className="flex flex-col space-y-2 mt-2">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h4>Beginners who want to start investing.</h4>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h4>
              Experienced investors wanting to expand their knowledge with
              different investment strategies.
            </h4>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h4>Everyone who is obsessed with wealth creation and success.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
