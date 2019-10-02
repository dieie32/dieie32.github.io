window.addEventListener("load", () => {

    const widthSelect = document.querySelector("#secectorOne");
    const widthSelectBasic = document.querySelector("#secectorOne");
    const widthSelectBot = document.querySelector("#secectorOne");



    const material = document.querySelector("#secectorLayerOne");
    const materialBasic = document.querySelector("#secectorLayerTwo");
    const materialBot = document.querySelector("#secectorLayerThree");



    const materialBasicHeight = document.querySelector("#secectorLayerTwo");
    const materialHeight = document.querySelector("#secectorLayerThree");



    const resultHolderOne = document.querySelector("#resultOne");
    const resultHolderHeight = document.querySelector("#resultHeight");



    const cbxOne = document.querySelector("#cbxOne");
    const cbxTwo = document.querySelector("#cbxTwo");




    const priceMapLayers = {
        lion: {
            1070: 55,
            1120: 60,
            1310: 80,
            1395: 95,
            1495: 110,
            1595: 125
        },
        bavo: {
            1070: 90,
            1120: 100,
            1310: 140,
            1395: 160,
            1495: 180,
            1595: 200
        },
        vovn: {
            1070: 150,
            1120: 170,
            1310: 230,
            1395: 270,
            1495: 300,
            1595: 340
        },
        koko: {
            1070: 220,
            1120: 240,
            1310: 330,
            1395: 380,
            1495: 440,
            1595: 490
        },

        pino: {
            1070: 210,
            1120: 235,
            1310: 315,
            1395: 365,
            1495: 415,
            1595: 470
        },
        voil: {
            1070: 175,
            1120: 190,
            1310: 250,
            1395: 290,
            1495: 340,
            1595: 380
        },
        late: {
            1070: 1050,
            1120: 1080,
            1310: 1580,
            1395: 1840,
            1495: 2110,
            1595: 2370
        }
    };


    const priceMapLayersBasic = {
        nezBlock: {
            1070: 1620,
            1120: 1820,
            1310: 2400,
            1395: 2790,
            1495: 3180,
            1595: 3570
        },
        latBlock: {
            1070: 6555,
            1120: 6960,
            1310: 9280,
            1395: 10830,
            1495: 14110,
            1595: 14805
        },
        pinBlock: {
            1070: 1560,
            1120: 1755,
            1310: 2340,
            1395: 2730,
            1495: 3120,
            1595: 3510
        }
    };





    const priceMapLayersHeight = {
        lion: 1,
        bavo: 1,
        vovn: 1,
        koko: 1,
        pino: 2,
        voil: 2,
        late: 3
    };


    const priceMapLayersBasicHeight = {
        nezBlock: 14,
        latBlock: 16,
        pinBlock: 15
    };














    const priceMapLayersKids = {
        lion: 30,
        bavo: 45,
        vovn: 80,
        koko: 115
    };

    const priceMapLayersBasicKids = {
        pino: 260,
        voil: 175,
        late: 780
    };








    let priceTop = 55;
    let priceBasic = 1620;
    let priceBot = 55;
    let price = 0;



    const getPriceTop = (material, size) => {
        priceTop = priceMapLayers[material][size];
        setPrice();
    };

    const getPriceBasic = (material, size) => {
        priceBasic = priceMapLayersBasic[material][size];
        setPrice();
    };

    const getPriceBot = (material, size) => {
        priceBot = priceMapLayers[material][size];
        setPrice();
    };

    const setPrice = () => {
        price = priceTop + priceBasic + priceBot + Number(document.querySelector('#secectorOne').value) + additionalPriceTop;
        resultHolderOne.value = price;
    }











    material.addEventListener("change", e => {
        const selectedWidth =
            widthSelect.options[widthSelect.selectedIndex].value;
        getPriceTop(e.target.value, selectedWidth);
    });


    materialBasic.addEventListener("change", e => {
        const selectedWidthBasic =
            widthSelectBasic.options[widthSelectBasic.selectedIndex].value;
        getPriceBasic(e.target.value, selectedWidthBasic);
    });


    materialBot.addEventListener("change", e => {
        const selectedWidthBot =
            widthSelectBot.options[widthSelectBot.selectedIndex].value;
        getPriceBot(e.target.value, selectedWidthBot);
    });







    widthSelect.addEventListener("change", e => {
        const selectedMaterial =
            material.options[material.selectedIndex].value;
        getPriceTop(selectedMaterial, e.target.value);
    });


    widthSelectBasic.addEventListener("change", e => {
        const selectedMaterialBasic =
            materialBasic.options[materialBasic.selectedIndex].value;
        getPriceBasic(selectedMaterialBasic, e.target.value);
    });


    widthSelectBot.addEventListener("change", e => {
        const selectedMaterialBot =
            materialBot.options[materialBot.selectedIndex].value;
        getPriceBot(selectedMaterialBot, e.target.value);
    });


    let additionalPriceTop = 0;


    const additionalPrice = () => {
      getPriceTop();
      additionalPriceTop = priceTop + additionalPriceTop;
      setPrice();
    };


});

    const addblock = (el) => {
        var p = document.createElement("p");
        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent + " +";
        el.parentNode.appendChild(p);
        additionalPrice();
    };






