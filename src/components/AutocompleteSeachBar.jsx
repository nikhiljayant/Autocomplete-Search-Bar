import React, { useEffect, useState } from "react";

const AutocompleteSeachBar = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(
      `https://dummyjson.com/recipes/search?q=${searchedValue}`
    );
    const json = await data.json();
    setData(json?.recipes);
    setLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchedValue]);

  return (
    <div>
      <input
        type="text"
        value={searchedValue}
        onChange={(e) => setSearchedValue(e.target.value)}
        className="rounded-lg border border-gray-300 p-2 w-[400px] outline-none hover:ring-4 transition-all duration-300 ease-in-out ring-blue-400"
        placeholder="Search..."
      />
      {!loading && data?.length > 0
        ? data?.map((item) => (
            <p key={item?.id} className="text-sm">
              {item?.name}
            </p>
          ))
        : !loading && <p className="text-center mt-[30px]">No Data Found!</p>}

      {loading && <p className="text-center mt-[30px]">Loading...</p>}
    </div>
  );
};

export default AutocompleteSeachBar;
