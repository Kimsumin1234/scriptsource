const form = document.querySelector("form");
const criteria = document.getElementById("criteria");
const keyword = document.getElementById("keyword");
const selected = document.querySelector("#criteria option:nth-child(1)");
console.log(criteria.value);
console.log(selected);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (criteria.value == "검색 조건 선택") {
    alert("조건을 선택해 주세요");
    criteria.focus();
    return;
  } else if (!keyword.value) {
    alert("검색어가 비어있습니다");
    keyword.focus();
    return;
  }
  e.target.submit();
});
