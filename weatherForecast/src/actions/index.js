import Axios from 'axios';

const WEATHER_API_KEY = 'cb5dfd4c892fdd9730a433f55fd59681';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export function fetchWeather(city) {
  //city is the payload passed every time an action is triggered

  const url = `${ROOT_URL}&q=${city},aus`;
  const request = Axios.get(url);

  console.log('request: ',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}