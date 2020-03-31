document.addEventListener('DOMContentLoaded', function() {
  const advantage_One = document.querySelector('.advantages-item-one');
  const advantage_Two = document.querySelector('.advantages-item-two');
  const advantage_Three = document.querySelector('.advantages-item-three');
  const advantage_Four = document.querySelector('.advantages-item-four');

  if (advantage_One) {
    const advantage_Info_One = document.querySelector(
      '.advantages_info-item-one'
    );
    const advantage_Info_Two = document.querySelector(
      '.advantages_info-item-two'
    );
    const advantage_Info_Three = document.querySelector(
      '.advantages_info-item-three'
    );
    const advantage_Info_Four = document.querySelector(
      '.advantages_info-item-four'
    );

    const backgroundImage = document.querySelector('.advantages_info-wrapper');

    advantage_One.addEventListener('click', () => {
      advantage_Two.classList.remove('active');
      advantage_Three.classList.remove('active');
      advantage_Four.classList.remove('active');
      advantage_One.classList.add('active');

      advantage_Info_Two.classList.remove('active');
      advantage_Info_Three.classList.remove('active');
      advantage_Info_Four.classList.remove('active');
      advantage_Info_One.classList.add('active');

      if (window.screen.availWidth > 425) {
        backgroundImage.style.backgroundImage =
          "url('../assets/images/bg-folder/bg-thith-section-1.png')";
      } else {
        backgroundImage.style.backgroundImage =
          "url('../assets/images/bg-folder/mobile-bg-thith-section-1.png')";
      }
    });

    advantage_Two.addEventListener('click', () => {
      advantage_One.classList.remove('active');
      advantage_Three.classList.remove('active');
      advantage_Four.classList.remove('active');
      advantage_Two.classList.add('active');

      advantage_Info_One.classList.remove('active');
      advantage_Info_Three.classList.remove('active');
      advantage_Info_Four.classList.remove('active');
      advantage_Info_Two.classList.add('active');
      if (window.screen.availWidth > 425) {
        backgroundImage.style.backgroundImage =
          "url('../assets/images/bg-folder/bg-thith-section-2.png')";
      } else {
        backgroundImage.style.backgroundImage =
          "url('../assets/images/bg-folder/mobile-bg-thith-section-2.png')";
      }
    });

    advantage_Three.addEventListener('click', () => {
      advantage_Two.classList.remove('active');
      advantage_One.classList.remove('active');
      advantage_Four.classList.remove('active');
      advantage_Three.classList.add('active');

      advantage_Info_One.classList.remove('active');
      advantage_Info_Two.classList.remove('active');
      advantage_Info_Four.classList.remove('active');
      advantage_Info_Three.classList.add('active');

      if (window.screen.availWidth > 425) {
        backgroundImage.style.backgroundImage =
          "url('../assets/images/bg-folder/bg-thith-section-3.png')";
      } else {
        backgroundImage.style.backgroundImage =
          "url('../assets/images/bg-folder/mobile-bg-thith-section-3.png')";
      }
    });

    advantage_Four.addEventListener('click', () => {
      advantage_Two.classList.remove('active');
      advantage_Three.classList.remove('active');
      advantage_One.classList.remove('active');
      advantage_Four.classList.add('active');

      advantage_Info_Two.classList.remove('active');
      advantage_Info_Three.classList.remove('active');
      advantage_Info_One.classList.remove('active');
      advantage_Info_Four.classList.add('active');
      if (window.screen.availWidth > 425) {
        backgroundImage.style.backgroundImage =
          "url('../assets/images/bg-folder/bg-thith-section-4.png')";
      } else {
        backgroundImage.style.backgroundImage =
          "url('../assets/images/bg-folder/mobile-bg-thith-section-4.png')";
      }
    });

    /////////////////////////////////////////

    const work_Select_One = document.querySelector('.work_select-item-one');
    const work_Select_Two = document.querySelector('.work_select-item-two');

    const work_Select_Item_One = document.querySelector(
      '.work_select_info-item-one'
    );
    const work_Select_Item_Two = document.querySelector(
      '.work_select_info-item-two'
    );

    work_Select_One.addEventListener('click', () => {
      work_Select_Two.classList.remove('active');
      work_Select_One.classList.add('active');

      work_Select_Item_Two.classList.remove('active');
      work_Select_Item_One.classList.add('active');
    });

    work_Select_Two.addEventListener('click', () => {
      work_Select_One.classList.remove('active');
      work_Select_Two.classList.add('active');

      work_Select_Item_One.classList.remove('active');
      work_Select_Item_Two.classList.add('active');
    });

    ///////////////////////////////////////////

    const qw_one = document.querySelector('.question-one');
    const qw_two = document.querySelector('.question-two');
    const qw_three = document.querySelector('.question-three');
    const qw_four = document.querySelector('.question-four');
    const qw_five = document.querySelector('.question-five');
    const qw_six = document.querySelector('.question-six');
    const qw_seven = document.querySelector('.question-seven');
    const qw_eight = document.querySelector('.question-eight');
    const qw_nine = document.querySelector('.question-nine');
    const qw_ten = document.querySelector('.question-ten');
    const qw_eleven = document.querySelector('.question-eleven');

    const an_one = document.querySelector('.answer-one');
    const an_two = document.querySelector('.answer-two');
    const an_three = document.querySelector('.answer-three');
    const an_four = document.querySelector('.answer-four');
    const an_five = document.querySelector('.answer-five');
    const an_six = document.querySelector('.answer-six');
    const an_seven = document.querySelector('.answer-seven');
    const an_eight = document.querySelector('.answer-eight');
    const an_nine = document.querySelector('.answer-nine');
    const an_ten = document.querySelector('.answer-ten');
    const an_eleven = document.querySelector('.answer-eleven');

    qw_one.addEventListener('click', () => {
      an_one.classList.toggle('active');
    });

    qw_two.addEventListener('click', () => {
      an_two.classList.toggle('active');
    });

    qw_three.addEventListener('click', () => {
      an_three.classList.toggle('active');
    });

    qw_four.addEventListener('click', () => {
      an_four.classList.toggle('active');
    });

    qw_five.addEventListener('click', () => {
      an_five.classList.toggle('active');
    });

    qw_six.addEventListener('click', () => {
      an_six.classList.toggle('active');
    });

    qw_seven.addEventListener('click', () => {
      an_seven.classList.toggle('active');
    });

    qw_eight.addEventListener('click', () => {
      an_eight.classList.toggle('active');
    });

    qw_nine.addEventListener('click', () => {
      an_nine.classList.toggle('active');
    });

    qw_ten.addEventListener('click', () => {
      an_ten.classList.toggle('active');
    });

    qw_eleven.addEventListener('click', () => {
      an_eleven.classList.toggle('active');
    });

    const myModalVideoOne = document.querySelector('#myModalVideoOne');
    const btnVideoOne = document.querySelector('#myBtnVideoOne');
    const spanVideoOne = document.querySelector('#closeVideoOne');

    btnVideoOne.addEventListener('click', () => {
      myModalVideoOne.style.display = 'block';
    });

    spanVideoOne.addEventListener('click', () => {
      myModalVideoOne.style.display = 'none';
    });

    ////////////////////////////////////////////

    const myModalVideoTwo = document.querySelector('#myModalVideoTwo');
    const btnVideoTwo = document.querySelector('#myBtnVideoTwo');
    const spanVideoTwo = document.querySelector('#closeVideoTwo');

    btnVideoTwo.addEventListener('click', () => {
      myModalVideoTwo.style.display = 'block';
    });

    spanVideoTwo.addEventListener('click', () => {
      myModalVideoTwo.style.display = 'none';
    });

    ////////////////////////////////////////////

    const myModalVideoThree = document.querySelector('#myModalVideoThree');
    const btnVideoThree = document.querySelector('#myBtnVideoThree');
    const spanVideoThree = document.querySelector('#closeVideoThree');

    btnVideoThree.addEventListener('click', () => {
      myModalVideoThree.style.display = 'block';
    });

    spanVideoThree.addEventListener('click', () => {
      myModalVideoThree.style.display = 'none';
    });

    ////////////////////////////////////////////

    const myModalVideoFour = document.querySelector('#myModalVideoFour');
    const btnVideoFour = document.querySelector('#myBtnVideoFour');
    const spanVideoFour = document.querySelector('#closeVideoFour');

    btnVideoFour.addEventListener('click', () => {
      myModalVideoFour.style.display = 'block';
    });

    spanVideoFour.addEventListener('click', () => {
      myModalVideoFour.style.display = 'none';
    });

    ////////////////////////////////////////////

    const myModalVideoFive = document.querySelector('#myModalVideoFive');
    const btnVideoFive = document.querySelector('#myBtnVideoFive');
    const spanVideoFive = document.querySelector('#closeVideoFive');

    btnVideoFive.addEventListener('click', () => {
      myModalVideoFive.style.display = 'block';
    });

    spanVideoFive.addEventListener('click', () => {
      myModalVideoFive.style.display = 'none';
    });

    ////////////////////////////////////////////

    const myModalPhotoZhilet = document.querySelector('#myModalPhotoZhilet');
    const btnPhotoZhilet = document.querySelector('#myBtnPhotoZhilet');
    const spanPhotoZhilet = document.querySelector('#closePhotoZhilet');

    btnPhotoZhilet.addEventListener('click', () => {
      myModalPhotoZhilet.style.display = 'block';
    });

    spanPhotoZhilet.addEventListener('click', () => {
      myModalPhotoZhilet.style.display = 'none';
    });

    ////////////////////////////////////////////

    const myModalGallarey = document.querySelector('#myModalGallarey');

    const btnGallarey = document.querySelector('#myBtnGallarey');
    const btnGallareyTwo = document.querySelector('#myBtnGallareyTwo');
    const btnGallareyThree = document.querySelector('#myBtnGallareyThree');
    const btnGallareyFour = document.querySelector('#myBtnGallareyFour');
    const btnGallareyFive = document.querySelector('#myBtnGallareyFive');
    const btnGallareySix = document.querySelector('#myBtnGallareySix');
    const btnGallareySeven = document.querySelector('#myBtnGallareySeven');
    const btnGallareyEight = document.querySelector('#myBtnGallareyEight');

    const spanGallarey = document.querySelector('#closeGallarey');

    btnGallarey.addEventListener('click', () => {
      myModalGallarey.style.display = 'block';
    });

    btnGallareyTwo.addEventListener('click', () => {
      myModalGallarey.style.display = 'block';
    });

    btnGallareyThree.addEventListener('click', () => {
      myModalGallarey.style.display = 'block';
    });

    btnGallareyFour.addEventListener('click', () => {
      myModalGallarey.style.display = 'block';
    });

    btnGallareyFive.addEventListener('click', () => {
      myModalGallarey.style.display = 'block';
    });

    btnGallareySix.addEventListener('click', () => {
      myModalGallarey.style.display = 'block';
    });

    btnGallareySeven.addEventListener('click', () => {
      myModalGallarey.style.display = 'block';
    });

    btnGallareyEight.addEventListener('click', () => {
      myModalGallarey.style.display = 'block';
    });

    spanGallarey.addEventListener('click', () => {
      myModalGallarey.style.display = 'none';
    });

    ////////////////////////////////////////////

    const myModalPhotoIgor = document.querySelector('#myModalPhotoIgor');
    const btnPhotoIgor = document.querySelector('#myBtnPhotoIgor');
    const btnPhotoIgorTwo = document.querySelector('#myBtnPhotoIgorTwo');
    const spanPhotoIgor = document.querySelector('#closePhotoIgor');

    btnPhotoIgor.addEventListener('click', () => {
      myModalPhotoIgor.style.display = 'block';
    });

    btnPhotoIgorTwo.addEventListener('click', () => {
      myModalPhotoIgor.style.display = 'block';
    });

    spanPhotoIgor.addEventListener('click', () => {
      myModalPhotoIgor.style.display = 'none';
    });

    ////////////////////////////////////////////

    const myModalPolitic = document.querySelector('#myModalPolitic');
    const btnPolitic = document.querySelector('#myBtnPolitic');
    const spanPolitic = document.querySelector('#closePolitic');

    btnPolitic.addEventListener('click', () => {
      myModalPolitic.style.display = 'block';
    });

    spanPolitic.addEventListener('click', () => {
      myModalPolitic.style.display = 'none';
    });

    window.onclick = function(event) {
      switch (event.target) {
        case myModalVideoOne:
          myModalVideoOne.style.display = 'none';
          break;

        case myModalVideoTwo:
          myModalVideoTwo.style.display = 'none';
          break;

        case myModalVideoThree:
          myModalVideoThree.style.display = 'none';
          break;

        case myModalVideoFour:
          myModalVideoFour.style.display = 'none';
          break;

        case myModalPolitic:
          myModalPolitic.style.display = 'none';
          break;

        case myModalVideoFive:
          myModalPolitic.style.display = 'none';
          break;

        case myModalPhotoZhilet:
          myModalPhotoZhilet.style.display = 'none';
          break;

        case myModalPhotoIgor:
          myModalPhotoIgor.style.display = 'none';
          break;

        case myModalGallarey:
          myModalGallarey.style.display = 'none';
          break;

        default:
          break;
      }
    };

    ////////////////////////////////////////////

    const red_round = document.querySelector('#red-round');
    const green_round = document.querySelector('#green-round');
    const blue_round = document.querySelector('#blue-round');
    const orange_round = document.querySelector('#orange-round');

    const red_round_item = document.querySelector('.red-zhilet-item');
    const green_round_item = document.querySelector('.green-zhilet-item');
    const blue_round_item = document.querySelector('.blue-zhilet-item');
    const orange_round_item = document.querySelector('.orange-zhilet-item');

    red_round.addEventListener('click', () => {
      red_round_item.classList.add('active');
      green_round_item.classList.remove('active');
      blue_round_item.classList.remove('active');
      orange_round_item.classList.remove('active');
    });

    green_round.addEventListener('click', () => {
      red_round_item.classList.remove('active');
      green_round_item.classList.add('active');
      blue_round_item.classList.remove('active');
      orange_round_item.classList.remove('active');
    });

    blue_round.addEventListener('click', () => {
      red_round_item.classList.remove('active');
      green_round_item.classList.remove('active');
      blue_round_item.classList.add('active');
      orange_round_item.classList.remove('active');
    });

    orange_round.addEventListener('click', () => {
      red_round_item.classList.remove('active');
      green_round_item.classList.remove('active');
      blue_round_item.classList.remove('active');
      orange_round_item.classList.add('active');
    });

    ////////////////////////////////////////

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
    });

    ////////////////////////////////////

    ///////////////////////////////////////
  }

  const modalSize = document.querySelector('#myModalSize');
  const btnSize = document.querySelector('#myBtnSize');
  const spanSize = document.querySelector('#closeSize');

  const modalParachute = document.querySelector('#myModalParachute');
  const btnParachute = document.querySelector('#myBtnParachute');
  const spanParachute = document.querySelector('#closeParachute');

  const modalSizeFirstVideo = document.querySelector('#mySizeFirstVideo');
  const btnSizeFirstVideo = document.querySelector('#myBtnSizeFirstVideo');
  const spanSizeFirstVideo = document.querySelector('#closeSizeFirstVideo');

  const modalSizeSecondVideo = document.querySelector('#mySizeSecondVideo');
  const btnSizeSecondVideo = document.querySelector('#myBtnSizeSecondVideo');
  const spanSizeSecondVideo = document.querySelector('#closeSizeSecondVideo');

  const modalSizeGallarey = document.querySelector('#mySizeGallarey');
  const btnSizeGallarey = document.querySelector('#myBtnSizeGallarey');
  const btnSizeGallareyTwo = document.querySelector('#myBtnSizeGallareyTwo');
  const spanSizeGallarey = document.querySelector('#closeSizeGallarey');

  if (modalSize) {
    const myModalPolitic = document.querySelector('#myModalPolitic');
    const btnPolitic = document.querySelector('#myBtnPolitic');
    const spanPolitic = document.querySelector('#closePolitic');

    btnPolitic.addEventListener('click', () => {
      myModalPolitic.style.display = 'block';
    });

    spanPolitic.addEventListener('click', () => {
      myModalPolitic.style.display = 'none';
    });

    // Size Btn
    btnSize.addEventListener('click', () => {
      modalSize.style.display = 'block';
    });

    spanSize.addEventListener('click', () => {
      modalSize.style.display = 'none';
    });

    // How Work Parachute
    btnParachute.addEventListener('click', () => {
      modalParachute.style.display = 'block';
    });

    spanParachute.addEventListener('click', () => {
      modalParachute.style.display = 'none';
    });

    // Modal First Video
    btnSizeFirstVideo.addEventListener('click', () => {
      modalSizeFirstVideo.style.display = 'block';
    });

    spanSizeFirstVideo.addEventListener('click', () => {
      modalSizeFirstVideo.style.display = 'none';
    });

    // Modal Second Video
    btnSizeSecondVideo.addEventListener('click', () => {
      modalSizeSecondVideo.style.display = 'block';
    });

    spanSizeSecondVideo.addEventListener('click', () => {
      modalSizeSecondVideo.style.display = 'none';
    });

    // Modal Gallarey
    btnSizeGallarey.addEventListener('click', () => {
      modalSizeGallarey.style.display = 'block';
    });

    btnSizeGallareyTwo.addEventListener('click', () => {
      modalSizeGallarey.style.display = 'block';
    });

    spanSizeGallarey.addEventListener('click', () => {
      modalSizeGallarey.style.display = 'none';
    });

    window.onclick = function(event) {
      switch (event.target) {
        case modalParachute:
          modalParachute.style.display = 'none';
          break;

        case myModalPolitic:
          myModalPolitic.style.display = 'none';
          break;

        case modalSize:
          modalSize.style.display = 'none';
          break;

        case modalSizeFirstVideo:
          modalSizeFirstVideo.style.display = 'none';
          break;

        case modalSizeSecondVideo:
          modalSizeSecondVideo.style.display = 'none';
          break;

        case modalSizeGallarey:
          modalSizeGallarey.style.display = 'none';
          break;

        default:
          break;
      }
    };

    //////////////////////////////////

    ///////////////////////////
  }
});

