// 배경 이미지 목록
const images = ["jennie.jpg", "jisoo.jpg", "lisa.jpg", "rose.jpg"];

// 무작위로 표시하기 위해 랜덤 함수 사용
const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

// js에서 html 요소(img 태그) 생성
const bgImage = document.createElement("img");

// 선택된 이미지를 배경 소스로 설정
bgImage.src = `img/${chosenImage}`;

// html body 내에 추가
document.body.appendChild(bgImage);
