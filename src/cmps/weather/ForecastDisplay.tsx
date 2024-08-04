import axios from "axios";
import WeatherCard from "./WeatherCard";
import { ForecastJsonResponse } from "../../model/dto/ForecastJsonResponse.model";

export default function ForecastDisplay({
  last_update,
  city,
  region,
  state,
  days,
}: ForecastJsonResponse) {
  return (
    <div className="forecast-display">
      <div className="today-card">
        <WeatherCard {...days[0]} />
      </div>
      <div className="card-row">
        {days.slice(1, 6).map((weather, index) => (
          <WeatherCard key={index} {...weather} />
        ))}
      </div>
    </div>
  );
}