(function() {
  function roundToPlace(num, place) {
    return Math.round(num * Math.pow(10, place)) / Math.pow(10, place);
  }

  $('.js-loupe').each(function() {
    var $this = $(this);
    var $image = $('.js-loupe-image', $this);
    var imgBigUrl = $image.attr('data-image-full');
    var $loupe = $('.js-loupe-element', $this).css(
      'background-image',
      'url(' + imgBigUrl + ')'
    );
    var loupeSize = [$loupe.width(), $loupe.height()];
    var bigImgSize = [0, 0];
    var zoomLvl = 1;
    var bigImg = document.createElement('img');
    bigImg.onload = function() {
      bigImgSize = [bigImg.width, bigImg.height];
    };
    bigImg.src = imgBigUrl;

    $this.on('mousemove', function(e) {
      var positionRatio = [
        Math.round((e.offsetX / $image.width()) * 1000) / 1000,
        Math.round((e.offsetY / $image.height()) * 1000) / 1000,
      ];

      var offset = [
        loupeSize[0] * positionRatio[0] - loupeSize[0] / 2,
        loupeSize[1] * positionRatio[1] - loupeSize[1] / 2,
      ];

      var positionPercent = [
        'calc(' + positionRatio[0] * 100 + '% - ' + offset[0] + 'px)',
        'calc(' + positionRatio[1] * 100 + '% - ' + offset[1] + 'px)',
      ];

      $loupe.css({
        'background-position': positionPercent.join(' '),
        top: e.offsetY,
        left: e.offsetX,
      });
    });

    $this.on('mousewheel DOMMouseScroll', function(event) {
      event.preventDefault();
      if (
        event.originalEvent.wheelDelta > 0 ||
        event.originalEvent.detail < 0
      ) {
        if (zoomLvl < 1.5) {
          zoomLvl += 0.1;
          $loupe.css(
            'background-size',
            bigImgSize[0] * zoomLvl + 'px ' + bigImgSize[1] * zoomLvl + 'px'
          );
        }
      } else {
        if (zoomLvl > 0.5) {
          zoomLvl -= 0.1;
          $loupe.css(
            'background-size',
            bigImgSize[0] * zoomLvl + 'px ' + bigImgSize[1] * zoomLvl + 'px'
          );
        }
      }
    });
  });
})();

