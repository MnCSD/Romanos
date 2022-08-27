import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center border-t border-green-600 mt-10">
      <p className="text-[12px] text-left mx-10 pt-4 text-gray-500">
        This is a marketing communication and should not be taken as investment
        advice, personal recommendation, or an offer of, or solicitation to, buy
        or sell any financial instruments. This material has been prepared
        without taking any particular recipient's investment objectives or
        financial situation into account, and has not been prepared in
        accordance with the legal and regulatory requirements to promote
        independent research. Any references to past or future performance of a
        financial instrument, index or a packaged investment product are not,
        and should not be, taken as a reliable indicator of future results.
        eToro makes no representation and assumes no liability as to the
        accuracy or completeness of the content of this publication, which has
        been prepared utilising publicly available information. Your Capital is
        at Risk Copy trading is a portfolio management service, provided by
        eToro (Europe) Ltd., which is authorised and regulated by the Cyprus
        Securities and Exchange Commission. Past performance is not an
        indication of future results. Trading history presented is less than 5
        complete years and may not suffice as a basis for investment decision.
      </p>
      <p className="text-[12px] pt-4 text-left pl-10 text-gray-500">
        © Copyright 2022 by Nikolaos Romanos Zervos
      </p>
    </div>
  );
};

export default Footer;
