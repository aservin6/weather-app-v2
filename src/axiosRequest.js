const londonRequest =
  `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=London&aqi=no`;
const losAngelesRequest =
  `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=Los-Angeles&aqi=no`;
const newYorkRequest =
  `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=New-York&aqi=no`;

const seoulRequest =
  `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=Seoul&aqi=no`;

const baseURL = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`;

const urls = {
  london: londonRequest,
  losAngeles: losAngelesRequest,
  newYork: newYorkRequest,
  seoul: seoulRequest,
  base: baseURL,
};

export default urls;
