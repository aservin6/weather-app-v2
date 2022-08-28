const CityCard = ({ city }) => {
  return (
    <div className="font-semibold text-slate-800 rounded-xl py-2 px-3 h-28 mx-6 bg-white bg-opacity-[.18] backdrop-blur-sm sm:mx-0">
      <p>
        <span className="text-slate-800">{city.location.name}, </span>
        <span className="text-xs uppercase text-slate-100 font-bold tracking-tighter">
          {city.location.country}
        </span>
      </p>
      <p>{Math.round(city.current.temp_f)}</p>
    </div>
  );
};

export default CityCard;
