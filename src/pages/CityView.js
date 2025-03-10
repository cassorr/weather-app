import React from "react";
import "../styles/CityView.css";

const CityView = () => {
    // Fake data for now (replace with API data later)
    const cityData = {
        name: "Missoula, MT",
        temp: 23,
        weatherDescription: "Snowy",
        hourlyForecast: [
            { time: "Now", temp: 23 },
            { time: "1 AM", temp: 23 },
            { time: "2 AM", temp: 23 },
            { time: "3 AM", temp: 23 },
            { time: "4 AM", temp: 23 },
            { time: "5 AM", temp: 22 },
            { time: "6 AM", temp: 22 },
            { time: "7 AM", temp: 22 },
            { time: "8 AM", temp: 21 },
            { time: "9 AM", temp: 21 },
            { time: "10 AM", temp: 20 },
            { time: "11 AM", temp: 20 },
            { time: "12 PM", temp: 19 }
        ],
        weeklyForecast: [
            { day: "Today", temp: 30 },
            { day: "Tue", temp: 28 },
            { day: "Wed", temp: 25 },
            { day: "Thu", temp: 22 },
            { day: "Fri", temp: 20 },
            { day: "Sat", temp: 18 },
            { day: "Sun", temp: 17 }
        ],
        details: {
            airQuality: "3 - Low Health Risk",
            uvIndex: 4,
            sunrise: "5:28 AM",
            windSpeed: "9.7 km/h",
            rainfall: "1.8 mm in last hour",
            humidity: "90%",
            visibility: "8 km"
        }
    };

    return (
        <div className="city-container">
            {/* City Header */}
            <header className="city-header">
                <h1 className="city-name">{cityData.name}</h1>
                <h2 className="city-temp">{cityData.temp}°</h2>
                <p className="weather-description">{cityData.weatherDescription}</p>
            </header>

            {/* Hourly & Weekly Forecast */}
            <section className="forecast">
                <h3>Hourly Forecast</h3>
                <div className="hourly">
                    {cityData.hourlyForecast.map((hour, index) => (
                        <div key={index} className="hour-card">
                            <p>{hour.time}</p>
                            <p>{hour.temp}°</p>
                        </div>
                    ))}
                </div>

                <h3>Weekly Forecast</h3>
                <div className="weekly">
                    {cityData.weeklyForecast.map((day, index) => (
                        <div key={index} className="day-card">
                            <p>{day.day}</p>
                            <p>{day.temp}°</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Weather Details */}
            <section className="weather-details">
                <div className="detail-card">
                    <h4>Air Quality</h4>
                    <p>{cityData.details.airQuality}</p>
                </div>
                <div className="detail-card">
                    <h4>UV Index</h4>
                    <p>{cityData.details.uvIndex}</p>
                </div>
                <div className="detail-card">
                    <h4>Sunrise</h4>
                    <p>{cityData.details.sunrise}</p>
                </div>
                <div className="detail-card">
                    <h4>Wind</h4>
                    <p>{cityData.details.windSpeed}</p>
                </div>
                <div className="detail-card">
                    <h4>Rainfall</h4>
                    <p>{cityData.details.rainfall}</p>
                </div>
                <div className="detail-card">
                    <h4>Humidity</h4>
                    <p>{cityData.details.humidity}</p>
                </div>
                <div className="detail-card">
                    <h4>Visibility</h4>
                    <p>{cityData.details.visibility}</p>
                </div>
            </section>
        </div>
    );
};

export default CityView;
