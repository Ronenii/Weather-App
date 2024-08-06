import { useEffect, useState } from "react";
import SearchBar from "../cmps/homepage/SearchBar";
import { weatherService } from "../services/weather.api.service";

export default function Homepage() {
  const [data, setData] = useState<Promise<any>>();

  useEffect(() => {
    setData(weatherService.getWeatherDetails());
  }, []);

  return (
    <div>
      <h2>This is homepage</h2>
      <SearchBar />
    </div>
  );
}
