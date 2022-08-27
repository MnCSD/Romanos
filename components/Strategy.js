import React from "react";

const Strategy = () => {
  return (
    <div className="0 pt-2 flex justify-center items-center pb-4">
      <div className="flex-col justify-center items-center">
        <h1 className="text-green-600 font-bold text-2xl text-center">
          My Strategy
        </h1>
        <div className="flex-col justify-center items-center space-y-1 mt-4">
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
            <h1 className="text-black font-semibold">Strategy type:</h1>
          </div>

          <h1 className="text-gray-600 text-center">
            I’m a quantitative value investor
          </h1>
        </div>

        <div className="flex-col justify-center items-center space-y-1 mt-4">
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
            <h1 className="text-black font-semibold">Investment method:</h1>
          </div>

          <h1 className="text-gray-600 text-center mx-10">
            Fundamental and quantitative analysis. Evidence based investing.
          </h1>
        </div>

        <div className="flex-col justify-center items-center space-y-1 mt-4">
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
            <h1 className="text-black font-semibold">Asset Class:</h1>
          </div>

          <h1 className="text-gray-600 text-center mx-10">Equities</h1>
        </div>

        <div className="flex-col justify-center items-center space-y-1 mt-4">
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
            <h1 className="text-black font-semibold">Geographic focus:</h1>
          </div>

          <h1 className="text-gray-600 text-center mx-10">US</h1>
        </div>

        <div className="flex-col justify-center items-center space-y-1 mt-4">
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
            <h1 className="text-black font-semibold">Investment period:</h1>
          </div>

          <h1 className="text-gray-600 text-center mx-10">Long-term</h1>
        </div>

        <div className="flex-col justify-center items-center space-y-1 mt-4">
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
            <h1 className="text-black font-semibold">
              Investment thesis/mandate:
            </h1>
          </div>

          <h1 className="text-gray-600 text-center mx-10">
            I invest in stocks based on attributes that are associated with
            higher returns, like value stocks and small cap stocks. I invest in
            stocks with low PE ratios
            {"(<10)"}, low PEG ratios {"(<1)"}, low PB ratios {"(<1)"}. I then
            apply a quality filter and include only companies with low debt,
            with positive net margins, positive return on invested capital and
            high expected 5 year earnings growth. I also use different market
            timing models as well as portfolio optimization strategies based on
            the Kelly criterion and the Sortino ratio.
          </h1>
        </div>

        <div className="flex-col justify-center items-center space-y-1 mt-4">
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
            <h1 className="text-black font-semibold">Investment tools:</h1>
          </div>

          <h1 className="text-gray-600 text-center mx-10">
            I currently use Finviz stock screener, Guru Focus, and Portfolio
            visualizer to do quantitative analysis on the positions in my
            portfolio.
          </h1>
        </div>

        <div className="flex-col justify-center items-center space-y-1 mt-4">
          <div className="flex justify-center items-center mt-4 space-x-2">
            <div className="w-[6px] h-[6px] rounded-full bg-green-600"></div>
            <h1 className="text-black font-semibold">Influencers:</h1>
          </div>

          <h1 className="text-gray-600 text-center mx-10">
            I am inspired by the investment philosophy of Eugene Fama and
            Kenneth French.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