function startTimer(h, m, s, ms, isInit = true) {
  if (isInit) {
    var my_timer_hour = document.getElementById('timer-hour');
    var my_timer_minute = document.getElementById('timer-minute');
    var my_timer_second = document.getElementById('timer-second');
    var my_timer_ms = document.getElementById('timer-ms');

    // var time = my_timer.innerHTML;
    // var arr = time.split(':');

    var h = my_timer_hour.innerHTML;

    var m = my_timer_minute.innerHTML;

    var s = my_timer_second.innerHTML;

    var ms = my_timer_ms.innerHTML;
  }

  if (ms <= 50) {
    if (s == 0) {
      if (m == 0) {
        if (h == 0) {
          document.getElementById('hide-after-timer').style.display = 'none';
          document.getElementById('hide-after-timer-arrow').style.display =
            'none';
          document.getElementById('timer-ms').innerHTML = '00';
          return;
        }

        h--;
        m = 60;
        if (h < 10) h = '0' + h;
      }

      m--;
      if (m < 10) m = '0' + m;
      s = 59;
    }

    s--;
    if (s < 10) s = '0' + s;
    ms = 989;
  } else ms = ms - 50;

  if (ms < 100) {
    msText = ms;
  } else {
    msText = (ms / 10).toFixed(0);
  }

  document.getElementById('timer-hour').innerHTML = h;
  document.getElementById('timer-minute').innerHTML = m;
  document.getElementById('timer-second').innerHTML = s;
  document.getElementById('timer-ms').innerHTML = msText;

  setTimeout(function() {
    startTimer(h, m, s, ms, false);
  }, 50);
}

