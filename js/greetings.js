// 로그인 폼
const loginForm = document.querySelector("#login-form");
// 사용자 이름 입력란
const loginInput = document.querySelector("#login-form input");
// 인삿말 영역
const greeting = document.querySelector("#greeting");

// hidden 클래스(display:none;)
const HIDDEN_CLASSNAME = "hidden";
// 입력한 사용자 이름
const USERNAME_KEY = "username";

// 로그인
function onLoginSubmit(event) {
  // 기본 동작을 막아줌
  // -> 로그인 버튼 클릭했을 때 페이지 새로고침 방지
  event.preventDefault();
  // 사용자 이름 입력란을 감추기 위해 로그인 폼에 hidden 클래스(display:none;)를 추가
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 입력한 사용자 이름을
  const username = loginInput.value;
  // 로컬스토리지에 세팅해
  localStorage.setItem(USERNAME_KEY, username);
  // 인삿말 영역에 입력한 사용자 이름을 출력
  paintGreetings(username);
}

// 인삿말 영역에 입력한 사용자 이름을 출력
function paintGreetings(username) {
  // 인삿말 영역에 인삿말과 입력한 사용자 이름을 세팅
  greeting.innerText = `Hello, ${username}!`;
  // 인삿말 영역을 드러내기 위해 hidden 클래스(display:none;)를 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬스토리지에 저장된 사용자 이름
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬스토리지에 사용자 이름이 저장 안 된 상태면
if (savedUsername === null) {
  // 사용자 이름 입력란을 드러내기 위해 hidden 클래스(display:none;)를 제거
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 입력된 사용자 이름을 제출
  loginForm.addEventListener("submit", onLoginSubmit);
  // 사용자 이름이 저장된 상태면
} else {
  // 인삿말 영역에 저장된 사용자 이름을 출력
  paintGreetings(savedUsername);
}
