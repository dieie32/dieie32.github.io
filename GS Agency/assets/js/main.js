(function($) {
  "use strict";

  // STICKY ACTIVE
  var activeSticky = $("#active-sticky"),
    winD = $(window);
  winD.on("scroll", function() {
    var scroll = $(window).scrollTop(),
      isSticky = activeSticky;
    if (scroll < 55) {
      isSticky.removeClass("is-sticky");
    } else {
      isSticky.addClass("is-sticky");
    }
  });

  // MENU A ACTIVE JQUERY
  var pageUrl = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    ),
    aActive = $("nav ul li a");
  if (aActive.length) {
    aActive.each(function() {
      if ($(this).attr("href") === pageUrl || $(this).attr("href") === "")
        $(this).addClass("active");
    });
  }

  // SLICK CAROUSEL AS NAV
  var fourItem = $("#four-item"),
    oneItem = $("#one-item");
  if (oneItem.length) {
    oneItem.slick({
      dots: true,
      arrows: false
    });
  }
  if (fourItem.length) {
    fourItem.slick({
      speed: 600,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      pauseOnHover: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    // Add Custom Progress Bar
    var $slickProgressBar = $(".slick-progress");
    var $slickProgressBarLabel = $(".slider-label");
    fourItem.on("beforeChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      var calc = (nextSlide / (slick.slideCount - 1)) * 100;
      $slickProgressBar
        .css("background-size", calc + "% 100%")
        .attr("aria-valuenow", calc);
      $slickProgressBarLabel.text(calc + "% completed");
    });
  }

  // Scroll UP
  $.scrollUp({
    scrollText: '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>', // Text for element, can contain HTML
    scrollSpeed: 800
  });

  // Counter Up
  var $countUp = $(".counter");
  $countUp.counterUp({
    delay: 30,
    time: 2000
  });

  // AOS ACTIVATION
  AOS.init({
    disable: function($) {
      var maxWidth = 1024;
      return window.innerWidth < maxWidth;
    },
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    once: true // whether animation should happen only once - while scrolling down
  });

  // MAIL CHIMP AJAX ACTIVE
  var mCForm = $("#mc-form");
  mCForm.ajaxChimp({
    callback: mailchimpCallback,
    //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
    url:
      "http://regaltheme.us16.list-manage.com/subscribe/post?u=9779a0e5298ed51ec0ff0a92b&amp;id=5466926a9f"
  });
  function mailchimpCallback(resp) {
    if (resp.result === "success") {
      alert(resp.msg);
    } else if (resp.result === "error") {
      alert(resp.msg);
    }
    return false;
  }

  // CONTACT FORM VALIDATIONS SETTINGS
  var contactForm = $("#contact_form");
  if ($("#contact_form").length) {
    contactForm.validate({
      onfocusout: false,
      onkeyup: false,
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        }
      },
      errorPlacement: function(error, element) {
        error.insertBefore(element);
      },
      messages: {
        name: "What's your name?",
        email: {
          required: "What's your email?",
          email: "Please, enter a valid email"
        }
      },

      highlight: function(element) {
        $(element)
          .text("")
          .addClass("error");
      },

      success: function(element) {
        element.text("").addClass("valid");
      }
    });
  }

  // CONTACT FORM SCRIPT
  if ($("#contact_submit").length) {
    var contactSubmit = $("#contact_submit");
    contactForm.submit(function() {
      // submit the form
      if ($(this).valid()) {
        contactSubmit.button("loading");
        var action = $(this).attr("action");
        $.ajax({
          url: action,
          type: "POST",
          data: {
            contactname: $("#contact_name").val(),
            contactemail: $("#contact_email").val(),
            contactsubject: $("#contact_subject").val(),
            contactmessage: $("#contact_message").val()
          },
          success: function() {
            contactSubmit.button("reset");
            contactSubmit.button("complete");
          },
          error: function() {
            contactSubmit.button("reset");
            contactSubmit.button("error");
          }
        });
        // return false to prevent normal browser submit and page navigation
      } else {
        contactSubmit.button("reset");
      }
      return false;
    });
  }

  // Window Load function
  jQuery(window).on("load", function() {
    // Preloader
    var preeLoad = $("#fadeout");
    preeLoad.fadeOut(1000);
  });
})(jQuery);

//Page cursors

$(window).mousemove(function(e) {
  $(".cursor").css({
    left: e.pageX,
    top: e.pageY
  });
});
$(".cursor-link")
  .on("mouseenter", function() {
    $(".cursor").addClass("active");
  })
  .on("mouseleave", function() {
    $(".cursor").removeClass("active");
  });

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.display = "none";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
