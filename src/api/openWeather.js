const apiKey = '1d7cf98227a8697a4c98653d864d3d94';

const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;
