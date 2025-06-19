# REST-API-CLIENT

COMPANY: CODTECH IT SOLUTIONS

NAME: CHAVVAAKULA ANIL KUMAR

INTERN ID: CT04DL445

DOMAIN: Java Programming

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSH KUMAR




🌦️ Indian State Weather App — Project Description


📌 Project Title:


Weather Forecast Web App with Live Updates by Indian State


📝 Overview:


This project is a modern, responsive web application that provides real-time weather updates for all Indian states, using their respective capital cities. It leverages the OpenWeatherMap API to fetch live weather data, including temperature, humidity, and wind speed, and updates dynamically based on user input.

⚙️ Technologies Used:


Component	Technology
Frontend	HTML5, CSS3, JavaScript
API	OpenWeatherMap API
Design	CSS Flexbox, Gradients, Rounded UI
Tools	VS Code / Any IDE, Live Server or Browser

🖥️ Features:

🔘 State Dropdown: A selection menu containing all Indian states.

🌤️ Real-Time Weather: Displays live weather data including:

Temperature (°C)

Humidity (%)

Wind Speed (km/h)



🎨 Stylish UI:



Gradient rounded background (.app)

Circular weather display (.temperature)

Light blue & white modern color palette



🔁 Dynamic Updates: Weather info changes instantly when a different state is selected.



✅ Clean Separation: Code is organized into:



index.html – markup

style.css – layout & style

script.js – API logic



🗺️ State-to-Capital Mapping:


Each state selection is linked to its capital city, which is used to query weather data:

Ex: "Karnataka" → "Bengaluru", "Maharashtra" → "Mumbai"

This ensures accurate and consistent API results.

🔐 API Integration:


Weather data is fetched using the OpenWeatherMap REST API.
Example API call:

bash
Copy
Edit
https://api.openweathermap.org/data/2.5/weather?q=Bengaluru,IN&units=metric&appid=YOUR_API_KEY



📂 File Structure:


graphql
Copy
Edit
weather-app/
├── index.html     # Main HTML structure
├── style.css      # App styling and layout
└── script.js      # JavaScript for API calls and DOM updates



💡 How It Works:



User selects a state from the dropdown.

JavaScript maps the state to its capital.

A fetch request is sent to OpenWeatherMap.

On success, the DOM is updated to display:

Current temperature in °C

Humidity percentage

Wind speed in km/h

Errors are handled gracefully with an alert message.



🚀 How to Run:


Extract the ZIP file.

Open index.html in a browser.

Select any Indian state — and view its live weather!

📈 Future Enhancements :


🌐 Add search by city name

📍 Integrate geolocation

🌄 Show weather icons

📊 Add forecast for 5 days

🔄 Refresh data automatically


#OUTPUT: 

![Image](https://github.com/user-attachments/assets/1786bc0e-8b4a-45ef-a2f5-5a783b0e2788)
![Image](https://github.com/user-attachments/assets/52993afb-69bf-41cf-8860-588ede002328)
![Image](https://github.com/user-attachments/assets/f13dba67-5db1-416f-b057-933c49826ba1)
