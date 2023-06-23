// 슬라이드 자동 동작 / 버튼클릭 시 동작
function prev() {
  $(".slidewrap li:last").prependTo(".slidewrap");

  $(".slidewrap").css("margin-left", -1910);

  $(".slidewrap").stop().animate({ marginLeft: 0 }, 800);
}

function next() {
  $(".slidewrap")
    .stop()
    .animate({ marginLeft: -1910 }, function () {
      $(".slidewrap li:first").appendTo(".slidewrap");

      $(".slidewrap").css({ marginLeft: 0 });
    });
}

function slide() {
  $(".slidewrap")
    .stop()
    .animate({ marginLeft: -1910 }, function () {
      $(".slidewrap li:first").appendTo(".slidewrap");
      $(".slidewrap").css({ marginLeft: 0 });
    });
}

setInterval(slide, 3000);

$(".prev").click(function () {
  prev();
});

$(".next").click(function () {
  next();
});
