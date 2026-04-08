import { useState } from "react";
import axios from "./api/axios";

function App() {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  const searchLocation = async (e) => {
    if (e.key === "Enter") {
      if (!location) return;

      try {
        const weatherRes = await axios.get(
          `/weather?q=${location}&units=metric&appid=${API_KEY}`
        );

        const forecastRes = await axios.get(
          `/forecast?q=${location}&units=metric&appid=${API_KEY}`
        );

        setData(weatherRes.data);
        setForecast(forecastRes.data.list.slice(0, 5));
      } catch (err) {
        alert("Kota tidak ditemukan");
      }

      setLocation("");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 flex items-center justify-center p-4">

      {/* CARD */}
      <div className="h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100 flex items-center justify-center p-4">

        {/* SEARCH */}
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Search city..."
          className="w-full p-3 rounded-xl bg-white/70 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-300 transition"
        />

        {/* MAIN */}
        <div className="text-center space-y-1">
          <h2 className="text-lg font-medium text-gray-600">
            {data?.name || "City"}
          </h2>

          <h1 className="text-6xl font-semibold tracking-tight text-gray-900">
            {data ? `${data.main.temp.toFixed()}°` : "--"}
          </h1>

          <p className="text-gray-500">
            {data?.weather?.[0]?.main || "Weather"}
          </p>
        </div>

        {/* STATS */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>Humidity {data?.main?.humidity || "--"}%</span>
          <span>Wind {data?.wind?.speed || "--"} km/h</span>
          <span>Feels {data?.main?.feels_like?.toFixed() || "--"}°</span>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200"></div>

        {/* FORECAST */}
        <div className="space-y-2">
          {forecast.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white/70 p-2 rounded-lg"
            >
              <span className="text-gray-600 text-sm">
                {new Date(item.dt_txt).getHours()}:00
              </span>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt=""
              />

              <span className="text-gray-800 font-medium">
                {item.main.temp.toFixed()}°
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;