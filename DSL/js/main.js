const advantage_One = document.querySelector(".advantages-item-one");
const advantage_Two = document.querySelector(".advantages-item-two");
const advantage_Three = document.querySelector(".advantages-item-three");
const advantage_Four = document.querySelector(".advantages-item-four");

const advantage_Info_One = document.querySelector(".advantages_info-item-one");
const advantage_Info_Two = document.querySelector(".advantages_info-item-two");
const advantage_Info_Three = document.querySelector(
  ".advantages_info-item-three"
);
const advantage_Info_Four = document.querySelector(
  ".advantages_info-item-four"
);

const backgroundImage = document.querySelector(".advantages_info-wrapper");

advantage_One.addEventListener("click", () => {
  advantage_Two.classList.remove("active");
  advantage_Three.classList.remove("active");
  advantage_Four.classList.remove("active");
  advantage_One.classList.add("active");

  advantage_Info_Two.classList.remove("active");
  advantage_Info_Three.classList.remove("active");
  advantage_Info_Four.classList.remove("active");
  advantage_Info_One.classList.add("active");

  if (window.screen.availWidth > 425) {
    backgroundImage.style.backgroundImage =
      "url('../assets/images/bg-thith-section-1.png')";
  } else {
    backgroundImage.style.backgroundImage =
      "url('../assets/images/mobile-bg-thith-section-1.png')";
  }
});

advantage_Two.addEventListener("click", () => {
  advantage_One.classList.remove("active");
  advantage_Three.classList.remove("active");
  advantage_Four.classList.remove("active");
  advantage_Two.classList.add("active");

  advantage_Info_One.classList.remove("active");
  advantage_Info_Three.classList.remove("active");
  advantage_Info_Four.classList.remove("active");
  advantage_Info_Two.classList.add("active");
  if (window.screen.availWidth > 425) {
    backgroundImage.style.backgroundImage =
      "url('../assets/images/bg-thith-section-2.png')";
  } else {
    backgroundImage.style.backgroundImage =
      "url('../assets/images/mobile-bg-thith-section-2.png')";
  }
});

advantage_Three.addEventListener("click", () => {
  advantage_Two.classList.remove("active");
  advantage_One.classList.remove("active");
  advantage_Four.classList.remove("active");
  advantage_Three.classList.add("active");

  advantage_Info_One.classList.remove("active");
  advantage_Info_Two.classList.remove("active");
  advantage_Info_Four.classList.remove("active");
  advantage_Info_Three.classList.add("active");

  if (window.screen.availWidth > 425) {
    backgroundImage.style.backgroundImage =
      "url('../assets/images/bg-thith-section-3.png')";
  } else {
    backgroundImage.style.backgroundImage =
      "url('../assets/images/mobile-bg-thith-section-3.png')";
  }
});

advantage_Four.addEventListener("click", () => {
  advantage_Two.classList.remove("active");
  advantage_Three.classList.remove("active");
  advantage_One.classList.remove("active");
  advantage_Four.classList.add("active");

  advantage_Info_Two.classList.remove("active");
  advantage_Info_Three.classList.remove("active");
  advantage_Info_One.classList.remove("active");
  advantage_Info_Four.classList.add("active");
  if (window.screen.availWidth > 425) {
    backgroundImage.style.backgroundImage =
      "url('../assets/images/bg-thith-section-4.png')";
  } else {
    backgroundImage.style.backgroundImage =
      "url('../assets/images/mobile-bg-thith-section-4.png')";
  }
});

/////////////////////////////////////////

const work_Select_One = document.querySelector(".work_select-item-one");
const work_Select_Two = document.querySelector(".work_select-item-two");

const work_Select_Item_One = document.querySelector(
  ".work_select_info-item-one"
);
const work_Select_Item_Two = document.querySelector(
  ".work_select_info-item-two"
);

work_Select_One.addEventListener("click", () => {
  work_Select_Two.classList.remove("active");
  work_Select_One.classList.add("active");

  work_Select_Item_Two.classList.remove("active");
  work_Select_Item_One.classList.add("active");
});

work_Select_Two.addEventListener("click", () => {
  work_Select_One.classList.remove("active");
  work_Select_Two.classList.add("active");

  work_Select_Item_One.classList.remove("active");
  work_Select_Item_Two.classList.add("active");
});

///////////////////////////////////////////

const question = Array.from(document.querySelectorAll(".question"));
const answer = Array.from(document.querySelectorAll(".question"));

answer &&
  answer.forEach(answer =>
    question.addEventListener("click", () => {
      answer.classList.toggle("active");
    })
  );
