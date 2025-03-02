echo "# MenuView.js

## MenuView.js
MenuView.js is the main menu screen of the weather app.

Fetches all user-added cities from Firestore.  
Displays a list of cities in the menu.  
Links each city to its own weather page (/city/{cityName}).

#### How It Works:
1. Uses Firebase Firestore to get a list of saved cities.
2. Maps over the cities and displays them as clickable links.
3. When a user clicks a city, they are taken to the weather page for that city.

#### Dependencies:
- React Router (\`react-router-dom\`)
- Firebase Firestore (\`firebase/firestore\`)