function change() {
    var radOne = document.getElementById('radOne');
    var radTwo = document.getElementById('radTwo');

    if (radOne.checked) {
        var block1 = document.querySelectorAll("#block1");
        for (var div of block1)
            div.style.display = 'block';
        var block2 = document.querySelectorAll("#block2");
        for (var div of block2)
            div.style.display = 'none';
    }
    if (radTwo.checked) {
        var block1 = document.querySelectorAll("#block1");
        for (var div of block1)
            div.style.display = 'none';
        var block2 = document.querySelectorAll("#block2");
        for (var div of block2)
            div.style.display = 'block';
    }
}







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






























































// function calc() {


// var radOne = document.getElementById('radOne');
// var radTwo = document.getElementById('radTwo');

// if (radOne.checked) {


// if ( document.getElementById('secectorOne').value == 1070 ) {

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 0 ) {
//      var selectorResultOne = 55;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 1 ) {
//      var selectorResultOne = 90;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 2 ) {
//      var selectorResultOne = 150;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 3 ) {
//      var selectorResultOne = 220;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 4 ) {
//      var selectorResultOne = 210;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 5 ) {
//      var selectorResultOne = 175;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 6 ) {
//      var selectorResultOne = 1050;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1120 ) {

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 0 ) {
//      var selectorResultOne = 60;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 1 ) {
//      var selectorResultOne = 100;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 2 ) {
//      var selectorResultOne = 170;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 3 ) {
//      var selectorResultOne = 240;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 4 ) {
//      var selectorResultOne = 235;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 5 ) {
//      var selectorResultOne = 190;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 6 ) {
//      var selectorResultOne = 1180;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1310 ) {

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 0 ) {
//      var selectorResultOne = 80;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 1 ) {
//      var selectorResultOne = 140;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 2 ) {
//      var selectorResultOne = 230;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 3 ) {
//      var selectorResultOne = 330;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 4 ) {
//      var selectorResultOne = 315;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 5 ) {
//      var selectorResultOne = 250;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 6 ) {
//      var selectorResultOne = 1580;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1395 ) {

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 0 ) {
//      var selectorResultOne = 95;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 1 ) {
//      var selectorResultOne = 160;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 2 ) {
//      var selectorResultOne = 270;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 3 ) {
//      var selectorResultOne = 380;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 4 ) {
//      var selectorResultOne = 365;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 5 ) {
//      var selectorResultOne = 290;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 6 ) {
//      var selectorResultOne = 1840;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1495 ) {

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 0 ) {
//      var selectorResultOne = 110;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 1 ) {
//      var selectorResultOne = 180;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 2 ) {
//      var selectorResultOne = 300;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 3 ) {
//      var selectorResultOne = 440;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 4 ) {
//      var selectorResultOne = 415;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 5 ) {
//      var selectorResultOne = 340;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 6 ) {
//      var selectorResultOne = 2110;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1595 ) {

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 0 ) {
//      var selectorResultOne = 125;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 1 ) {
//      var selectorResultOne = 200;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 2 ) {
//      var selectorResultOne = 340;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 3 ) {
//      var selectorResultOne = 490;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 4 ) {
//      var selectorResultOne = 470;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 5 ) {
//      var selectorResultOne = 380;
//   }

//   if ( document.getElementById('secectorLayerOne').selectedIndex == 6 ) {
//      var selectorResultOne = 2370;
//   }
// }




// if ( document.getElementById('secectorOne').value == 1070 ) {

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 0 ) {
//      var selectorResultTwo = 1620;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 1 ) {
//      var selectorResultTwo = 6555;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 2 ) {
//      var selectorResultTwo = 1560;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1120 ) {

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 0 ) {
//      var selectorResultTwo = 1820;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 1 ) {
//      var selectorResultTwo = 6960;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 2 ) {
//      var selectorResultTwo = 1755;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1310 ) {

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 0 ) {
//      var selectorResultTwo = 2400;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 1 ) {
//      var selectorResultTwo = 9280;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 2 ) {
//      var selectorResultTwo = 2340;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1395 ) {

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 0 ) {
//      var selectorResultTwo = 2790;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 1 ) {
//      var selectorResultTwo = 10830;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 2 ) {
//      var selectorResultTwo = 2730;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1495 ) {

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 0 ) {
//      var selectorResultTwo = 3180;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 1 ) {
//      var selectorResultTwo = 14110;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 2 ) {
//      var selectorResultTwo = 3120;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1595 ) {

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 0 ) {
//      var selectorResultTwo = 3570;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 1 ) {
//      var selectorResultTwo = 14805;
//   }

//   if ( document.getElementById('secectorLayerTwo').selectedIndex == 2 ) {
//      var selectorResultTwo = 3510;
//   }
// }




// if ( document.getElementById('secectorOne').value == 1070 ) {

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 0 ) {
//       var selectorResultThree = 55;
//       var selectorHight = 0.5;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 1 ) {
//       var selectorResultThree = 90;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 2 ) {
//       var selectorResultThree = 150;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 3 ) {
//       var selectorResultThree = 220;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 4 ) {
//       var selectorResultThree = 210;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 5 ) {
//       var selectorResultThree = 175;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 6 ) {
//       var selectorResultThree = 1050;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1120 ) {

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 0 ) {
//       var selectorResultThree = 60;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 1 ) {
//       var selectorResultThree = 100;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 2 ) {
//       var selectorResultThree = 170;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 3 ) {
//       var selectorResultThree = 240;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 4 ) {
//       var selectorResultThree = 235;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 5 ) {
//       var selectorResultThree = 190;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 6 ) {
//       var selectorResultThree = 1180;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1310 ) {

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 0 ) {
//       var selectorResultThree = 80;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 1 ) {
//       var selectorResultThree = 140;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 2 ) {
//       var selectorResultThree = 230;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 3 ) {
//       var selectorResultThree = 330;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 4 ) {
//       var selectorResultThree = 315;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 5 ) {
//       var selectorResultThree = 250;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 6 ) {
//       var selectorResultThree = 1580;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1395 ) {

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 0 ) {
//       var selectorResultThree = 95;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 1 ) {
//       var selectorResultThree = 160;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 2 ) {
//       var selectorResultThree = 270;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 3 ) {
//       var selectorResultThree = 380;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 4 ) {
//       var selectorResultThree = 365;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 5 ) {
//       var selectorResultThree = 290;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 6 ) {
//       var selectorResultThree = 1840;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1495 ) {

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 0 ) {
//       var selectorResultThree = 110;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 1 ) {
//       var selectorResultThree = 180;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 2 ) {
//       var selectorResultThree = 300;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 3 ) {
//       var selectorResultThree = 440;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 4 ) {
//       var selectorResultThree = 415;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 5 ) {
//       var selectorResultThree = 340;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 6 ) {
//       var selectorResultThree = 2110;
//   }
// }
// if ( document.getElementById('secectorOne').value == 1595 ) {

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 0 ) {
//       var selectorResultThree = 125;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 1 ) {
//       var selectorResultThree = 200;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 2 ) {
//       var selectorResultThree = 340;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 3 ) {
//       var selectorResultThree = 490;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 4 ) {
//       var selectorResultThree = 470;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 5 ) {
//       var selectorResultThree = 380;
//   }

//   if ( document.getElementById('secectorLayerThree').selectedIndex == 6 ) {
//       var selectorResultThree = 2370;
//   }
// }

// hightResult = 
//   selectorHight +



// result = 
//   selectorResultOne + 
//   selectorResultTwo +
//   selectorResultThree +
//   Number(document.getElementById('secectorOne').value);


// cbxTwo = document.getElementById('cbxTwo');
// cbxThree = document.getElementById('cbxThree');

// if (cbxTwo.checked) {
//  result = result + 40;
// }

// if (cbxThree.checked) {
//  result = result + 20;
// }

// }


//   document.getElementById('result').value = result;
// }

// if (radTwo.checked) { }