/////////////////////////////////////////

function startTimerOne(m, s, ms, isInit = true) {
  if (isInit) {
    var my_timer_minute = document.getElementById('timer-minute');
    var my_timer_second = document.getElementById('timer-second');
    var my_timer_ms = document.getElementById('timer-ms');

    // var time = my_timer.innerHTML;
    // var arr = time.split(':');

    var m = my_timer_minute.innerHTML;

    var s = my_timer_second.innerHTML;

    var ms = my_timer_ms.innerHTML;
  }

  if (ms <= 50) {
    if (s == 0) {
      if (m == 0) {
        document.getElementById('top_bar').style.display = 'none';
        document.getElementById('timer-ms').innerHTML = '00';
        return;
      }

      m--;
      if (m < 10) m = '0' + m;
      s = 59;
    }

    s--;
    if (s < 10) s = '0' + s;
    ms = 989;
  } else ms = ms - 50;

  if (ms < 100) {
    msText = ms;
  } else {
    msText = (ms / 10).toFixed(0);
  }

  document.getElementById('timer-minute').innerHTML = m;
  document.getElementById('timer-second').innerHTML = s;
  document.getElementById('timer-ms').innerHTML = msText;

  setTimeout(function() {
    startTimerOne(m, s, ms, false);
  }, 50);
}

