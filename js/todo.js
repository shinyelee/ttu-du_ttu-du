// 투두 폼
const toDoForm = document.getElementById("todo-form");
// 투두 입력란
const toDoInput = document.querySelector("#todo-form input");
// 투두 목록
const toDoList = document.getElementById("todo-list");

// 투두 목록의 키
const TODOS_KEY = "todos";

// 투두 목록을 배열(array)로 만듦
let toDos = [];

// 투두 목록 저장
function saveToDos() {
  // 투두 목록(배열)의 내용(문자열)을 로컬스토리지에 넣음
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 투두 수정
function updateToDo(event) {
  // 수정할 투두(수정 전)
  const updateTodo = event.target.previousElementSibling;
  // 수정한 투두(수정 후)
  const editTodo = prompt("Edit your TO-DO");
  // 프롬프트에 수정할 내용을 입력하면
  if (editTodo) {
    // 수정할 투두(목록)에 수정한 투두(프롬프트)의 내용을 넣음
    updateTodo.innerText = editTodo;
    // 수정한 투두의 부모 요소(li 태그)를 찾아
    const li = event.target.parentElement;
    // 수정된 새 투두 목록(배열)에
    const updatedIndex = toDos.findIndex((toDo) => toDo.id === parseInt(li.id));
    // 해당 투두 내용 업데이트 후
    toDos[updatedIndex].text = editTodo;
    // 투두 목록 저장
    saveToDos();
  }
}

// 투두 삭제
function deleteToDo(event) {
  // 삭제 버튼의 클릭 이벤트가 감지되면 해당 투두의 부모 요소(li 태그)를
  const li = event.target.parentElement;
  // 삭제
  li.remove();
  // filter()로 삭제하고 싶은 투두를 투두 목록(배열)에서 제외
  // -> 해당 투두만 삭제된 새 투두 목록(배열) 생성
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 투두 목록 저장
  saveToDos();
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
  const editBtn = document.createElement("button");
  // 투두 수정 버튼 만들어 줌
  editBtn.innerText = "✎";
  // 수정 버튼 클릭 -> 해당 투두 수정
  editBtn.addEventListener("click", updateToDo);
  // js에서 html 요소(button 태그) 생성
  const deleteBtn = document.createElement("button");
  // 투두 삭제 버튼 만들어 줌
  deleteBtn.innerText = "🗑";
  // 삭제 버튼 클릭 -> 해당 투두 삭제
  deleteBtn.addEventListener("click", deleteToDo);

  // 투두 영역 (span 태그) 출력
  li.appendChild(span);
  // 수정 버튼(button 태그) 출력
  li.appendChild(editBtn);
  // 삭제 버튼(button 태그) 출력
  li.appendChild(deleteBtn);
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
