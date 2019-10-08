window.addEventListener("load", () => {

    const widthSelect = document.querySelector("#secectorOne");
    const widthSelectBasic = document.querySelector("#secectorOne");
    const widthSelectBot = document.querySelector("#secectorOne");

    const material = document.querySelector("#secectorLayerOne");
    const materialBasic = document.querySelector("#secectorLayerTwo");
    const materialBot = document.querySelector("#secectorLayerThree");

    const materialTopKids = document.querySelector("#secectorLayerOneKids");
    const materialBasicKids = document.querySelector("#secectorLayerTwoKids");
    const materialBotKids = document.querySelector("#secectorLayerThreeKids");

    const materialHeightTop = document.querySelector("#secectorLayerOne");
    const materialBasicHeight = document.querySelector("#secectorLayerTwo");
    const materialHeightBot = document.querySelector("#secectorLayerThree");

    const materialHeightKidsTop = document.querySelector("#secectorLayerOneKids");
    const materialBasicHeightKids = document.querySelector("#secectorLayerTwoKids");
    const materialHeightKidsBot = document.querySelector("#secectorLayerThreeKids");

    const resultHolderOne = document.querySelector("#resultOne");
    const resultHolderOneKids = document.querySelector("#resultOneKids");
    const resultHolderHeight = document.querySelector("#resultHeight");
    const resultHolderHeightKids = document.querySelector("#resultHeightKids");

    const cbxOne = document.querySelector("#cbxOne");
    const cbxTwo = document.querySelector("#cbxTwo");


    // PRICE OF STANDART

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
        price = priceTop + priceBasic + priceBot + Number(document.querySelector('#secectorOne').value);
        resultHolderOne.value = price + "грн";
    }

    material.addEventListener("change", e => {
        const selectedWidth =
            widthSelect.options[widthSelect.selectedIndex].value;
        getPriceTop(e.target.value, selectedWidth);
        addblock(e, selectedWidth);
    });

    materialBasic.addEventListener("change", e => {
        const selectedWidthBasic =
            widthSelectBasic.options[widthSelectBasic.selectedIndex].value;
        getPriceBasic(e.target.value, selectedWidthBasic);
        addblockBasic(e, selectedWidthBasic);
    });

    materialBot.addEventListener("change", e => {
        const selectedWidthBot =
            widthSelectBot.options[widthSelectBot.selectedIndex].value;
        getPriceBot(e.target.value, selectedWidthBot);
        addblockBottom(e, selectedWidthBot);
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

    // END PRICE OF STANDART

    // HEIGHT OF STANDART
    const priceMapLayersHeight = {
        lion: 0.5,
        bavo: 0.5,
        vovn: 0.5,
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


    let heightLayerTop = 0.5;
    let heightLayerBot = 0.5;
    let heightBasic = 14;
    let height = 0;


    const getHeightTop = (height) => {
        heightLayerTop = priceMapLayersHeight[height];
        setHight();
    };

    const getHeightBasicTop = (height) => {
        heightBasic = priceMapLayersBasicHeight[height];
        setHight();
    };

    const getHeightBot = (height) => {
        heightLayerBot = priceMapLayersHeight[height];
        setHight();
    };

    const setHight = () => {
        height = heightLayerTop + heightLayerBot + heightBasic;
        resultHolderHeight.value = height;
    }

    materialHeightTop.addEventListener("change", e => {
        getHeightBot(e.target.value);
    });

    materialHeightBot.addEventListener("change", e => {
        getHeightTop(e.target.value);
    });


    materialBasicHeight.addEventListener("change", e => {
        getHeightBasicTop(e.target.value);
    });

    // END HEIGHT OF STANDART

    // PRICE OF KIDS
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


    let priceTopKids = 30;
    let priceBasicKids = 260;
    let priceBotKids = 30;
    let priceKids = 0;

    const getPriceTopKids = (material) => {
        priceTopKids = priceMapLayersKids[material];
        setPriceKids();
    };

    const getPriceBasicKids = (material) => {
        priceBasicKids = priceMapLayersBasicKids[material];
        setPriceKids();
    };

    const getPriceBotKids = (material) => {
        priceBotKids = priceMapLayersKids[material];
        setPriceKids();
    };

    const setPriceKids = () => {
        priceKids = priceTopKids + priceBasicKids + priceBotKids + 500;
        resultHolderOneKids.value = priceKids + "грн";
    }


    materialTopKids.addEventListener("change", e => {
        getPriceTopKids(e.target.value);
        addblockKids(e);
    });

    materialBasicKids.addEventListener("change", e => {
        getPriceBasicKids(e.target.value);
    });

    materialBotKids.addEventListener("change", e => {
        getPriceBotKids(e.target.value);
        addblockKidsBot(e);
    });
    // END PRICE OF KIDS


    // HEIGHT OF KIDS
    const priceMapLayersKidsHeight = {
        lion: 0.5,
        bavo: 0.5,
        vovn: 0.5,
        koko: 1
    };

    const priceMapLayersBasicKidsHeight = {
        pino: 5,
        voil: 4,
        late: 6
    };


    let heightLayerTopKids = 0.5;
    let heightLayerBotKids = 0.5;
    let heightBasicKids = 5;
    let heightKids = 0;


    const getHeightTopKids = (height) => {
        heightLayerTopKids = priceMapLayersKidsHeight[height];
        setHightKids();
    };

    const getHeightBasicTopKids = (height) => {
        heightBasicKids = priceMapLayersBasicKidsHeight[height];
        setHightKids();
    };

    const getHeightBotKids = (height) => {
        heightLayerBotKids = priceMapLayersKidsHeight[height];
        setHightKids();
    };

    const setHightKids = () => {
        heightKids = heightLayerTopKids + heightLayerBotKids + heightBasicKids;
        resultHolderHeightKids.value = heightKids;
    }

    materialHeightKidsBot.addEventListener("change", e => {
        getHeightBotKids(e.target.value);
    });

    materialHeightKidsTop.addEventListener("change", e => {
        getHeightTopKids(e.target.value);
    });

    materialBasicHeightKids.addEventListener("change", e => {
        getHeightBasicTopKids(e.target.value);
    });

    // END HEIGHT OF KIDS

















    let layer = 0;
    let additionalPriceTop = 0;

    const additionalPrice = (e, selectedWidth) => {
        getPriceTop(e.target.value, selectedWidth);
        additionalPriceTop = priceTop + additionalPriceTop;
        resultHolderOne.value = price + additionalPriceTop + "грн";
    };

    const deleteLayer = () => {
        layer = priceTop;
        price = price - layer;
        resultHolderOne.value = price + "грн";
    };

    function addblock(e, selectedWidth) {
        var el = material;
        var elW = widthSelect;
        var p = document.createElement("p");
        var btn = document.createElement('button');

        btn.textContent = "\u2613";
        btn.addEventListener('click', (e) => {
            const p = e.target.parentNode;
            p.parentNode.removeChild(p);
            deleteLayer();
        });

        var src = document.querySelector(".layers-top");
        var img = document.createElement("img");
        img.src = "img/layers/" + el.value + ".png";
        src.appendChild(img);

        additionalPrice(e, selectedWidth);

        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent;

        p.appendChild(btn);
        el.parentNode.appendChild(p);
    }

    // END addblock TOP








    function addblockBasic(e, selectedWidthBasic) {
        var el = materialBasic;
    
        var src = document.querySelector(".layers-basic");
        var img = document.createElement("img");
        img.src = "img/layers/" + el.value + ".png";
        src.appendChild(img);
    }

    // END addblock BASIC






    let layerBot = 0;
    let additionalPriceBot = 0;

    const additionalPriceBottom = (e, selectedWidth) => {
        getPriceTop(e.target.value, selectedWidth);
        additionalPriceBot = priceBot + additionalPriceBot;
        resultHolderOne.value = price + additionalPriceBot + "грн";
    };

    const deleteLayerBot = () => {
        layerBot = priceBot;
        price = price - layerBot;
        resultHolderOne.value = price + "грн";
        document.getElementById(img.id).parentNode.removeChild(document.getElementById(img.id));

    };

    function addblockBottom(e, selectedWidth) {
        var el = materialBot;
        var elW = widthSelectBot;
        var p = document.createElement("p");
        var btn = document.createElement('button');

        btn.textContent = "\u2613";
        btn.addEventListener('click', (e) => {
            const p = e.target.parentNode;
            p.parentNode.removeChild(p);
            deleteLayerBot();
        });

        var src = document.querySelector(".layers-bottom");
        var img = document.createElement("img");
        img.src = "img/layers/" + el.value + ".png";
        img.id = el.value;
        src.appendChild(img);

        additionalPriceBottom(e, selectedWidth);

        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent;

        p.appendChild(btn);
        el.parentNode.appendChild(p);
    }

    // END addblock BOTTOM











    let layerKids = 0;
    let additionalPriceTopKids = 0;

    const additionalPriceKids = (e) => {
        getPriceTopKids(e.target.value);
        additionalPriceTopKids = priceTopKids + additionalPriceTopKids;
        resultHolderOneKids.value = priceKids + additionalPriceTopKids + "грн";
    };

    const deleteLayerKids = () => {
        layerKids = priceTopKids;
        priceKids = priceKids - layerKids;
        resultHolderOneKids.value = priceKids + "грн";
    };

    function addblockKids(e) {
        var el = materialTopKids;
        var p = document.createElement("p");
        var btn = document.createElement('button');

        btn.textContent = "\u2613";
        btn.addEventListener('click', (e) => {
            const p = e.target.parentNode;
            p.parentNode.removeChild(p);
            deleteLayerKids();
        });

        var src = document.querySelector(".layers-top-kids");
        var img = document.createElement("img");
        img.src = "img/layers/" + el.value + ".png";
        src.appendChild(img);

        additionalPriceKids(e);

        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent;

        p.appendChild(btn);
        el.parentNode.appendChild(p);
    }

    // END addblockKids TOP





    let layerKidsBot = 0;
    let additionalPriceTopKidsBot = 0;

    const additionalPriceKidsBot = (e) => {
        getPriceBotKids(e.target.value);
        additionalPriceTopKidsBot = priceBotKids + additionalPriceTopKidsBot;
        resultHolderOneKids.value = priceKids + additionalPriceTopKidsBot + "грн";
    };

    const deleteLayerKidsBot = () => {
        layerKidsBot = priceBotKids;
        priceKids = priceKids - layerKidsBot;
        resultHolderOneKids.value = priceKids + "грн";
    };

    function addblockKidsBot(e) {
        var el = materialBotKids;
        var p = document.createElement("p");
        var btn = document.createElement('button');

        btn.textContent = "\u2613";
        btn.addEventListener('click', (e) => {
            const p = e.target.parentNode;
            p.parentNode.removeChild(p);
            deleteLayerKidsBot();
        });




        var src = document.querySelector(".layers-bottom-kids");
        var img = document.createElement("img");
        img.src = "img/layers/" + el.value + ".png";
        src.appendChild(img);




        additionalPriceKidsBot(e);

        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent;

        p.appendChild(btn);
        el.parentNode.appendChild(p);
    }

    // END addblockKids TOP





});
















// CHANGE VISIBLE OF MATRAC
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
// END CHANGE VISIBLE OF MATRAC








// MODAL WINDOW
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// END OF MODAL WINDOW


var container = document.querySelector(".container");
btn.onclick = function() {
      for (var div of container)
      container.classList.add("toggled");
    modal.style.display = "block";
}