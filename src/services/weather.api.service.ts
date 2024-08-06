import axios from "axios";
import { ForecastJsonResponse } from "../model/dto/ForecastJsonResponse.model";

export const weatherService = {
  getWeatherDetails,
};

const WEATHER_API = "www.weatherapi";

async function getWeatherDetails(): Promise<any> {
  try {
    const res = await axios.get(WEATHER_API);
    const weatherAdjustObj = _getWeatherObject(res);
    return rweatherAdjustObjes;
  } catch (err) {
    console.error(err);
  }
}

function _getWeatherObject(apiObj) {
  return {
    name: apiObj.data[0],
  };
}
