import { Weather } from "../Weather.model";

export interface ForecastJsonResponse {
  last_update: string;
  city: string;
  region: string;
  state: string;
  days: Weather[];
}
