let menuItems = document.querySelectorAll('.menu_item');
let subMenus = document.querySelectorAll('.sub_menu');
menuItems.forEach(function(item){
  item.addEventListener('mouseenter', function(){
    subMenus.forEach(function(sub){
      sub.style.display = 'none';
    });
    let target = document.getElementById(item.dataset.target);
    if(target){
      target.style.display = 'block';
    }
  });
});
subMenus.forEach(function(sub){
  sub.addEventListener('mouseenter', function(){
    sub.style.display = 'block';
  });
});
subMenus.forEach(function(sub){
  sub.addEventListener('mouseleave', function(){
    sub.style.display = 'none';
  });
});
document.querySelector('.main_menu').addEventListener('mouseleave', function(){
  subMenus.forEach(function(sub){
    sub.style.display = 'none';
  });
});
/* 모바일 햄버거메뉴 클릭시 메뉴 보이게하기 */
let menuIcon = document.querySelector('.mobile_menu');
let accordionMenu = document.getElementById('accordion_menu');
menuIcon.addEventListener('click', function(){
  if(window.innerWidth > 768) return;
  if(accordionMenu.style.display === 'none'){
    accordionMenu.style.display = 'block';
  }else{
    accordionMenu.style.display = 'none';
  }
});
document.querySelectorAll('.accordion_title').forEach(item =>{
  item.addEventListener('click', function(){
    let content = this.nextElementSibling;
    //현재 열려있는 다른 내용은 모두닫기
    //단, 지금 클릭한 콘텐츠는 제외
    document.querySelectorAll('.accordion_content.active').forEach(activeContent=>{
      if(activeContent !== content){
        activeContent.classList.remove('active');
      }
    });
    //현재 클릭한 제목에 해당하는 콘텐츠 열고/닫기 toggle
    content.classList.toggle('active');
  });
});
window.addEventListener('resize', function(){
  if(window.innerWidth > 768){
    accordionMenu.style.display = 'none'
  }
});
/* 서치 버튼 눌렀을때 인풋 나타나게 */
let serch = document.getElementById('serch');
let serchitem = document.querySelector('.serch_item input');
serch.addEventListener('click', function(){
  if(serchitem.style.opacity === '0'){
    serchitem.style.opacity = '1';
  }else{
    serchitem.style.opacity = '0';
  }
});
/* news 공지사항 / 건강정보 버튼 눌렀을때 */
let newsBtn = document.getElementById('news');
let healthBtn = document.getElementById('health');
let newsCard = document.querySelectorAll('.news_card');
let healthCard = document.querySelectorAll('.health_card');
console.log(newsBtn, healthBtn, newsCard, healthCard);

newsBtn.addEventListener('click', function(){
  newsBtn.classList.add('active');
  healthBtn.classList.remove('active');

  newsCard.forEach(card =>{
    card.style.display = 'block'
  });
  healthCard.forEach(card => {
    card.style.display = 'none';
  });
});

healthBtn.addEventListener('click', function(){
  newsBtn.classList.remove('active');
  healthBtn.classList.add('active');

  newsCard.forEach(card => {
    card.style.display = 'none';
  });
  healthCard.forEach(card => {
    card.style.display = 'block';
  });
});
/* 푸터 네비게이션 눌렀을 때 메뉴 나타나게 */
let footerNavBtn = document.querySelectorAll('.footerNav_title');
let footerNav = document.querySelectorAll('.footerNav_menu');
footerNavBtn.forEach(item =>{
  item.addEventListener('click', function(){
    let content = this.nextElementSibling;
    footerNav.forEach(activeContent=>{
      if(activeContent !== content){
        activeContent.classList.remove('active');
      }
    });
    content.classList.toggle('active');
  });
});
/* 키워드 검색 */
let keyword = document.querySelectorAll('.keyword li');

keyword.forEach(function(li){
  li.addEventListener('click', function(e){
    e.preventDefault();
    let name = this.textContent;
    document.getElementById('serchInput').value = name;
  });
});
/* 탑 버튼 */
    let animate = document.querySelector('.topBtn_wrap');
    document.addEventListener('scroll', function(){
      let scrollPosition = document.documentElement.scrollTop;
      let windowHeight = window.innerHeight;
      if(scrollPosition > 500){
        animate.classList.add('visible');
      }else{
        animate.classList.remove('visible');
      }
    });