// form 에 submit 이 일어나면
// required 구현
// input value 가 들어 있는지 확인
// value 가 어떤 특정 조건을 만족하는지 확인
const form = document.querySelector("form");
const userid = document.getElementById("userid");
const password = document.getElementById("password");
const confirmPwd = document.getElementById("confirm-password");

const regId = /(?=^[A-Za-z])(?=.+\d)[A-Za-z\d]{6,12}$/;
const regPwd = /(?=^[A-Za-z])(?=.+\d)(?=.+[!@$%])[A-Za-z\d!@$%]{8,15}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // true 자료 : 0 제외 숫자, '문자', [], {}
  // false 자료 : 0, '', null, undefined, NaN
  // 자바스크립트 에서는 공란 이면 자동으로 false 가 뜬다
  // if (userid.value == '')
  // if (userid.value.length == 0)
  if (!userid.value || !regId.test(userid.value)) {
    userid.nextElementSibling.classList.add("show");
  } else {
    userid.nextElementSibling.classList.remove("show");
  }

  if (!password.value || !regPwd.test(password.value)) {
    password.nextElementSibling.classList.add("show");
  } else {
    password.nextElementSibling.classList.remove("show");
  }

  if (!confirmPwd.value || !regPwd.test(confirmPwd.value)) {
    confirmPwd.nextElementSibling.classList.add("show");
  } else {
    confirmPwd.nextElementSibling.classList.remove("show");
  }
  // password != confirmPwd
  // 이전 비밀번호와 다릅니다
  if (password.value != confirmPwd.value) {
    confirmPwd.nextElementSibling.classList.add("show");
    confirmPwd.nextElementSibling.innerHTML = "이전 비밀번호와 다릅니다";
  } else {
    // 디버깅확인후 문제점 확인
    // password, confirm 둘다 입력안된 경우 값이 동일하기 때문에 비밀번호를 확인해 주세요 메세지가 안나옴
    // if 구문 추가해서 해결
    if (confirmPwd.value) {
      confirmPwd.nextElementSibling.classList.remove("show");
    }
  }
});
