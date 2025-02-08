import { Suspense } from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 mb-20">
     {/* Text Area */}
      <section className="margin flex-auto flex flex-col items-center gap-2">
        <h1 className="font-bold text-5xl  xl:text-7xl">
          More than just shorten links
        </h1>
        <p className="text-textColor font-semibold my-2 ">
          Build your brand&apos;s recognition and getailed inshights on how
          your links are performing{" "}
        </p>
        <button className="navBtn block px-10 py-5 ">Get started</button>
      </section>
      {/* Image Area */}
      <Suspense fallback={<h2 className="text-3xl text-primary-dark">Loading.......</h2>}>
        <img
          src="/images/illustration-working.svg"
          alt="working"
          className="mr-[-40px] flex-auto md:w-[60%] lg:w-[80%] xl:w-[100%]"
        />
      </Suspense>
    </main>
  );
};

export default HeroSection;
