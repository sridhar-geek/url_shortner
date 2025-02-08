const cards = [
  {
    id: 1,
    image: "/images/icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branding links help instil confidence in your content",
  },
  {
    id: 2,
    image: "/images/icon-detailed-records.svg",
    title: "Detailed Records",
    description:
      "Gain inshigts into who is clicking your links. Knowledge when and where people engage with your content helps inform better decisions",
  },
  {
    id: 3,
    image: "/images/icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Improve branded awareness and content discoverability through customizable links. supercharging audience engagement.",
  },
];


const StatisticsSection = () => {
  return (
    <article className="margin pb-20">
      <div className="flex flex-col gap-3 justify-center items-center my-20">
        <h1 className="font-bold text-2xl md:text-4xl">Advanced Statisics</h1>
        <p className="text-textColor text-center font-medium sm:w-96">
          Track how your links performing across the web with our advanced
          Statisics Dashboard
        </p>
      </div>
{/* Cards */}
      <div className="flex flex-col sm:flex-row gap-14 sm:gap-4 md:gap-7 relative">
        {/* Connecting line between cards */}
        <div className="absolute top-1/2 left-1/2 w-2 sm:w-full h-full sm:h-2 bg-primary-dark transform -translate-x-1/2 -translate-y-1/2 sm:translate-y-0" />

        {cards.map((card, index) => (
          <div
            key={card.id}
            className="card relative bg-white z-10"
            style={{ marginTop: `${index * 2}rem` }}
          >
            <div className="imageHolder sm:left-8 sm:transform-none">
              <img src={card.image} alt={card.title} className="w-10" />
            </div>
            <h1 className="cardHead">{card.title}</h1>
            <p className="text-textColor">{card.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default StatisticsSection;
