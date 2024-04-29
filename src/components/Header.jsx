const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex">
        <button className="bg-white rounded-3xl px-1 flex items-center overflow-auto mr-3">
          <img src="https://i.imgur.com/1g2icIZ.png" />
          <div className="text-black text-xs font-bold italic leading-3 px-3 py-1">
            <div>CRYPTO</div>
            <div>SPHERE</div>
          </div>
        </button>
        <button className="header-btn">about us</button>
      </div>
      <div className="flex">
        <button className="header-btn flex mr-3 items-center">
          <span className="mr-2">pricing</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
        </button>
        <button className="header-btn flex items-center">
          <span className="mr-2">faqs</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
        <div className="flex flex-col mr-3">
          <div className="text-gray-300 text-xl">32k</div>
          <div className="text-gray-400 text-xs">/total users/</div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-300 text-xl">15+</div>
          <div className="text-gray-400 text-xs">/currencies/</div>
        </div>
      </div>
      <div className="flex">
        <button className=" bg-gray-950 text-sm text-gray-300 px-7 py-1 font-semibold border-gray-300 border-2 rounded-3xl hover:bg-gray-200 hover:text-gray-950 transition ease-in-out duration-200 mr-3">
          JOIN
        </button>

        <button className="flex items-center bg-white text-sm text-gray-950 px-5 py-1 font-semibold border-gray-300 border-2 rounded-3xl hover:text-gray-200 hover:bg-gray-950 transition ease-in-out duration-200 mr-3">
          <span className="mr-3">LOGIN</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export { Header };
