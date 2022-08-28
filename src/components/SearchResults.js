const SearchResults = ({ searchData }) => {
  return (
    <div>
      <p>{searchData[0].location.name}</p>
      <p>{searchData[0].location.country}</p>
      <p>{searchData[0].current.temp_f}</p>
    </div>
  );
};

export default SearchResults;
