import React from "react";

const Performance = () => {
  return (
    <div className="0 pt-5 flex justify-center items-center pb-4">
      <div className="flex-col justify-center items-center">
        <h1 className="text-green-600 font-bold text-2xl text-center">
          Performance
        </h1>
        <div className="text-center mt-4">
          <h1 className="text-black font-bold">
            Yearly results{" "}
            <p className="text-gray-600 font-normal">
              (only full year results) :
            </p>{" "}
          </h1>

          <div className=" flex justify-center items-center ">
            <div className="relative justify-center items-center ">
              <h1 className="w-[400px] bg-gray-500 h-[2px] mt-14 z-[0]  "></h1>
              <div className="bg-green-600 w-[100px] h-[5px] z-[999] absolute top-[54px] left-[100px]"></div>
              <div className="bg-green-600 w-[8px] h-[8px]  absolute rotate-45 top-[55px] left-[145px]"></div>
              <div className="bg-green-600 w-[8px] h-[8px]  absolute rotate-45 top-[55px] left-[300px]"></div>
              <div className="bg-green-600 w-[100px] h-[5px] z-[999] absolute top-[54px] left-[250px]"></div>
              <h1 className="text-green-600 font-medium text-[20px] absolute top-[22px] left-[125px]">
                33.1%
              </h1>
              <h1 className="text-green-600 font-medium text-[20px] absolute top-[22px] left-[275px]">
                57.58%
              </h1>
            </div>
          </div>

          <h1 className="text-center mt-10 text-lg text-gray-600">
            For more details, including my monthly performance, please see my{" "}
            {""}
            <a
              href="https://www.etoro.com/people/alenerss/stats"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 underline"
            >
              stats
            </a>
            {""} page on eToro, & my {""}
            <a
              className="text-green-600 underline"
              target="_blank"
              rel="noreferrer"
              href="https://factsheets.fundpeak.com/Report/473D3034AE5913E9109B162D8ECFD311BF9510485E716EFC632DE8B0409200697BB28C82B292020F"
            >
              fact sheet
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Performance;
