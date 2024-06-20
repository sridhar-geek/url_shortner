import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import StatisticsSection from "./Components/StatisticsSection";
import UrlSection from "./Components/UrlSection";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <div className="bg-categoryBg">
        <UrlSection />
        <StatisticsSection />
      </div>
      {/* Boost Section */}
      <section className="bg-backgroundColor bg-[url('images/bg-boost-mobile.svg')] md:bg-[url('images/bg-boost-desktop.svg')] bg-origin-content bg-no-repeat bg-center bg-cover md:bg-auto  py-16 ">
        <div className="flex flex-col justify-center text-center gap-5">
          <h3 className="text-white font-bold text-2xl md:text-4xl">
            {" "}
            Boost your links today
          </h3>
          <button className="navBtn block mx-auto">Get Started</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
