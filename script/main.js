$('.header_nav__search').click(function () {
  $('.search__content-input').css({
    transform: 'translateX(18px)'
  });
  $('.header_nav__search').css({
    transform: 'translateX(-10px)'
  });
  $('.search__content-input').on('transitionend', function () {
    $('.search__content-input').css({
      padding: '15px 30px 15px 18px',
      transform: 'translateX(18px)',
      borderRadius: '50px 50px 50px 50px'
    });
    $('.header_nav__search').css({
      transform: 'translateX(-12px)'
    });
    $('.header_nav__search').attr('title', 'dblclick');
  });
});
$('.header_nav__search').dblclick(function () {
  $('.search__content-input').css({
    padding: '1px 30px 1px 18px',
    borderRadius: '50px 0 0 50px'
  });
  $('.search__content-input').on('transitionend', function () {
    $('.search__content-input').css({
      transform: 'translateX(200px)',
      padding: '1px 30px 1px 18px',
      borderRadius: '50px 0 0 50px'
    });
    $('.header_nav__search').css({
      transform: 'translateX(0px)'
    });
    $('.header_nav__search').attr('title', 'click');
  });
});
const num = document.querySelectorAll('.number'),
      show = document.querySelectorAll('.show__numbers');

for (let i = 0; i < num.length; i++) {
  $(num).click(function () {
    num[0].classList.remove('active');
    num[1].classList.remove('active');
    num[2].classList.remove('active');
    num[3].classList.remove('active');
    num[4].classList.remove('active');
    num[5].classList.remove('active');
    num[6].classList.remove('active');
    num[7].classList.remove('active');
    this.classList.add('active');
  });
}

$('.points').click(function () {
  $('.show__numbers').toggleClass('hidden');

  for (let i = 0; i < num.length; i++) {
    num[3].classList.add('active');
  }
});