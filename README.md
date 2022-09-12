# 투두투두 TTU-DU TTU-DU

> 모멘텀을 클론코딩한 웹 프로젝트

![ttu-du_ttu-du_cover](https://user-images.githubusercontent.com/68595933/189696963-3bcab2a9-9bbd-4577-9975-2fddd30902b1.png)

## 시작

- 할 일 메모 용도의 간단한 토이 프로젝트입니다.
- [데모 사이트 바로가기][데모]

---

## 개발

### 기간

- 21.11.24.~21.11.30.
- 22.09.09.~22.09.13.

### 목표

- Vanilla JavaScript 기초 이해하기.

### 사용

- HTML/CSS
- JavaScript - 기능에서 후술.
- GitHub - 버전 관리.

---

## 기능

### 날씨 API

![weather](https://user-images.githubusercontent.com/68595933/189698000-51e02dd4-eb25-4e39-a4a9-fb14e9ff4fdf.png)

```javascript
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
      weather.innerText = `${data.weather[0].main} ${data.main.temp}˚C`;
    });
}
```

### 현재 시각

![clock](https://user-images.githubusercontent.com/68595933/189698227-8ad06eb2-cfbe-4ef8-92ce-12ab60643ea8.png)

```javascript
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
```

### 로그인

![login](https://user-images.githubusercontent.com/68595933/189697372-f070800f-4c7a-490c-9e50-02a183d41489.png)

```javascript
// 로그인
function onLoginSubmit(event) {
  // 기본 동작을 막아줌
  // -> 로그인 할 때 페이지 새로고침 방지
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
  // 로그아웃 폼을 드러내기 위해 hidden 클래스(display:none;)를 제거
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬스토리지에 저장된 사용자 이름
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬스토리지에 사용자 이름이 저장 안 된 상태면
if (savedUsername === null) {
  // 사용자 이름 입력란을 드러내기 위해 hidden 클래스(display:none;)를 제거
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 입력된 사용자 이름을 제출
  loginForm.addEventListener("submit", onLoginSubmit);
  // 로그아웃 폼을 감추기 위해 hidden 클래스(display:none;)를 추가
  logoutForm.classList.add(HIDDEN_CLASSNAME);
  // 사용자 이름이 저장된 상태면
} else {
  // 인삿말 영역에 저장된 사용자 이름을 출력
  paintGreetings(savedUsername);
}
```

### 로그아웃

![logout](https://user-images.githubusercontent.com/68595933/189700276-9d415e97-3d66-4d95-93e5-89e8db44546d.png)

```javascript
// 로그아웃
function onLogoutSubmit() {
  // 사용자 이름을 로컬스토리지에서 제거
  localStorage.removeItem(USERNAME_KEY);
  // 새로고침
  window.location.reload();
}

// 로그아웃 버튼 클릭하면 로그아웃됨
logoutForm.addEventListener("submit", onLogoutSubmit);
```

### 할 일 등록

![todo](https://user-images.githubusercontent.com/68595933/189697738-a6d895a7-5a14-4c6e-b015-c114abd59843.png)

```javascript
// 투두 목록 저장
function saveToDos() {
  // 투두 목록(배열)의 내용(문자열)을 로컬스토리지에 넣음
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 투두 목록 출력
function paintToDo(newTodo) {
  // js에서 html 요소(li 태그) 생성 후
  const li = document.createElement("li");
  // id 넣어줌
  li.id = newTodo.id;
  // js에서 html 요소(span 태그) 생성 후
  const span = document.createElement("span");
  // text 넣어줌
  span.innerText = newTodo.text;
  // js에서 html 요소(button 태그) 생성
  const button = document.createElement("button");
  // 투두 삭제 버튼 만들어 줌
  button.innerText = "×";
  // 삭제 버튼 클릭 -> 해당 투두 삭제
  button.addEventListener("click", deleteToDo);
  // 투두 영역 (span 태그) 출력
  li.appendChild(span);
  // 삭제 버튼(button 태그) 출력
  li.appendChild(button);
  // 투두 목록 영역(li 태그) 출력
  toDoList.appendChild(li);
}

// 입력한 투두 제출(등록)
function handleToDoSubmit(event) {
  // 기본 동작을 막아줌
  // -> 로그인 버튼 클릭했을 때 페이지 새로고침 방지
  event.preventDefault();
  // 투두 입력란에 입력한 투두를 상수로 만듦
  const newTodo = toDoInput.value;
  // 추가로 입력할 수도 있으니까 입력란을 비움
  toDoInput.value = "";
  // newTodoObj에 투두와 id를 넣음
  const newTodoObj = {
    text: newTodo,
    // Date.now()는 원래 날짜 및 현재 시각을 밀리초로 구현한 함수
    // -> 무작위 id 만드는 데 사용
    // 투두 생성 및 삭제시 각각의 투두를 구분하는 데 필요
    // (같은 내용을 중복으로 등록하더라도 각각 다른 투두로 인식해야 함)
    id: Date.now(),
  };
  // 투두 목록(배열)에 newTodoObj(투두+id) 넣음
  toDos.push(newTodoObj);
  // 투두 목록 출력시 newTodoObj(투두+id) 넣음
  paintToDo(newTodoObj);
  // 투두 목록 저장
  saveToDos();
}

// 투두 제출시 이벤트리스너
toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬스토리지에 저장된 투두 목록(문자열)
const savedToDos = localStorage.getItem(TODOS_KEY);

// 로컬스토리지에 투두 목록이 저장된 상태면
if (savedToDos !== null) {
  // 저장된 투두 목록을
  const parsedToDos = JSON.parse(savedToDos);
  // 파싱(문자열 -> 배열)해서
  toDos = parsedToDos;
  // 투두 목록 영역에 출력
  parsedToDos.forEach(paintToDo);
}
```

### 할 일 삭제

```javascript
// 투두 삭제
function deleteToDo(event) {
  // 삭제 버튼의 클릭 이벤트가 감지되면 해당 투두의 부모 요소(li 태그)를
  const li = event.target.parentElement;
  // 삭제
  li.remove();
  // filter()로 삭제하고 싶은 투두를 투두 목록(배열)에서 제외
  // -> 해당 투두만 삭제된 새 투두 목록(배열) 생성
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 저장
  saveToDos();
}
```

### 명언

![quote](https://user-images.githubusercontent.com/68595933/189698507-b6e39584-7721-471b-8ef8-58d14272cd58.png)

```javascript
// 명언 목록
const quotes = [
  {
    quote: "I came here to drop some money, dropping all my money",
    author: "(LISA - MONEY)",
  },
  // 이하 생략
];

// 명언 영역 하위 첫 번째 span 태그는 가사 영역
const quote = document.querySelector("#quote span:first-child");
// 두 번째 span 태그는 가수 영역으로 설정
const author = document.querySelector("#quote span:last-child");

// 무작위로 표시하기 위해 랜덤 함수 사용
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 명언 영역에 무작위로 가사 및 가수 표시
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```

---

## 피드백

### 문제점

1.

### 개선점

1.

---

## 저작권

이 프로젝트는 MIT 라이센스에 따라 라이센스가 부여됩니다. 자세한 내용은 [LICENSE.md](LICENSE.md) 파일을 참조하십시오.

---

## 레퍼런스

- [참고 사이트 바로가기][참고]

<!-- 링크 -->

[데모]: https://shinyelee.github.io/ttu-du_ttu-du/
[참고]: https://serranoarevalo.github.io/momonton/
