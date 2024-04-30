import { useEffect, useState } from "react";
import { CarouselImages } from "../data/CarouselImages";

const BannerRight = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [imgCarousel, setImgCarousel] = useState(CarouselImages[0].url);

  useEffect(() => {
    setImgCarousel(CarouselImages[sliderIndex].url);
    // console.log(imgCarousel);
  }, [sliderIndex]);

  return (
    <div className="md:w-5/12">
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
                } w-8 h-8 rounded-full self-start my-3 ml-3 pl-5 cursor-pointer hover:bg-gray-600 transition ease-in-out duration-300 border-4`}
              ></div>
            );
          })}
        </div>
        <div className="bg-gray-900 bg-opacity-50 rounded-3xl grid grid-cols-1 sm:grid-cols-3 px-5 py-5">
          <div className="col-span-1 text-4xl font-semibold border-r text-white px-5 py-2">
            join our platform
          </div>
          <div className="col-span-1 text-md font-semibold self-center px-8">
            & learn how to start
          </div>
          <div className="hidden col-span-1 relative sm:flex">
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
  );
};

export { BannerRight };
