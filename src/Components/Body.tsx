import React from "react";
import logo1 from "../images/client-databiz.svg";
import logo2 from "../images/client-audiophile.svg";
import logo3 from "../images/client-maker.svg";
import logo4 from "../images/client-meet.svg";
type Props = {};

const Body = (props: Props) => {
  const Logos = [logo1, logo2, logo3, logo4];
  return (
    <section className='space-y-8 items-center mb-4 flex flex-col lg:pt-[5rem]   lg:flex-row-reverse lg:absolute top-0 bottom-0 left-0 right-0 lg:m-auto lg:items-center lg:justify-center lg:pl-16 lg:gap-2'>
      <div className='bg-heroImageMobile  lg:bg-heroImageDesktop h-[370px] w-full bg-cover bg-no-repeat  bg-center lg:bg-contain lg:bg-no-repeat lg:w-[30%] flex-shrink-0 lg:h-full'></div>
      <div className='px-4 lg:w-1/2 space-y-10 text-center lg:text-left lg:px-0 lg:space-y-10'>
        <h1 className='text-3xl lg:flex lg:flex-col  lg:text-[5vw]  text-almostBlack font-bold'>
          {" "}
          Make <span className='lg:pt-[0.5em]'>remote work</span>
        </h1>
        <p className='text-mediumGray max-w-md place-self-center text-[18px] lg:text-[1vw] lg:pr-[7rem] font-medium'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button
          className='
          transition-all
          duration-200
          ease-in-out
        hover:bg-almostWhite
        hover:text-almostBlack
        hover:ring-almostBlack
        hover:ring-2
        px-4 bg-almostBlack text-almostWhite py-2 mb-4 rounded-xl'>
          Learn more
        </button>
        <div className='flex my-4 justify-between lg:justify-start lg:space-x-12'>
          {Logos.map((logo) => {
            return (
              <img
                key={logo}
                className='w-14 object-contain'
                src={logo}
                alt='logo'
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Body;
