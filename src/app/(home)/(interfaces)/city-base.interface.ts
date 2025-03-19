export interface ICityBase {
  id: number;
  name: string;
  coord: Coordinates;
  main: Main;
  dt: number;
  wind: Wind;
  sys: Sys;
  clouds: Clouds;
  weather: Weather[];
}

interface Coordinates {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
