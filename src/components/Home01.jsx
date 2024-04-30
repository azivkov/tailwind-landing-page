const Home01 = () => {
  return (
    <div>
      <div className="md:flex md:justify-between px-4 mt-10">
        <div className="md:flex">
          <button className="home-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div className="italic">quant (qnt)</div>
          </button>
          <button className="home-btn">
            <img
              src="https://i.imgur.com/Ioj1sYB.png"
              className="w-10 h-10 bg-gray-400 rounded-full mr-2"
            />
            <div className="italic">ethereum (eth)</div>
          </button>
        </div>
        <div className="md:flex">
          <button className="home-btn">
            <img
              src="https://i.imgur.com/eh08RQ3.png"
              className="w-10 h-10 bg-gray-400 rounded-full mr-2"
            />
            <div className="italic">xrp (xrp)</div>
          </button>
          <button className="home-btn">
            <img
              src="https://i.imgur.com/p0r8Pqq.png"
              className="w-10 h-10 bg-gray-400 rounded-full mr-2"
            />
            <div className="italic">polygon (matic)</div>
          </button>
        </div>
        <div>
          <button className="home-btn">
            <span className="bg-white text-gray-950 p-3 rounded-3xl mr-2">
              15+
            </span>
            /currencies/
          </button>
        </div>
      </div>
      <div className="sm:flex mt-28">
        <div className="sm:w-1/3 font-semibold">
          <span className="italic font-normal">(01)</span> more about <br /> our
          platform
        </div>
        <div className="sm:w-1/2 text-xl sm:text-4xl text-gray-400 leading-12">
          Our platform is designed to{" "}
          <span className="text-white">
            be{" "}
            <span className="italic font-semibold">
              user-friendly, secure and reliable,
            </span>
          </span>{" "}
          making it the perfect place to{" "}
          <span className="text-white italic font-semibold">buy, sell, </span>{" "}
          and{" "}
          <span className="text-white italic font-semibold">
            trade cryptocurrencies.
          </span>
          <button className="home-btn text-sm mt-7 font-bold">
            READ MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 bg-white text-black rounded-full p-2 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Home01 };
