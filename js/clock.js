// 시계 영역
const clock = document.getElementById("clock");

// 시계
function getClock() {
  // 시간 가져오는 함수
  const date = new Date();
  // 시와 분이 반드시 2자리가 되도록 함(숫자가 한 자리일 때는 앞에 0을 추가)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // 00:00 형태로 표시
  clock.innerText = `${hours}:${minutes}`;
}

// 시간 가져옴
getClock();

// 최대한 실제 시간과 동일하게 맞추기 위해 시간을 1초마다 호출
setInterval(getClock, 1000);
