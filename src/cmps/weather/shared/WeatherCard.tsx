interface Weather {
  temperature: string;
  imageUrl: string;
  condition: string;
  last_update: Date;
  city: string;
  region: string;
  state: string;
  max_temp: string;
  min_temp: string;
}

export default function WeatherCard({
  temperature,
  imageUrl,
  condition,
  max_temp,
  min_temp,
}: Weather) {
  return (
    <div className="weather">
      <img src={imageUrl} alt="" />
      <h2>{temperature} c</h2>
      <h3>{condition}</h3>
      <body>
        max temp expected: {max_temp}
        min temp expected: {min_temp}
      </body>
    </div>
  );
}
