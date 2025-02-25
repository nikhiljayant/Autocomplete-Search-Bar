import React, { useEffect, useState } from "react";

const AutocompleteSeachBar = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

      <div className="max-h-[300px] overflow-auto border border-gray-300 rounded-lg flex flex-col mt-0.5">
        {!loading && data?.length > 0
          ? data?.map((item) => (
              <p
                key={item?.id}
                className="text-sm py-[5px] px-[10px] hover:bg-slate-100"
              >
                {item?.name}
              </p>
            ))
          : !loading && <p className="text-center my-[30px]">No Data Found!</p>}

        {loading && <p className="text-center my-[30px]">Loading...</p>}
      </div>
    </div>
  );
};

export default AutocompleteSeachBar;
