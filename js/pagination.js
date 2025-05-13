let rowsPerPage = 10;
let rows = document.querySelectorAll('#my-table tbody tr');
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage);
let numbers = document.querySelector('#numbers');

// 페이지 번호 생성
for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

let numberBtn = numbers.querySelectorAll('a');

// 행 보여주는 함수
function displayRow(idx) {
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = Array.from(rows);

  rowsArray.forEach(row => {
    row.style.display = 'none';
  });

  let newRows = rowsArray.slice(start, end);
  newRows.forEach(row => {
    row.style.display = '';
  });

  numberBtn.forEach(btn => btn.classList.remove('active'));
  numberBtn[idx].classList.add('active');
}
numberBtn.forEach((item, idx) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    displayRow(idx);
  });
});
displayRow(0);