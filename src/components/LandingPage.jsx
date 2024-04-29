import { Header } from "./Header";
import { MainContent } from "./MainContent";

const LandingPage = () => {
  return (
    <div className="bg-gray-950 text-white px-10 py-10 font-montserrat">
      <Header />
      <MainContent />
    </div>
  );
};

export { LandingPage };
