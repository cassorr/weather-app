import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import "../styles/MenuView.css"; // Import CSS for styling

const MenuView = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "cities"));
                const cityList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log("Fetched cities from Firestore:", cityList); // Debugging log
                setCities(cityList);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        fetchCities();
    }, []);

    return (
        <div className="menu-container">
            {/* Header with Title and "+" Button */}
            <header className="menu-header">
                <h1 className="menu-title">Weather</h1>
                <Link to="/add-city" className="add-city-button">+</Link>
            </header>

            {/* City List */}
            <div className="city-list">
                {cities.length > 0 ? (
                    cities.map((city) => (
                        <Link key={city.id} to={`/city/${city.name}`} className="city-card">
                            <div className="city-info">
                                <span className="city-name">{city.name}, {city.country}</span>
                                <span className="city-temp">23°</span> {/* Replace with real data */}
                            </div>
                            <span className="weather-icon">❄️</span> {/* Replace with real weather icon */}
                        </Link>
                    ))
                ) : (
                    <p className="loading-text">No cities added yet.</p>
                )}
            </div>
        </div>
    );
};

export default MenuView;
