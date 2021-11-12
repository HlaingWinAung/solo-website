$(window).on("load", function () {
  $("#status").fadeOut(1000);
  $("#preloader").delay(1100).fadeOut(1000);
});
// Carousel
$(document).ready(function () {
  $("#team-members").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },

      1000: {
        items: 2,
      },
    },
  });
});
// Progress Bar
$(document).ready(function () {
  $("#progress-element").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          3000
        );
      });

      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

// ResponsiveTabs Services Section
$(document).ready(function () {
  $("#services-tab").responsiveTabs({
    animation: "slide",
  });
});
// Porfolio

$(window).on("load", function () {
  // init Isotope
  $(".isotope-container").isotope({
    // options
  });
  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // alert(filterValue);
    $(".isotope-container").isotope({ filter: filterValue });
    //css button အတွက်
    $("#isotope-filters").find(".active").removeClass("active");
    // #isotope-filters ထဲက active ဆိုတဲ့class ကို၇ှာမယ်တွေ့ရင်ဖြူတ်မယ်
    $(this).addClass("active");
  });
});
// Magnific Js
$(document).ready(function () {
  $("#portfolio-wapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
// Testimonial Section
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
