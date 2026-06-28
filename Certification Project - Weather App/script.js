async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert('Something went wrong, please try again later');
    return;
  }

  const card = document.getElementById('weather-card');

  // Helper: return value or 'N/A' if undefined
  const val = (v) => (v !== undefined && v !== null ? v : 'N/A');

  document.getElementById('weather-icon').src =
    val(data.weather?.[0]?.icon);
  document.getElementById('weather-icon').alt =
    val(data.weather?.[0]?.description);
  document.getElementById('weather-main').textContent =
    val(data.weather?.[0]?.main);
  document.getElementById('location').textContent =
    val(data.name);
  document.getElementById('main-temperature').textContent =
    data.main?.temp !== undefined ? `${data.main.temp}°C` : 'N/A';
  document.getElementById('feels-like').textContent =
    data.main?.feels_like !== undefined ? `${data.main.feels_like}°C` : 'N/A';
  document.getElementById('humidity').textContent =
    data.main?.humidity !== undefined ? `${data.main.humidity}%` : 'N/A';
  document.getElementById('wind').textContent =
    data.wind?.speed !== undefined ? `${data.wind.speed} m/s` : 'N/A';
  document.getElementById('wind-gust').textContent =
    data.wind?.gust !== undefined ? `${data.wind.gust} m/s` : 'N/A';

  card.hidden = false;
}

document.getElementById('get-weather-btn').addEventListener('click', () => {
  const city = document.getElementById('city-select').value;
  if (!city) return;
  showWeather(city);
});