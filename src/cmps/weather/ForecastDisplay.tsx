import axios from "axios";
import WeatherCard from "./WeatherCard";
import { ForecastJsonResponse } from "../../model/dto/ForecastJsonResponse.model";

// last_update,
// city,
// region,
// state,
// days,
export default function ForecastDisplay(data: ForecastJsonResponse) {
  if (!data) return <div>loading data...</div>;
  return (
    <div className="forecast-display">
      <div className="today-card">
        <WeatherCard {...data.days[0]} />
      </div>
      <div className="card-row">
        {/* {data?.days.slice(1, 6).map((weather: any, index: any) => (
          <WeatherCard key={index} {...weather} />
        ))} */}
      </div>
    </div>
    // <pre>{JSON.stringify(data)}</pre>
  );
}

{
}
