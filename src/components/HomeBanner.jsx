import { BannerLeft } from "./BannerLeft";
import { BannerRight } from "./BannerRight";

const HomeBanner = () => {
  return (
    <div className="md:flex py-7">
      <BannerLeft />
      <BannerRight />
    </div>
  );
};

export { HomeBanner };
