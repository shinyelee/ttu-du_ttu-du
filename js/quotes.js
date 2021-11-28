const quotes = [
    {
        quote: "연신내에 계시잖아요?",
        author: "-아이키",
    },
    {
        quote: "내가 약자? 난 한 번 도 약자였던 적이 없는데",
        author: "-리정",
    },
    {
        quote: "어딜 뺏겨! 내 거를 그치?",
        author: "-가비",
    },
    {
        quote: "응?? 우리 가수 하고 싶나?",
        author: "-시미즈",
    },
    {
        quote: "나 너무 속상하잖아!",
        author: "-모니카",
    },
    {
        quote: "나가! 나가!",
        author: "-리헤이",
    },
    {
        quote: "YOUNG한 에너지는 부족하다",
        author: "-아이키",
    },
    {
        quote: "잘봐 언니들 싸움이다!",
        author: "-허니제이",
    },
    {
        quote: "존재감이 길가에 있는 나무 정도?",
        author: "-가비",
    },
    {
        quote: "주식도 모르면서~",
        author: "-노제",
    },
    {
        quote: "근데... 본인 24살에 뭐하셨어요?",
        author: "-리정",
    },
    {
        quote: "믓찌다(?) 믓찌다(?) 울언니",
        author: "-립제이",
    },
    {
        quote: "내가 22살만 돼봐 저 언니들보다 섹시하지~",
        author: "-선윤경",
    },
    {
        quote: "안무 그냥 날름 뺏는 거야 언니들이? 못된(?) 언니들이! 못돼가지구!",
        author: "-시미즈",
    },
    {
        quote: "몸몸몸매 눈누난나",
        author: "-가비",
    },
    {
        quote: "저는 잇몸을 갈아야겠다!",
        author: "-효진초이",
    },
    {
        quote: "언니! 내가 원했던 게 이거잖아",
        author: "-립제이",
    },
    {
        quote: "수장은 수장이랑 붙어야죠!",
        author: "-허니제이",
    },
    {
        quote: "제 얼굴 똑바로 보세요",
        author: "-모니카",
    },
    {
        quote: "그런데 저희 윤경이... 제가 본 것 중에 제일 섹시했습니다",
        author: "-아이키",
    },
    {
        quote: "라치카하면 K-POP 퍼포먼스 K-POP 퍼포먼스하면 라치카죠",
        author: "-가비",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;