function createStickyHeader(){var a=$("header"),b=$(".navbar"),c=0,d=$(window).width(),e=$("nav ul");void 0!==a&&$(window).scroll(function(f){var g=$(this).scrollTop();g>c||0==g?(a.removeClass("sticky"),b.css("padding","0"),d<=768&&"0px"==e.css("right")&&e.css({right:"-1000px"})):(a.addClass("sticky"),b.css("padding","13px")),c=g})}$(function(){createStickyHeader()}),$(document).ready(function(){var a=$(".hamburger-menu"),b=$("nav ul");a.on("click",function(){"-1000px"==b.css("right")?b.css({right:"0px"}):b.css({right:"-1000px"})})});