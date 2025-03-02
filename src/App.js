import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuView from "./pages/MenuView";
import AddCityView from "./pages/AddCityView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<MenuView />} />
                <Route path="/add-city" element={<AddCityView />} />
                <Route path="/" element={<MenuView />} />
            </Routes>
        </Router>
    );
}

export default App;
