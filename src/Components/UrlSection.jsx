const UrlComponent = () => {
  return (
    <div className="margin p-5 mb-6 bg-backgroundColor rounded-md bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-no-repeat flex flex-col justify-center items-center md:flex-row gap-5">
      <input
        type="text"
        placeholder="Shorten a link here"
        className="p-4 rounded-lg w-full md:w-3/4"
      />
      <button className="navBtn block p-4 rounded-xl w-full md:w-1/4">
        Shorten it!
      </button>
    </div>
  );
};

export default UrlComponent;
