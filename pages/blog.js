import React from "react";
import Navbar from "../components/Navbar";
import StocksPic from "../assets/stocks.png";
import PerformancePic from "../assets/performance2.png";
import ProsCons from "../assets/pc.png";
import ProsCons2 from "../assets/pc2.png";
import ProsCons3 from "../assets/pc3.png";
import Romanos from "../assets/romanos.jpg";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center mt-4 flex-col space-y-4 mx-10">
        <h1 className="text-4xl text-black font-semibold">
          Social and Copy Trading is the Future of Investing
        </h1>
        <h4 className="text-left">
          Can you achieve significant returns without the need for comprehensive
          research? By using social and copy trading on eToro it is possible. I
          have been professionally trading for three years and have seen success
          every year, and even this year when the S&amp;P500 is down over 17%,
          YTD my eToro portfolio (Alphamale7 or Nikolaos Zervos) with over 200
          followers, is up over 6% (semi-annual performance).
        </h4>
        <Image
          src={StocksPic}
          style={{ marginTop: "10px" }}
          width={500}
          height={350}
          objectFit="contain"
        />
        <Image
          src={PerformancePic}
          style={{ marginTop: "10px" }}
          width={500}
          height={350}
          objectFit="contain"
        />
        <p>
          For more details, including my monthly performance, please see my
          <a
            href="https://www.etoro.com/people/alenerss/stats"
            className="underline text-green-600"
          >
            {" "}
            stats{" "}
          </a>
          page on eToro, &amp; my
          <a
            className="underline text-green-600"
            href="https://factsheets.fundpeak.com/Report/473D3034AE5913E9109B162D8ECFD311BF9510485E716EFC632DE8B0409200697BB28C82B292020F"
          >
            {" "}
            fact{" "}
          </a>
          sheet .
        </p>
        <h1 className="text-3xl text-[#2F5396] font-semibold">
          Social and Copy Trading
        </h1>
        <h4>
          eToro is the most well-known site for these investing strategies that
          involve the observation of other traders. These two methods do have
          similarities but are not the same. I'll explain how using them
          investing has changed from an active to a passive endeavor and how by
          using them non-professional traders can have the edge.
        </h4>
        <h1 className="text-3xl text-[#2F5396] font-semibold">
          What is Social Trading
        </h1>
        <h4>
          Social trading is a feature that was developed by eToro that combines
          investing with social media, allowing the users to track the moves of
          other traders. They can see the performance of a trader, get
          notifications if that trader makes a move, and they can also
          communicate with different traders on the platform. The idea is that
          eToro's users are collaborating as a community. There are areas where
          users can post messages and talk about their strategies. Many eToro
          investors will discuss stocks and crypto.
        </h4>
        <p className="text-gray-600">Pros and Cons of Social Trading</p>
        <Image
          src={ProsCons}
          style={{ marginTop: "10px" }}
          width={650}
          height={200}
          objectFit="contain"
        />

        <h1 className="text-3xl text-[#2F5396] font-semibold">
          What is Copy Trading?
        </h1>
        <h4>
          Copy trading takes social trading to the next level, allowing users to
          “Copy” the trades of other platform investors. Social trading lets you
          see the trades that other investors make but Copy trading allows you
          to make the same trades that other users make. If they are buying,
          then your account automatically buys, and if they sell, you
          automatically sell. Copy trading allows you to be more hands-off than
          social trading, following a professional trader that is ranked by
          eToro. You can see their risk score and the success of their
          historical trades. This is like having a top trader work for you
          without paying a management fee, leaving the heavy lifting of
          researching a good trade all to them. Copy trading allows you to trade
          beyond your expertise, but you must find the right trader to copy
          because you take on the risk of their trades. If you choose this route
          for your investing, you should set loss limits and monitor your
          account regularly, even if you are not doing the trading yourself.
        </h4>
        <p className="text-gray-600">Pros and Cons of Copy Trading</p>
        <Image
          src={ProsCons2}
          style={{ marginTop: "10px" }}
          width={650}
          height={200}
          objectFit="contain"
        />
        <Image
          src={ProsCons3}
          style={{ marginTop: "10px" }}
          width={650}
          height={200}
          objectFit="contain"
        />
        <h1 className="text-3xl text-[#2F5396] font-semibold">
          Choosing Your Best Strategy
        </h1>
        <h4>
          At its core, Social trading means you make the decisions and is ideal
          for anyone who wants control. The learning curve is steeper, but you
          can choose your risk level and are ultimately responsible for
          investing. You can learn from the community and learn by doing, if you
          want to develop trading skills or you already have them, and you want
          to share them with others, then this is the pathway to take
        </h4>
        <h4 className="mt-4">
          Copy trading is great if you want a hands-off approach but still wish
          to get the heavy lifting done by another trader fee-free. Beginners
          and busy investors who don't care about improving their trading skills
          and want to leave the decision-making up to someone else will find
          success choosing this route.
        </h4>

        <h1 className="text-3xl text-[#2F5396] font-semibold">
          The Success of Copy Trading
        </h1>
        <h4>
          Copy trading can be very profitable, but copy trading has the same
          risks as all trading. There are no guarantees of future returns
          because no trader can predict the future, but successful traders with
          experience are more likely to make better decisions than inexperienced
          traders. This is where the commoditization of the market comes in.
          With copy trading, the novice trader can have access to experts that
          were once only possible by the wealthy buying into a hedge fund. And
          they can see their performance on an ongoing basis.
        </h4>
        <h4 className="mt-4">
          With copy trading, eToro incentivizes the success of the traders on
          the platform who perform well and gain more followers. The traders
          with the best track records will attract more followers, so they want
          to perform well.
        </h4>
        <h4 className="mt-4 text-left">
          With all types of trading, it is hard to beat the market. There are
          traders who can consistently outperform the market, but it is not easy
          to do, and there is always risk of loss. The more risk traders take
          on, the more they can gain but the more they can lose; copying a
          high-risk trader is more like gambling. Finding a risk-reward balance
          is the key to success; you may want to follow a trader with less
          exciting returns, but they also have a lower risk score so that you
          have a positive long-term experience.
        </h4>
        <h5 className="mt-4">
          Feel free to review my performance and see if I am the right trader
          for you to copy.
        </h5>
        <Image src={Romanos} width={200} height={300} objectFit="contain" />
        <p>Nikolaos Zervos (Alphamale7)</p>
        <p>
          My monthly performance can be found on my eToro
          <a
            href="https://www.etoro.com/people/alenerss/stats"
            className="underline text-green-600"
          >
            {" "}
            stats{" "}
          </a>
          page &amp; my
          <a
            className="underline text-green-600"
            href="https://factsheets.fundpeak.com/Report/473D3034AE5913E9109B162D8ECFD311BF9510485E716EFC632DE8B0409200697BB28C82B292020F"
          >
            {" "}
            fact sheet.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Blog;
