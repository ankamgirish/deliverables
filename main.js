// Animation on scroll
AOS.init({
  duration: 800,
  easing: "slide",
});

(function ($) {
  "use strict";
  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  // Full height
  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // Navbar scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        navbar.addClass("scrolled");
      } else {
        navbar.removeClass("scrolled sleep");
      }
      if (st > 350) {
        navbar.addClass("awake");
        sd.addClass("sleep");
      } else {
        navbar.removeClass("awake").addClass("sleep");
        sd.removeClass("sleep");
      }
    });
  };
  scrollWindow();

  $.Scrollax();

  // Carousel
  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: false,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
      },
    });
  };
  carousel();

  var counter = function () {
    $("#section-counter").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          var comma_seperator_number_step = $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            $this.animateNumber({ number: num, numberStep: comma_seperator_number_step }, 7000);
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    $(".ftco-animate").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              el.css("opacity", "1");
              el.addClass("fadeInUp ftco-animated").removeClass("item-animate");
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  $("#book_date").datepicker({ format: "m/d/yyyy", autoclose: true });
  $("#book_time").timepicker();

  $("#btn").click(function () {
    $("#text").text("Button Clicked").css("color", "red");
    $(this).fadeOut();
  });

  $("#btn").dblclick(function () {
    $("#text").text("Double Clicked!").css("color", "blue");
    $(this).fadeIn();
  });

  $(".ftco-animate").one("mouseenter", function () {
    $(this).slideUp().slideDown();
  });

  $("#form").submit(function (e) {
    e.preventDefault();
    alert("Form Submitted");
    $(this).find("input").val("Submitted");
  });

  $("#sidebar").hide().fadeIn(1000);
  $(".toggle-menu").click(function () {
    $("#sidebar").slideToggle();
  });

  $(window).resize(function () {
    console.log("Window resized");
  });

  $(window).scroll(function () {
    console.log("Page scrolled");
  });

  $(".remove-element").click(function () {
    $("#element-to-remove").remove();
  });

  $(".empty-container").click(function () {
    $("#container").empty();
  });
})(jQuery);
