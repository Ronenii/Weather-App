import { Weather } from "../../model/Weather.model";

export default function WeatherCard({
  temperature,
  imageUrl,
  condition,
  max_temp,
  min_temp,
}: Partial<Weather>) {
  return (
    <div className="weather-card">
      <img src={imageUrl} alt="weather icon" className="weather-icon" />
      <h2>{temperature} c</h2>
      <h3>{condition}</h3>
      <body>
        max temp expected: {max_temp}
        <br />
        min temp expected: {min_temp}
      </body>
    </div>
  );
}
