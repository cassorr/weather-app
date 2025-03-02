import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

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
                setCities(cityList);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
        fetchCities();
    }, []);

    return (
        <div>
            <h1>Weather</h1>
            {cities.length > 0 ? (
                cities.map((city) => (
                    <Link key={city.id} to={`/city/${city.name}`}>
                        <div className="city-box">{city.name}</div>
                    </Link>
                ))
            ) : (
                <p>Loading cities...</p>
            )}
        </div>
    );
};

export default MenuView;
