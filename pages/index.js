import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import DeskImg from "../assets/desk.jpg";
import ProfilePic from "../assets/romanos.jpg";
import Strategy from "../components/Strategy";
import Performance from "../components/Performance";
import AmountPic from "../assets/amount.png";
import Profile from "../assets/profile.png";
import Footer from "../components/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="relative flex">
        <img
          src="https://img.freepik.com/premium-photo/modern-stylish-workspace-mock-up-with-desk-office-supplies-white-background-copy-space_44943-1783.jpg?w=826"
          alt=""
          className="w-full md:h-[600px] md:object-cover md:w-full animate-fadein "
        />
        <div className="absolute top-8 md:top-20  lg:top-[200px] lg:ml-14 xl:ml-[200px] animate-fadein">
          <p className="text-sm mx-2 text-gray-600 italic md:text-lg lg:w-[500px] xl:text-2xl">
            “Aya Laraya said: when you invest you are buying a day that you
            don’t have to work. My goal is to make people financially
            independent, so they can follow their dreams. ”
          </p>
          <div className="absolute w-[40px] h-[2px] bg-green-500 ml-2 mt-6 md:mt-10 animate-fadein"></div>
          <div className="mt-10 ml-2 md:mt-16 animate-fadein">
            <p className="text-sm font-medium md:text-lg xl:text-xl">
              Nikolaos Romanos Zervos
            </p>
            <p className="text-sm font-medium md:text-lg xl:text-xl">
              Alphamale7
            </p>
            <p className="text-sm font-light mt-2 text-gray-600 md:text-lg xl:text-xl">
              eToro Popular Investor
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col pb-10">
        <div className="flex justify-center items-center mt-10">
          <img
            src="https://i.ibb.co/d7YNyqP/IMG-20220726-162543-156.jpg"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          />
        </div>

        <div className="flex-col flex items-center justify-center mt-4">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-green-600 font-semibold pb-2 ">Location:</h1>
            <h1 className="text-gray-600 text-[15px]">Athens, Greece</h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-green-600 font-semibold pb-2">
              Investment Experience:
            </h1>
            <h1 className="text-gray-600 text-[15px] text-center mx-10">
              Over 3 years of investing experience with more than 30% annual
              returns.
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-green-600 font-semibold pb-2">
              Personal Notes:
            </h1>
            <h1 className="text-gray-600 text-[15px] text-center mx-10">
              Warren Buffett said: If you don’t find a way to make money while
              you sleep you will work until you die. I enjoy life so much that I
              figured out ways to compound my wealth so I can become financially
              independent and retire early. I was always fascinated about
              finding the most efficient ways to do things in every aspect of my
              life and I quickly became obsessed with studying about wealth
              creation and investing principles.
            </h1>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          backgroundImage: `url(${StocksPic.src})`,
          width: "100%",
        }}
        className="h-[400px] lg:h-[500px] flex justify-center items-center my-10"
      >
        <p className="uppercase font-semibold text-white text-3xl lg:text-6xl">
          World class investments
        </p>
      </div> */}

      <Strategy />

      <Performance />

      <div className="flex flex-col justify-center items-center mt-4 pb-8">
        <h1 className="text-green-600 font-bold text-2xl"> Why me?</h1>
        <div className="flex flex-col justify-center items-center lg:flex-row  lg:items-center">
          <div className="flex flex-col space-y-8 mt-2 lg:flex-[3] lg:pt-10">
            <p className="text-center mx-8 text-gray-700 pt-4">
              I have managed to grow AUM at very high speed as people appreciate
              my work the potential of this portfolio.
            </p>
            <p className="text-center mx-8 text-gray-700 ">
              I have a unique strategy that you won't find in any other trader
            </p>
            <p className="text-center mx-8 text-gray-700 ">
              I only invest in an evidence based way with strict rules and
              models, to eliminate investing biases that lead to investment
              mistakes.
            </p>
            <p className="text-center mx-8 text-gray-700 ">
              78% of retail investors lose money so you want to partner up with
              a highly profitable investor
            </p>
            <p className="text-center mx-8 text-gray-700 ">
              I beat the market making more money in bull runs and losing less
              money in bear markets
            </p>
            <p className="text-center mx-8 text-gray-700 ">
              I discuss every move making posts on Etoro’s feed so you know
              where you put your money in
            </p>
          </div>
          <div className="mt-4 flex space-x-4 lg:flex-[1.8] lg:items-center lg:justify-center lg:space-x-8 lg:pl-20">
            <a href="https://www.google.com" target="_blank" className="">
              <button className="w-10 h-10 rounded-md border border-dashed border-green-600 lg:w-14 lg:h-14"></button>
            </a>
            <a href="https://www.google.com" target="_blank" className="">
              <button className="w-10 h-10 rounded-md border border-dashed border-green-600 lg:w-14 lg:h-14"></button>
            </a>
            <a href="https://www.google.com" target="_blank" className="">
              <button className="w-10 h-10 rounded-md border border-dashed border-green-600 lg:w-14 lg:h-14"></button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center relative mt-4 pb-6">
        <h1 className="text-green-600 font-bold text-2xl text-center">
          How to Get Started?
        </h1>
        <div className="xl:flex xl:flex-row">
          <div className="mt-10 flex items-center justify-center xl:flex-[3] xl:pr-[200px]">
            <ul className="flex items-center justify-center ml-4">
              <div className="flex flex-col space-y-4 items-start ml-20 xl:ml-10">
                <div className="flex items-center space-x-3">
                  <div className="border-green-600 border  px-1 rounded-full flex justify-center items-center">
                    <p className="text-xs text-green-600">1</p>
                  </div>
                  <p>
                    REGISTER using the link below: {""}
                    <a href="https://etoro.tw/2X2YMre" className="underline">
                      {" "}
                      https://etoro.tw/2X2YMre
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="border-green-600 border  px-1 rounded-full flex justify-center items-center">
                    <p className="text-xs text-green-600">2</p>
                  </div>
                  <button className="bg-green-600 uppercase p-3 font-bold px-6">
                    invest with me
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="border-green-600 border px-1 rounded-full flex justify-center items-center">
                    <p className="text-xs text-green-600">3</p>
                  </div>
                  <div>
                    <h1 className="uppercase text-green-600 text-lg">
                      Sign up
                    </h1>
                    <p>
                      Get account verified (will need ID, and proof of address
                      documents)
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="border-green-600 border  px-1 rounded-full flex justify-center items-center">
                    <p className="text-xs text-green-600">4</p>
                  </div>
                  <div>
                    <h1 className="uppercase text-green-600 text-lg">
                      copy me
                    </h1>
                    <p>
                      Go to my {""}
                      <a
                        href="https://www.etoro.com/people/popularinvestors
                    "
                        className="underline"
                      >
                        profile
                      </a>
                      {""} and click “copy” on the top right side
                    </p>
                  </div>
                </div>
                <p className="text-sm mx-10 ml-9 text-left">
                  I suggest copying with at least $500, for a 2-3 year period at
                  least and to copy open trades
                </p>
              </div>
            </ul>
          </div>
          <div className="mt-8 hidden xl:inline xl:flex-[1]">
            <img
              src="https://i.ibb.co/Z1f2M38/amount.png"
              width="200"
              height="200"
              className="absolute top-[230px] border border-gray-700 rounded-md ml-10 z-[999] shadow-2xl"
            />

            <img
              src="https://i.ibb.co/wCK63y1/profile.png"
              width="380"
              height="300"
              className=" absolute top-18 border border-gray-700 rounded-md"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}