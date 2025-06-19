const stateToCity = {
  "Andhra Pradesh": "Amaravati",
  "Bihar": "Patna",
  "Delhi": "New Delhi",
  "Goa": "Panaji",
  "Gujarat": "Gandhinagar",
  "Haryana": "Chandigarh",
  "Jharkhand": "Ranchi",
  "Karnataka": "Bengaluru",
  "Kerala": "Thiruvananthapuram",
  "Madhya Pradesh": "Bhopal",
  "Maharashtra": "Mumbai",
  "Odisha": "Bhubaneswar",
  "Punjab": "Chandigarh",
  "Rajasthan": "Jaipur",
  "Tamil Nadu": "Chennai",
  "Telangana": "Hyderabad",
  "Uttar Pradesh": "Lucknow",
  "Uttarakhand": "Dehradun",
  "West Bengal": "Kolkata"
};

const apiKey = "7c5adb839e7bcab181d9c601c67053cc"; // ✅ Your API key

document.getElementById("state").addEventListener("change", function () {
  const state = this.value;
  if (!state) return;

  const city = stateToCity[state];
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Network error");
      return res.json();
    })
    .then(data => {
      document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
      document.getElementById("humidity").textContent = `${data.main.humidity}%`;
      document.getElementById("wind").textContent = `${data.wind.speed} km/h`;
    })
    .catch(err => {
      alert("Error fetching weather data.");
      console.error("Fetch error:", err);
    });
});
