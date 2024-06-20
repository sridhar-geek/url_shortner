const StatisticsSection = () => {
  return (
    <article className="margin pb-20">
      {/* Heading */}
      <div className="flex flex-col gap-3 justify-center items-center my-20 ">
        <h1 className="font-bold text-2xl md:text-4xl">Advanced Statisics</h1>
        <p className="text-textColor text-center font-medium sm:w-96">
          Track how your links performing across the web with our advanced
          Statisics Dashboard
        </p>
      </div>
      {/* cards */}
      <div className="flex flex-col sm:flex-row gap-14 sm:gap-4 md:gap-7">
        {/*Single Card */}
        <div className="card">
          {/* Image */}
          <div className="imageHolder">
            <img src="/images/icon-brand-recognition.svg" alt="recognition" />
          </div>
          <h1 className="cardHead">Brand Recognition</h1>
          <p className="text-textColor">
            {" "}
            Boost your brand recognition with each click. Generic liks
            don&apos;t mean a thing. Branding links help instil confidence in
            your content
          </p>
        </div>
        {/*Single Card */}
        <div className="card">
          {/* Image */}
          <div className="imageHolder">
            <img src="/images/icon-detailed-records.svg" alt="recognition" />
          </div>
          <h1 className="cardHead">Detailed Records</h1>
          <p className="text-textColor">
            {" "}
            Gain inshigts into who is clicking your links. Knowledge when and
            where people engage with your content helps inform better decisions
          </p>
        </div>
        {/*Single Card */}
        <div className="card">
          {/* Image */}
          <div className="imageHolder">
            <img
              src="/images/icon-fully-customizable.svg"
              alt="customizable"
              className="w-10"
            />
          </div>
          <h1 className="cardHead ">Fully Customizable</h1>
          <p className="text-textColor">
            {" "}
            Improve branded awareness and content discoverability through
            customizable links. supercharging audience engagement.
          </p>
        </div>
      </div>
    </article>
  );
};

export default StatisticsSection;
