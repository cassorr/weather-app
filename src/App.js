import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuView from "./pages/MenuView";
import AddCityView from "./pages/AddCityView";
import CityView from "./pages/CityView"; // Import CityView

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<MenuView />} />
                <Route path="/add-city" element={<AddCityView />} />
                <Route path="/city/:cityName" element={<CityView />} /> {/* Dynamic city route */}
                <Route path="/" element={<MenuView />} />
            </Routes>
        </Router>
    );
}

export default App;
