/*
* mento/detail.html
* */

//sidebox fixed
const content = document.querySelector('.main_intro');
const sidebox = document.querySelector('.main_fixed');


// 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
const contentTop = content.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', function(){

    if(window.scrollY >= contentTop) {
        sidebox.classList.add('fixed');
    }else{
        sidebox.classList.remove('fixed');
    }

});

//멘토 후기 별 체크
$(".star_check").on("click" , function () {
    console.log($(this));
    if($(this).hasClass("star_check") === true){
        $(this).nextAll().attr('class','star_uncheck');
    }else{
        $(this).prevAll().attr('class','star_check');
        $(this).attr('class','star_check');
    }
})
