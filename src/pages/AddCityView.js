import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/AddCityView.css"; // Import styles

const AddCityView = () => {
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const handleAddCity = async (e) => {
        if (e.key === "Enter" && city.trim()) { // Add city when Enter is pressed
            try {
                await addDoc(collection(db, "cities"), { name: city });
                navigate("/home"); // Redirect to home after adding
            } catch (error) {
                console.error("Error adding city:", error);
            }
        }
    };

    return (
        <div className="add-city-container">
            <h1 className="add-city-title">Add City</h1>
            <input
                type="text"
                placeholder="Search"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleAddCity} // Listen for Enter key
                className="city-input"
            />
        </div>
    );
};

export default AddCityView;
