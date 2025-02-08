import { useRef, useEffect, useState } from "react";

const UrlComponent = () => {
  const inputRef = useRef();
  const [shortUrls, setShortUrls] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [error, setError] = useState(false); // Add error state

  // Load shortUrls from sessionStorage on mount
  useEffect(() => {
    const savedUrls = JSON.parse(sessionStorage.getItem("shortUrls")) || [];
    setShortUrls(savedUrls);
  }, []);

  //  calling api
  const shortenUrl = async (url) => {
    try {
      const response = await fetch("https://api.tinyurl.com/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TinyUrl_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.log("Request failed:", error.message);
    }
  };

  //  handling submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlValue = inputRef.current.value.trim();

    if (!urlValue) {
      setError(true);
      return;
    }

    setError(false);
    const data = await shortenUrl(urlValue);

    if (data && data.data) {
      const newShortUrl = [data.data.url, data.data.tiny_url];
      const updatedShortUrls = [...shortUrls, newShortUrl];

      setShortUrls(updatedShortUrls);
      sessionStorage.setItem("shortUrls", JSON.stringify(updatedShortUrls));
      inputRef.current.value = "";
    }
  };

  const handleCopy = (index) => {
    const urlToCopy = shortUrls[index][1];
    navigator.clipboard.writeText(urlToCopy);
    setCopiedIndex(index);

    // Reset copied status after 4 seconds
    setTimeout(() => setCopiedIndex(null), 4000);
  };

  return (
    <section>
      <div className="margin p-5 mb-6 bg-backgroundColor rounded-md bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-no-repeat">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-5 w-full"
        >
          <div className="w-full md:w-3/4">
            <input
              type="url"
              placeholder="Shorten a link here"
              className={`p-4 rounded-lg w-full ${
                error ? "border-2 border-red-500 placeholder-red-500" : ""
              }`}
              ref={inputRef}
              onChange={() => setError(false)}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">
                Please add a valid link
              </p>
            )}
          </div>
          <button
            type="submit"
            className="navBtn block p-4 rounded-xl w-full md:w-1/4"
          >
            Shorten it!
          </button>
        </form>
      </div>
      {/* Render the shortUrls */}
      <div className="mt-6 margin">
        {shortUrls.length > 0 &&
          shortUrls.map((shortUrl, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between p-4 rounded-md bg-white mt-4"
            >
              <p className="text-black font-semibold">{shortUrl[0]}</p>
              <div className="border border-opacity-20 border-gray-700 w-full mt-2 mb-4 md:mt-0 md:mb-0 md:hidden"></div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-primary-dark font-semibold">{shortUrl[1]}</p>
                <button
                  className={`p-2 rounded-md block w-full md:w-auto ${
                    copiedIndex === index ? "bg-[#3a3053] text-white" : "navBtn"
                  }`}
                  onClick={() => handleCopy(index)}
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default UrlComponent;
