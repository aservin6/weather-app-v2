import CityCard from "./CityCard";

const CityPreviews = ( { data } ) => {
  return (
    <div className="grid grid-cols-1 container gap-3 pb-6 sm:grid-cols-2">
      {data.map((city, index) => {
        return <CityCard city={city} key={index} />
      })}
    </div>
  );
};

export default CityPreviews;
