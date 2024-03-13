const txtYear = document.getElementById("txtYear");
const selMon = document.getElementById("selMon");
const selDay = document.getElementById("selDay");
const msg = document.querySelector("#msg");
const box2 = document.querySelector(".box2");

// 어제날짜 구하고 화면에 보여주는 함수
const init = () => {
  // 오늘날짜 구하기
  const now = new Date();
  // 년, 월, 일 변수에 담기
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  // 어제날짜
  let day = now.getDate() - 1;

  // 요소에 보여주기
  // 요소 찾은 후 value 변경
  txtYear.value = year;
  // selMon.value = month; <option value="03"> 이라서 3을 받으면 인식이 안된다

  // 1 ~ 9 월 : "0"+month => 01,02,03....
  // 1 ~ 9 일 : "0"+day => 01,02,03....
  //   if (month < 10) {
  //     month = "0" + month;
  //   }
  //   if (day < 10) {
  //     day = "0" + day;
  //   }
  //   selMon.value = month;
  //   selDay.value = day;

  // 삼항연산자로 간단히
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};
init();

// show 함수
// a 태그를 이용해서 show 함수 호출하기
// 상세정보 페이지 만들기
// 영화 한글 제목 : movieNm
// 영화 영어 제목 : movieNmEn
// 싱영 시간 : showTm
// 감독 : directors (s 가 붙어있음, 배열)
// 배우 : actors (s 가 붙어있음, 배열)
function show(movieCd) {
  console.log(movieCd);

  let url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
  url += movieCd;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      let movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo.directors);

      let movieNm = movieInfo.movieNm;
      let movieNmEn = movieInfo.movieNmEn;
      let showTm = movieInfo.showTm;

      // 감독 : directors
      let directors = "";
      movieInfo.directors.forEach((director) => {
        directors += `${director.peopleNm}, `;
      });
      // 배우 : actors
      let actors = "";
      movieInfo.actors.forEach((actor) => {
        actors += `${actor.peopleNm}, `;
      });

      let result = "<h2>영화 상세 정보</h2>";
      result += `<ul>`;
      result += `<li> 영화제목 : ${movieNm}</li>`;
      result += `<li> 영어제목 : ${movieNmEn}</li>`;
      result += `<li> 상영시간 : ${showTm} 분</li>`;
      result += `<li> 감독 : ${directors}</li>`;
      result += `<li> 배우 : ${actors}</li>`;
      result += `</ul>`;
      box2.innerHTML = result;
    })
    .catch(() => console.log("show 함수 에러"));
}

document.querySelector("button").addEventListener("click", () => {
  // 영화진흥위원회 사용자가 선택한 날짜의 박스오피스 가져오기
  let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  url += txtYear.value + selMon.value + selDay.value;
  console.log(url);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      console.log(data);

      // json 파일 요소 접근 방식
      let boxofficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(boxofficeList);

      let result = `<h3>순위</h3><br>`;

      boxofficeList.forEach((movie) => {
        console.log(movie.movieCd);
        // 영화순위 나타내보기 (일별 박스 오피스 오픈API)
        // 1 위 (▲ 0 ▼ -1 증감표시) : 파묘(영화이름)

        // 증감표시 변수
        let rankInten = movie.rankInten;

        result += `${movie.rank} 위 (`;
        // 증감표시 구별 if 구문
        if (rankInten > 0) {
          result += "▲";
        } else if (rankInten < 0) {
          result += "▼";
        }

        result += `${movie.rankInten}) : `;
        result += `<a href="#" onclick='javascript:show(${movie.movieCd})'>${movie.movieNm}</a><br>`;
      });

      msg.innerHTML = result;
    })
    .catch(() => console.log("주소 확인"));
});
