import CityPreviews from "./components/CityPreviews";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import UnitSwitch from "./components/UnitSwitch";

import axios from "axios";
import urls from "./axiosRequest";
import { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  // City Preview data state
  const [data, setData] = useState(null);
  // User Query data state
  const [userQuery, setUserQuery] = useState("");
  // User search results data
  const [userSearchData, setUserSearchData] = useState(null);
  // isLoading state
  const [isLoading, setIsLoading] = useState(true);

  const getUserSearchResults = async () => {
    const userRes = await axios.get(`${urls.base}&q=${userQuery}&aqi=no`);
    const userResData = [userRes.data];
    setUserSearchData(userResData);
  };

  // Sets user query
  const onGetUserQuery = (query) => {
    setUserQuery(query);
  };

  useEffect(() => {
    const dataRequest = async () => {
      const resLondon = await axios.get(urls.london);
      const resLosAngeles = await axios.get(urls.losAngeles);
      const resNewYork = await axios.get(urls.newYork);
      const resSeoul = await axios.get(urls.seoul);
      const resData = [
        resLondon.data,
        resLosAngeles.data,
        resNewYork.data,
        resSeoul.data,
      ];
      setData(resData);
      setIsLoading(false);
    };
    dataRequest();
  }, []);

  useEffect(() => {
    if (userSearchData) {
      setData(null);
    }
  }, [userSearchData]);

  return (
    <div className="flex flex-col space-y-8 py-6 items-center justify-center h-screen text-slate-800 sm:space-y-12">
      <UnitSwitch />
      <h1 className="text-xl tracking-wider font-bold">Weather <span className="text-amber-300 text-2xl">|</span> <span className="text-slate-100">365</span></h1>
      <SearchForm
        onGetUserQuery={onGetUserQuery}
        getUserSearchResults={getUserSearchResults}
      />
      {isLoading && <p>Loading...</p>}
      {data ? <CityPreviews data={data} /> : <></>}
      {userSearchData ? <SearchResults searchData={userSearchData} /> : <></>}
    </div>
  );
};

export default App;
