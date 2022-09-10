// 날씨/기온
const weather = document.querySelector("#weather span:first-child");
// 지역
const city = document.querySelector("#weather span:last-child");

// openweather api key
const API_KEY = "8cd894e12de3fa5eaa1066e961a9fd37";

// 위치 제공하면
function onGeoOk(position) {
  // 위도
  const lat = position.coords.latitude;
  // 경도
  const lon = position.coords.longitude;
  // URL
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // 날씨 정보 출력
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

// 위치를 제공하지 않으면
function onGeoError() {
  // 알림창 띄움
  alert("사용자의 위치를 알 수 없어 날씨를 표시하지 않습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
