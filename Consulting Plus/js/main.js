// JS

$(".speaker-wrapper-mobile").slick({
  slidesToShow: 1
});

document.addEventListener("DOMContentLoaded", function() {
  $(".entranceRight").css("opacity", 0);

  $(".entranceRight").waypoint(
    function() {
      $(".entranceRight").addClass("animated fadeInLeft");
    },
    { offset: "10%" }
  );

  $(".entranceLeft").css("opacity", 0);

  $(".entranceLeft").waypoint(
    function() {
      $(".entranceLeft").addClass("animated fadeInLeft");
    },
    { offset: "50%" }
  );

  $(".entranceUp").css("opacity", 0);

  $(".entranceUp").waypoint(
    function() {
      $(".entranceUp").addClass("animated fadeInUp");
    },
    { offset: "50%" }
  );

  $(".entranceUp").css("opacity", 0);

  $(".entranceUp").waypoint(
    function() {
      $(".entranceUp").addClass("animated fadeInUp");
    },
    { offset: "50%" }
  );

  $(".entranceLeft2").css("opacity", 0);

  $(".entranceLeft2").waypoint(
    function() {
      $(".entranceLeft2").addClass("animated fadeInLeft");
    },
    { offset: "50%" }
  );

  $(".entranceUp2").css("opacity", 0);

  $(".entranceUp2").waypoint(
    function() {
      $(".entranceUp2").addClass("animated fadeInLeft");
    },
    { offset: "50%" }
  );

  $(".entranceUp3").css("opacity", 0);

  $(".entranceUp3").waypoint(
    function() {
      $(".entranceUp3").addClass("animated fadeInLeft");
    },
    { offset: "50%" }
  );

  $(".fadeInLeft2").css("opacity", 0);

  $(".fadeInLeft2").waypoint(
    function() {
      $(".fadeInLeft2").addClass("animated fadeInLeft");
    },
    { offset: "50%" }
  );

  const toggleButton = document.querySelector("#toggle");
  const toggleMenu = document.querySelector(".menu-box");
  const toggleItemsOne = document.querySelector(".toggle-item");
  const toggleItemsTwo = document.querySelector(".toggle-item-two");
  const toggleItemsThree = document.querySelector(".toggle-item-three");

  const closeMenuBox = Array.from(document.querySelectorAll(".menu-box li a"));

  toggleButton &&
    toggleButton.addEventListener("click", e => {
      e.preventDefault();
      if (toggleMenu.classList.contains("active")) {
        toggleButton.classList.remove("on");
        toggleMenu.classList.remove("active");
        toggleItemsOne.classList.remove("active");
        toggleItemsTwo.classList.remove("active");
        toggleItemsThree.classList.remove("active");
      } else {
        toggleMenu.classList.add("active");
        toggleButton.classList.add("on");
        toggleItemsOne.classList.add("active");
        toggleItemsTwo.classList.add("active");
        toggleItemsThree.classList.add("active");
      }
    });

  closeMenuBox &&
    closeMenuBox.forEach(btn =>
      btn.addEventListener("click", function() {
        toggleButton.classList.remove("on");
        toggleMenu.classList.remove("active");
        toggleItemsOne.classList.remove("active");
        toggleItemsTwo.classList.remove("active");
        toggleItemsThree.classList.remove("active");
      })
    );
});
