// 내가 그냥 해본거
// const buttons = document.querySelectorAll(".tab-button");
// console.log(buttons);
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.classList.remove("orange");
//     if (!button.classList.contains("orange")) {
//       button.classList.add("orange");
//     }
//   });
// });

// 개별로 하나씩 하는 방법
// orange
// li 클릭 시 orange 클래스명 움직이기
// show
// 첫번째 li 클릭시 첫번째 div 보여주기

// 세 개의 li 찾기
const firstLi = document.querySelector(".list li:first-child");
const secondLi = document.querySelector(".list li:nth-child(2)");
const thirdLi = document.querySelector(".list li:last-child");

// 세 개의 div 찾기
const firstP = document.querySelector(".tab-content:nth-of-type(1)");
const secondP = document.querySelector(".tab-content:nth-of-type(2)");
const thirdP = document.querySelector(".tab-content:nth-of-type(3)");
console.log(firstP);
console.log(secondP);
console.log(thirdP);

firstLi.addEventListener("click", () => {
  // 다른 li 에 orange 클래스명 제거
  secondLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  // firstLi orange 클래스명 추가
  firstLi.classList.add("orange");

  // 다른 div 의 show 제거
  secondP.classList.remove("show");
  thirdP.classList.remove("show");
  // 첫번째 div show 추가
  firstP.classList.add("show");
});
secondLi.addEventListener("click", () => {
  // 다른 li 에 orange 클래스명 제거
  thirdLi.classList.remove("orange");
  firstLi.classList.remove("orange");
  // secondLi orange 클래스명 추가
  secondLi.classList.add("orange");

  thirdP.classList.remove("show");
  firstP.classList.remove("show");

  secondP.classList.add("show");
});
thirdLi.addEventListener("click", () => {
  // 다른 li 에 orange 클래스명 제거
  secondLi.classList.remove("orange");
  firstLi.classList.remove("orange");
  // thirdLi orange 클래스명 추가
  thirdLi.classList.add("orange");

  secondP.classList.remove("show");
  firstP.classList.remove("show");

  thirdP.classList.add("show");
});
