//clock.js
const clock = document.querySelector("#clock-container");
const todayArea = document.querySelector(".today");
const nowArea = document.querySelector(".now");

// 실시간 시계
function clockFunc() {

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const dayNum = today.getDay();
  const dayArr = ['일', '월', '화', '수', '목', '금', '토'];

  const hour = String(today.getHours()).padStart(2, '0');
  const minute = String(today.getMinutes()).padStart(2, '0');
  const second = String(today.getSeconds()).padStart(2, '0');

  todayArea.innerText = `${year}년 ${month}월 ${date}일 (${dayArr[dayNum]})`;
  nowArea.innerHTML = `<div>${hour}</div><div>:</div><div>${minute}</div><div>:</div><div>${second}</div>`;
}

//init function
setInterval(clockFunc, 1000);