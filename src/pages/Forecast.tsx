import ForecastDisplay from "../cmps/weather/ForecastDisplay";
import useAxios from "../hooks/useAxios";
import { ForecastJsonResponse } from "../model/dto/ForecastJsonResponse.model";

export default function Forecast() {
  const [loading, data, error, request] = useAxios<ForecastJsonResponse>({
    method: "GET",
    url: "http://localhost:8000/forecast",
  });

  const forecastData = data as ForecastJsonResponse;

  return (
    <div>
      <h2>This is forecast</h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <ForecastDisplay
          last_update={forecastData.last_update}
          city={forecastData.city}
          region={forecastData.region}
          state={forecastData.state}
          days={forecastData.days}
        />
      )}
    </div>
  );
}