/////////////////////////////////////////

function FirthImg() {
  document.getElementById('myImg').src =
    'assets/images/images-folder/gallarey-bottom-popup/gallarey-ph-6.jpg';
}

function SecondImg() {
  document.getElementById('myImg').src =
    'assets/images/images-folder/gallarey-bottom-popup/gallarey-ph-7.jpg';
}

function normalImg() {
  document.getElementById('myImg').src =
    'assets/images/images-folder/red-zhilet.png';
}



////////////////////////////////////////////

function normalImgFirst() {
  document.getElementById('myImgFirst').src =
    'assets/images/images-folder/red-zhilet.png';
}

function GreenImg() {
  document.getElementById('myImgFirst').src =
    'assets/images/images-folder/zhilet-color/1-green-second-page.jpg';
}

function GrayImg() {
  document.getElementById('myImgFirst').src =
    'assets/images/images-folder/zhilet-color/6-gray-second-page.jpg';
}

function YellowImg() {
  document.getElementById('myImgFirst').src =
    'assets/images/images-folder/zhilet-color/5-yellow-second-page.jpg';
}

function PinkImg() {
  document.getElementById('myImgFirst').src =
    'assets/images/images-folder/zhilet-color/5-pink-second-page.jpg';
}

function BlueImg() {
  document.getElementById('myImgFirst').src =
    'assets/images/images-folder/zhilet-color/3-blue-second-page.jpg';
}

function OrangeImg() {
  document.getElementById('myImgFirst').src =
    'assets/images/images-folder/zhilet-color/2-orange-second-page.jpg';
}

