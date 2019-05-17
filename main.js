$(document).ready(() => {
  $(window).on('scroll', () => {
    let wScroll = $(this).scrollTop();
    $('.parallax').css({
      'transform': 'translate(0, ' + wScroll / 2 + 'px)'
    })
  })
})
