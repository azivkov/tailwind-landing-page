import { useEffect, useState } from "react";
import { CarouselImages } from "./CarouselImages";

const HomeBanner = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [imgCarousel, setImgCarousel] = useState(CarouselImages[0].url);

  useEffect(() => {
    setImgCarousel(CarouselImages[sliderIndex].url);
    console.log(imgCarousel);
  }, [sliderIndex]);

  return (
    <div className="flex py-7">
      <div className="w-7/12 mr-5">
        <div className="flex">
          <div className="mr-3 bg-extraGray rounded-3xl p-7">
            <div className="bg-gray-950 rounded-3xl p-5">
              <div className="flex items-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 mr-5 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
                <span className="text-white mr-2 text-5xl">32k</span>
                <span className="text-gray-400 self-start">/total users/</span>
              </div>
            </div>
            <div className="mt-5 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" w-20 h-20 p-5 mr-5 bg-gray-950 rounded-3xl"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
              <div className="mr-5">
                <div className="text-white mr-2 text-5xl">15+</div>
                <div className="text-gray-400">/currencies/</div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-16 h-16 bg-gray-400 text-gray-950 rounded-full p-5 cursor-pointer hover:bg-gray-950 hover:text-gray-400 transition ease-in-out duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="border border-gray-400 rounded-3xl flex justify-between items-center overflow-auto">
            <div className="flex flex-col p-8 w-1/2">
              <div className="border-2 border-gray-400 rounded-3xl text-gray-400 px-3 py-2 flex items-center self-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-sm font-bold">4m 35s</span>
              </div>
              <div className="text-white text-2xl mt-3 ">Watch demo video</div>
              <div className="text-gray-300 text-md mt-3 leading-4">
                watch how to use the platform
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/iCMgnuU.png"
                className=" max-w-100 rounded-3xl opacity-75"
              />
              <div className="text-gray-950 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 bg-gray-400 rounded-full p-2 absolute top-24 left-24 opacity-50 hover:bg-gray-950 hover:text-gray-400 hover:border hover:border-gray-400 transition ease-in-out duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex">
            <div className="text-7xl mr-10 text-semibold">Experience</div>
            <div className="flex items-end relative">
              <div>
                <img
                  src="https://i.imgur.com/Ioj1sYB.png"
                  className="bg-gray-400 rounded-full max-w-12 absolute top-6"
                />
              </div>
              <div>
                <img
                  src="https://i.imgur.com/eiN51e2.jpeg"
                  className=" max-w-12 rounded-full absolute top-6 left-8"
                />
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 border-2 rounded-full cursor-pointer p-2 bg-gray-200 text-black absolute top-6 left-16 hover:text-gray-200 hover:bg-gray-950 transition ease-in-out duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="ml-32 text-gray-400 text-sm font-semibold">
                Welcome to our <br /> cryptocurrency platform!
              </div>
            </div>
          </div>
          <div className="text-7xl mt-4">
            <span className="text-8xl font-cormorant italic">the future </span>
            of finance.
          </div>
          <div className="flex justify-between">
            <div className="text-gray-400 mt-5 text-2xl font-semibold">
              Join our platform today and start <br /> exploring the
              <span className="text-gray-200"> world of cryptocurrencies.</span>
            </div>
            <div className="flex self-end">
              <button className="flex items-center bg-white text-sm text-gray-950 px-10 py-1 font-bold border-gray-300 border-2 rounded-3xl hover:text-gray-200 hover:bg-gray-950 transition ease-in-out duration-200">
                START NOW
              </button>
              <button className="flex items-center bg-white text-sm text-gray-950 p-2 font-bold border-gray-300 border-2 rounded-full hover:text-gray-200 hover:bg-gray-950 transition ease-in-out duration-200 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
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
      </div>
      <div className="w-5/12">
        <div
          className="bg-cover max-w-full h-full rounded-3xl flex flex-col justify-between"
          style={{ backgroundImage: `url(${imgCarousel})` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 m-5 bg-gray-300 rounded-full bg-opacity-50 text-gray-950 hover:bg-gray-950 hover:text-gray-300 transition ease-in-out duration-300 cursor-pointer self-end"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <div>
            {CarouselImages.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setSliderIndex(index)}
                  className={`${
                    index === sliderIndex
                      ? "bg-gray-800 bg-opacity-80"
                      : "bg-gray-200 bg-opacity-50"
                  } w-10 h-10 rounded-full self-start my-3 ml-3 pl-5 cursor-pointer hover:bg-gray-600 transition ease-in-out duration-300 border-4`}
                ></div>
              );
            })}
          </div>
          <div className="bg-gray-900 bg-opacity-50 rounded-3xl grid grid-cols-3 px-5 py-5">
            <div className="col-span-1 text-4xl font-semibold border-r text-white px-5 py-2">
              join our platform
            </div>
            <div className="col-span-1 text-xl font-semibold self-center px-8">
              & learn how to start
            </div>
            <div className="col-span-1 relative">
              <div>
                <img
                  src="https://i.imgur.com/Ioj1sYB.png"
                  className="bg-gray-400 rounded-full max-w-16 absolute top-6"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-16 h-16 rounded-full bg-gray-300 p-5 text-black absolute top-6 left-10 cursor-pointer hover:bg-gray-950 hover:text-gray-300 hover:border transition ease-in-out duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeBanner };
