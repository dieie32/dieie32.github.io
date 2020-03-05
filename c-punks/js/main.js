// ----------------------------- MAIN SLIDER -----------------------------
class Slider {
  constructor() {
    this.bindAll();

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
<<<<<<< HEAD
    this.el = document.querySelector(".js-slider");
    this.slides = [...this.el.querySelectorAll(".js-slide")];
    this.bullets = [...this.el.querySelectorAll(".js-slider-bullet")];

    this.xDown = null;
    this.yDown = null;
=======
    this.handleTouchMove = this.handleTouchMove.bind(this);

    this.el = document.querySelector(".js-slider");
    this.slides = [...this.el.querySelectorAll(".js-slide")];
    this.bullets = [...this.el.querySelectorAll(".js-slider-bullet")];
>>>>>>> 6396763875f521a4786421924a222e53c3725f71

    this.data = {
      current: 0,
      next: 1,
      previous: 6,
      total: 6
    };

    this.state = {
      animating: false,
      text: false,
      initial: true
    };

    this.init();
  }

  bindAll() {
    ["nextSlide", "previousSlide"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );
  }

  setStyles() {
    this.slides.forEach((slide, index) => {
      if (index === 0) return;

      TweenMax.set(slide, { autoAlpha: 0 });
    });

    //////////////////////////////////
    this.bullets.forEach((bullet, index) => {
      if (index === 0) return;

      const txt = bullet.querySelector(".js-slider-bullet__text");

      TweenMax.set(txt, {
        alpha: 0.25
      });
    });
  }

  createMesh() {
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        dispPower: { type: "f", value: 0.0 },
        intensity: { type: "f", value: 0.5 },
        res: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight)
        }
      }
    });
  }

  transitionNext() {
    TweenMax.to(this.mat.uniforms.dispPower, 2.5, {
      value: 1,
      ease: Expo.easeInOut,
      onComplete: () => {
        this.mat.uniforms.dispPower.value = 0.0;
        this.state.animating = false;
      }
    });
    // console.log(this.data);
    const current = this.slides[this.data.current];
    const next = this.slides[this.data.next];

    const currentText = current.querySelectorAll(".js-slider__text-line div");
    const nextText = next.querySelectorAll(".js-slider__text-line div");

    const currentBullet = this.bullets[this.data.current];
    const nextBullet = this.bullets[this.data.next];

    const currentBulletTxt = currentBullet.querySelectorAll(
      ".js-slider-bullet__text"
    );
    const nextBulletTxt = nextBullet.querySelectorAll(
      ".js-slider-bullet__text"
    );

    const tl = new TimelineMax({ paused: true });

    if (this.state.initial) {
      TweenMax.to(".js-scroll", 1.5, {
        yPercent: 100,
        alpha: 0,
        ease: Power4.easeInOut
      });

      this.state.initial = false;
    }

    tl.to(
      currentBulletTxt,
      1.5,
      {
        alpha: 0.25,
        ease: Linear.easeNone
      },
      0
    );

    if (currentText) {
      tl.fromTo(
        currentText,
        2,
        {
          yPercent: 0
        },
        {
          yPercent: -300,
          ease: Power4.easeInOut
        },
        0
      );
    }

    tl.set(current, {
      autoAlpha: 0
    }).set(
      next,
      {
        autoAlpha: 1
      },
      1
    );

    if (nextText) {
      tl.fromTo(
        nextText,
        2,
        {
          yPercent: 100
        },
        {
          yPercent: 0,
          ease: Power4.easeOut
        },
        1.5
      );
    }

    tl.to(
      nextBulletTxt,
      1.5,
      {
        alpha: 1,
        ease: Linear.easeNone
      },
      1
    );

    tl.play();
  }

  nextSlide() {
    if (this.state.animating) return;

    this.state.animating = true;

    this.transitionNext();

    this.data.current =
      this.data.current === this.data.total ? 0 : this.data.current + 1;
    this.data.next =
      this.data.current === this.data.total ? 0 : this.data.current + 1;

    if (this.data.current === 0) {
      this.data.previous = this.data.total;
    } else {
      this.data.previous = this.data.current - 1;
    }
  }

  transitionPrevious() {
    TweenMax.to(this.mat.uniforms.dispPower, 2.5, {
      value: 1,
      ease: Expo.easeInOut,
      onComplete: () => {
        this.mat.uniforms.dispPower.value = 0.0;
        this.state.animating = false;
      }
    });

    const current = this.slides[this.data.current];
    const previous = this.slides[this.data.previous];
<<<<<<< HEAD
=======
    // console.info(current," ",previous);
>>>>>>> 6396763875f521a4786421924a222e53c3725f71

    const currentText = current.querySelectorAll(".js-slider__text-line div");
    const previousText = previous.querySelectorAll(".js-slider__text-line div");

    const currentBullet = this.bullets[this.data.current];
    const previousBullet = this.bullets[this.data.previous];

    const currentBulletTxt = currentBullet.querySelectorAll(
      ".js-slider-bullet__text"
    );
    const previousBulletTxt = previousBullet.querySelectorAll(
      ".js-slider-bullet__text"
    );

    const tl = new TimelineMax({ paused: true });

    if (this.state.initial) {
      TweenMax.to(".js-scroll", 1.5, {
        yPercent: 100,
        alpha: 0,
        ease: Power4.easeInOut
      });

      this.state.initial = false;
    }

    tl.to(
      currentBulletTxt,
      1.5,
      {
        alpha: 0.25,
        ease: Linear.easeNone
      },
      0
    );

    if (currentText) {
      tl.fromTo(
        currentText,
        2,
        {
          yPercent: 0
        },
        {
          yPercent: -300,
          ease: Power4.easeInOut
        },
        0
      );
    }

    tl.set(current, {
      autoAlpha: 0
    }).set(
      previous,
      {
        autoAlpha: 1
<<<<<<< HEAD
      },
      1
    );

    if (previousText) {
      tl.fromTo(
        previousText,
        2,
        {
          yPercent: 100
        },
        {
          yPercent: 0,
          ease: Power4.easeOut
        },
        1.5
      );
    }

    tl.to(
      previousBulletTxt,
      1.5,
      {
        alpha: 1,
        ease: Linear.easeNone
=======
>>>>>>> 6396763875f521a4786421924a222e53c3725f71
      },
      1
    );

<<<<<<< HEAD
=======
    if (previousText) {
      tl.fromTo(
        previousText,
        2,
        {
          yPercent: 100
        },
        {
          yPercent: 0,
          ease: Power4.easeOut
        },
        1.5
      );
    }

    tl.to(
      previousBulletTxt,
      1.5,
      {
        alpha: 1,
        ease: Linear.easeNone
      },
      1
    );

>>>>>>> 6396763875f521a4786421924a222e53c3725f71
    tl.play();
  }

  previousSlide() {
    if (this.state.animating) return;

    this.state.animating = true;

    this.transitionPrevious();

    this.data.current =
      this.data.current === 0 ? this.data.total : this.data.current - 1;
    this.data.previous =
      this.data.current === 0 ? this.data.total : this.data.current - 1;
    this.data.next =
      this.data.current === this.data.total ? 0 : this.data.current + 1;
  }

  listeners() {
    window.addEventListener("wheel", this.handleWheel, { passive: true });
<<<<<<< HEAD

    window.addEventListener('touchstart', function(ev) {
      this.xDown = ev.touches[0].clientX;
      this.yDown = ev.touches[0].clientY;
    }.bind(this), false);

    window.addEventListener('touchmove', function(ev) {
      this.handleTouchMove(ev);
    }.bind(this), false);
  }

  handleWheel() {
    if (event.deltaY) {
      let eventTarget = event.deltaY;
      if (eventTarget > 0) {
        this.nextSlide();
      } else {
        this.previousSlide();
      }
    }
  }

  handleTouchMove(ev) {
    if ( ! this.xDown || ! this.yDown ) {
      return;
    }
    
    let xUp = ev.touches[0].clientX;
    let yUp = ev.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;

    if ( Math.abs( this.xDiff ) < Math.abs( this.yDiff ) ) {
      if ( this.yDiff > 0 ) {
        this.onUp(this.nextSlide);
      } else {
        this.onDown(this.previousSlide);
      }
    }

    this.xDown = null;
    this.yDown = null;
  }

  onUp(callback) {
    this.onUp = callback;

    return this;
  }

  onDown(callback) {
    this.onDown = callback;

    return this;
  }

  init() {
    this.createMesh();
    this.setStyles();
    this.listeners();
  }
}

const slider = new Slider();
// ----------------------------- END MAIN SLIDER -----------------------------

// ----------------------------- SECOND SLIDER -----------------------------
class Slider_Two {
  constructor() {
    this.bindAll();

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.el = document.querySelector(".js-slider_Two");
    this.slides = [...this.el.querySelectorAll(".js-slide_Two")];
    this.bullets = [...this.el.querySelectorAll(".js-slider_Two-bullet")];

    this.xDown = null;
    this.yDown = null;

    this.data = {
      current: 0,
      next: 1,
      previous: 5,
      total: 5
    };

    this.state = {
      animating: false,
      text: false,
      initial: true
    };

    this.init();
  }

  bindAll() {
    ["nextSlide", "previousSlide"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );
  }

  setStyles() {
    this.slides.forEach((slide, index) => {
      if (index === 0) return;

      TweenMax.set(slide, { autoAlpha: 0 });
=======
    // window.addEventListener("touchstart", this.handleTouchStart, {
    //   passive: true
    // });
    // window.addEventListener("touchend", this.handleTouchEnd, { passive: true });
    window.addEventListener("touchmove", this.handleTouchMove, {
      passive: true
>>>>>>> 6396763875f521a4786421924a222e53c3725f71
    });
  }

  handleTouchMove() {
    // alert("touchMove");
    var delta;
    if (!event.originalEvent.touches[0].pageY) {
      return false;
    }

    resizableBlock(delta);
    console.info(delta)
  }

  handleWheel() {
    let eventTarget = event.deltaY;
    if (eventTarget > 0) {
      this.nextSlide();
    } else {
      this.previousSlide();
    }
  }

  init() {
    this.createMesh();
    this.setStyles();
    this.listeners();
  }
}

const slider = new Slider();
// ----------------------------- END MAIN SLIDER -----------------------------

// ----------------------------- SECOND SLIDER -----------------------------
class Slider_Two {
  constructor() {
    this.bindAll();

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.el = document.querySelector(".js-slider_Two");
    this.slides = [...this.el.querySelectorAll(".js-slide_Two")];
    this.bullets = [...this.el.querySelectorAll(".js-slider_Two-bullet")];

    this.data = {
      current: 0,
      next: 1,
      previous: 5,
      total: 5
    };

    this.state = {
      animating: false,
      text: false,
      initial: true
    };

<<<<<<< HEAD
=======
    this.init();
  }

  bindAll() {
    ["nextSlide", "previousSlide"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );
  }

  setStyles() {
    this.slides.forEach((slide, index) => {
      if (index === 0) return;

      TweenMax.set(slide, { autoAlpha: 0 });
    });

>>>>>>> 6396763875f521a4786421924a222e53c3725f71
    //////////////////////////////////
    this.bullets.forEach((bullet, index) => {
      if (index === 0) return;

      const txt = bullet.querySelector(".js-slider_Two-bullet__text");

      TweenMax.set(txt, {
        alpha: 0.25
      });
    });
  }

  createMesh() {
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        dispPower: { type: "f", value: 0.0 },
        intensity: { type: "f", value: 0.5 },
        res: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight)
        }
      }
    });
  }

  transitionNext() {
    TweenMax.to(this.mat.uniforms.dispPower, 2.5, {
      value: 1,
      ease: Expo.easeInOut,
      onComplete: () => {
        this.mat.uniforms.dispPower.value = 0.0;
        this.state.animating = false;
      }
    });
<<<<<<< HEAD
=======
    // console.log(this.data);
>>>>>>> 6396763875f521a4786421924a222e53c3725f71
    const current = this.slides[this.data.current];
    const next = this.slides[this.data.next];

    const currentText = current.querySelectorAll(
      ".js-slider_Two__text-line div"
    );
    const nextText = next.querySelectorAll(".js-slider_Two__text-line div");

    const currentBullet = this.bullets[this.data.current];
    const nextBullet = this.bullets[this.data.next];

    const currentBulletTxt = currentBullet.querySelectorAll(
      ".js-slider_Two-bullet__text"
    );
    const nextBulletTxt = nextBullet.querySelectorAll(
      ".js-slider_Two-bullet__text"
    );

    const tl = new TimelineMax({ paused: true });

    if (this.state.initial) {
      TweenMax.to(".js-scroll", 1.5, {
        yPercent: 100,
        alpha: 0,
        ease: Power4.easeInOut
      });

      this.state.initial = false;
    }

    tl.to(
      currentBulletTxt,
      1.5,
      {
        alpha: 0.25,
        ease: Linear.easeNone
      },
      0
    );

    if (currentText) {
      tl.fromTo(
        currentText,
        2,
        {
          yPercent: 0
        },
        {
          yPercent: -300,
          ease: Power4.easeInOut
        },
        0
      );
    }

    tl.set(current, {
      autoAlpha: 0
    }).set(
      next,
      {
        autoAlpha: 1
      },
      1
    );

    if (nextText) {
      tl.fromTo(
        nextText,
        2,
        {
          yPercent: 100
        },
        {
          yPercent: 0,
          ease: Power4.easeOut
        },
        1.5
      );
    }

    tl.to(
      nextBulletTxt,
      1.5,
      {
        alpha: 1,
        ease: Linear.easeNone
      },
      1
    );

    tl.play();
  }

  nextSlide() {
    if (this.state.animating) return;

    this.state.animating = true;

    this.transitionNext();

    this.data.current =
      this.data.current === this.data.total ? 0 : this.data.current + 1;
    this.data.next =
      this.data.current === this.data.total ? 0 : this.data.current + 1;

    if (this.data.current === 0) {
      this.data.previous = this.data.total;
    } else {
      this.data.previous = this.data.current - 1;
    }
  }

  transitionPrevious() {
    TweenMax.to(this.mat.uniforms.dispPower, 2.5, {
      value: 1,
      ease: Expo.easeInOut,
      onComplete: () => {
        this.mat.uniforms.dispPower.value = 0.0;
        this.state.animating = false;
      }
    });

    const current = this.slides[this.data.current];
    const previous = this.slides[this.data.previous];
    // console.info(current," ",previous);

    const currentText = current.querySelectorAll(
      ".js-slider_Two__text-line div"
    );
    const previousText = previous.querySelectorAll(
      ".js-slider_Two__text-line div"
    );

    const currentBullet = this.bullets[this.data.current];
    const previousBullet = this.bullets[this.data.previous];

    const currentBulletTxt = currentBullet.querySelectorAll(
      ".js-slider_Two-bullet__text"
    );
    const previousBulletTxt = previousBullet.querySelectorAll(
      ".js-slider_Two-bullet__text"
    );

    const tl = new TimelineMax({ paused: true });

    if (this.state.initial) {
      TweenMax.to(".js-scroll", 1.5, {
        yPercent: 100,
        alpha: 0,
        ease: Power4.easeInOut
      });

      this.state.initial = false;
    }

    tl.to(
      currentBulletTxt,
      1.5,
      {
        alpha: 0.25,
        ease: Linear.easeNone
      },
      0
    );

    if (currentText) {
      tl.fromTo(
        currentText,
        2,
        {
          yPercent: 0
        },
        {
          yPercent: -300,
          ease: Power4.easeInOut
        },
        0
      );
    }

    tl.set(current, {
      autoAlpha: 0
    }).set(
      previous,
      {
        autoAlpha: 1
      },
      1
    );

    if (previousText) {
      tl.fromTo(
        previousText,
        2,
        {
          yPercent: 100
        },
        {
          yPercent: 0,
          ease: Power4.easeOut
        },
        1.5
      );
    }

    tl.to(
      previousBulletTxt,
      1.5,
      {
        alpha: 1,
        ease: Linear.easeNone
      },
      1
    );

    tl.play();
  }

  previousSlide() {
    if (this.state.animating) return;

    this.state.animating = true;

    this.transitionPrevious();

    this.data.current =
      this.data.current === 0 ? this.data.total : this.data.current - 1;
    this.data.previous =
      this.data.current === 0 ? this.data.total : this.data.current - 1;
    this.data.next =
      this.data.current === this.data.total ? 0 : this.data.current + 1;
  }

  listeners() {
    window.addEventListener("wheel", this.handleWheel, { passive: true });
<<<<<<< HEAD

    window.addEventListener('touchstart', function(ev) {
      this.xDown = ev.touches[0].clientX;
      this.yDown = ev.touches[0].clientY;
    }.bind(this), false);

    window.addEventListener('touchmove', function(ev) {
      this.handleTouchMove(ev);
    }.bind(this), false);
  }

  handleWheel() {
=======
  }

  handleWheel() {
    console.log(this.data);
>>>>>>> 6396763875f521a4786421924a222e53c3725f71
    let eventTarget = event.deltaY;
    if (eventTarget > 0) {
      this.nextSlide();
    } else {
      this.previousSlide();
    }
<<<<<<< HEAD
  }

  handleTouchMove(ev) {
    if ( ! this.xDown || ! this.yDown ) {
      return;
    }

    let xUp = ev.touches[0].clientX;
    let yUp = ev.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;

    if ( Math.abs( this.xDiff ) < Math.abs( this.yDiff ) ) {
      if ( this.yDiff > 0 ) {
        this.onUp(this.previousSlide);
      } else {
        this.onDown(this.nextSlide);
      }
    }

    this.xDown = null;
    this.yDown = null;
  }

  onUp(callback) {
    this.onUp = callback;

    return this;
  }

  onDown(callback) {
    this.onDown = callback;

    return this;
=======
>>>>>>> 6396763875f521a4786421924a222e53c3725f71
  }

  init() {
    this.createMesh();
    this.setStyles();
    this.listeners();
  }
}

