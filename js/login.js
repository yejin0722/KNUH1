/* 로그인 버튼 입력없이 눌렀을때 경고창 */
let btn = document.querySelector('.submit');
let input = document.querySelector('.id');
console.log(btn, input);
btn.addEventListener('click', function(){
  if(input.value === ''){
    alert('아이디, 비밀번호를 입력해주세요.');
  }else{
    console.log('로그인 시도...');
  }
});