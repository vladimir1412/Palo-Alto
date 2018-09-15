$(function () {
  createStickyHeader();
});

function createStickyHeader() {
  var header = $("header"),
      navbar = $(".navbar"),
      lastScrollTop = 0,
      width = $(window).width(),
      navList = $("nav ul")

  if (typeof header !== "undefined") {

    $(window).scroll(function (event) {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > lastScrollTop || scrollTop == 0) {
        // downscroll
        header.removeClass("sticky");
        navbar.css("padding", "0");
        if (width <= 768 && navList.css('right') == '0px') {
          navList.css({ right: "-1000px" });
        }
      }
      else {
        // upscroll
        header.addClass("sticky");
        navbar.css("padding", "13px")
      }
      lastScrollTop = scrollTop;
    });
  }
}

$(document).ready(function () {
  var hamburgerMenu = $(".hamburger-menu"),
      nav = $("nav ul");

  hamburgerMenu.on("click", function () {
    if (nav.css("right") == "-1000px") {
      nav.css({ right: "0px" });
    } else {
      nav.css({ right: "-1000px" });
    }
  });

});