const slider_Two = new Slider_Two();
// ----------------------------- END SECOND SLIDER -----------------------------

// ----------------------------- CURSOR -----------------------------
var cursor = $(".cursor"),
  follower = $(".cursor-follower");

var posX = 0,
  posY = 0;

var mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 12,
        top: posY - 12
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});

$(document).on("mousemove", function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

$(".link").on("mouseenter", function() {
  cursor.addClass("active");
  follower.addClass("active");
});
$(".link").on("mouseleave", function() {
  cursor.removeClass("active");
  follower.removeClass("active");
});
// ----------------------------- END CURSOR -----------------------------

// ----------------------------- PRELOADER -----------------------------
var cnt = document.getElementById("count");
var percent = cnt.innerText;
var interval;

interval = setInterval(function() {
  percent++;
  cnt.innerHTML = percent;
  if (percent == 100) {
    clearInterval(interval);

    TweenMax.to(".box", 2, {
      top: "-110%",
      ease: Expo.easeInOut
    });

    TweenMax.fromTo(
      ".percent-title div",
      2,
      {
        yPercent: 0
      },
      {
        yPercent: -100,
        ease: Power4.easeInOut
      },
      2
    );

    TweenMax.from(".logo", 3, {
      delay: 0.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".phrase", 2, {
      delay: 0.6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".navigation", 4, {
      delay: 0.6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from(".email", 4, {
      delay: 0.6,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.fromTo(
      ".percent div",
      1,
      {
        yPercent: 0
      },
      {
        yPercent: -100,
        ease: Power4.easeInOut
      },
      1
    );
  }
}, 30);

TweenMax.fromTo(
  ".percent div",
  2,
  {
    yPercent: 100
  },
  {
    yPercent: 0,
    ease: Power4.easeOut
  },
  1
);

TweenMax.fromTo(
  ".percent-title div",
  2,
  {
    yPercent: 100
  },
  {
    yPercent: 0,
    ease: Power4.easeInOut
  },
  1
);
// ----------------------------- END PRELOADER -----------------------------

// ----------------------------- START ABOUT NAV HOME + STUDIO -----------------------------
let studioHome = document.querySelector(".studio_home");

studioHome.addEventListener("click", function() {
  TweenMax.to(".slider__text", 2, { top: "30%", ease: Power4.easeInOut });
  TweenMax.to(".slider__nav", 2, { bottom: "0%", ease: Power4.easeInOut });
  TweenMax.to(".slider_Two__text", 2, { top: "110%", ease: Power4.easeInOut });
  TweenMax.to(".slider_Two__nav", 2, {
    bottom: "-25%",
    ease: Power4.easeInOut
  });
  TweenMax.to(".background-contact", 2, {
    bottom: "0%",
    ease: Power4.easeInOut
  });
});

// ------------------------------
let studioNav = document.querySelector(".studio_nav");

studioNav.addEventListener("click", function() {
  TweenMax.to(".slider__text", 2, { top: "110%", ease: Power4.easeInOut });
  TweenMax.to(".slider__nav", 2, { bottom: "-25%", ease: Power4.easeInOut });
  TweenMax.to(".slider_Two__text", 2, { top: "30%", ease: Power4.easeInOut });
  TweenMax.to(".slider_Two__nav", 2, { bottom: "0%", ease: Power4.easeInOut });
  TweenMax.to(".background-contact", 2, {
    bottom: "-110%",
    ease: Power4.easeInOut
  });
});
// ----------------------------- END ABOUT NAV -----------------------------
