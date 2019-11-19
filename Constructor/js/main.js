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
    const cbxThree = document.querySelector("#cbxThree");

    checkedCheckboxTwo = 0;
    checkedCheckbox = 0;
    checkedCheckboxThree = 0;

    cbxOne.addEventListener("change", e => {
        if (cbxOne.checked) {
            checkedCheckbox = 40;

            setPrice();
        } else {
            checkedCheckbox = 0;
            setPrice();
        }
    });



    cbxTwo.addEventListener("change", e => {
        if (cbxTwo.checked) {
            checkedCheckboxTwo = 20;
            setPrice();
        } else {
            checkedCheckboxTwo = 0;
            setPrice();
        }
    });

    cbxThree.addEventListener("change", e => {
        if (cbxThree.checked) {
            checkedCheckboxThree = 20;
            setPriceKids();
        } else {
            checkedCheckboxThree = 0;
            setPriceKids();
        }
    });







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



    let priceTop = 0;
    let priceBasic = 0;
    let priceBot = 0;
    let price = 0;

    const getPriceTop = (material, size) => {
        priceTop = priceMapLayers[material][size];
        // console.log(priceTop);
    };

    const getPriceBasic = (material, size) => {
        priceBasic = priceMapLayersBasic[material][size];
    };

    const getPriceBot = (material, size) => {
        priceBot = priceMapLayers[material][size];
    };

    const setPrice = () => {
        price = additionalPriceTop + additionalPriceBasicFunc + checkedCheckbox + checkedCheckboxTwo + additionalPriceBottom + Number(document.querySelector('#secectorOne').value);
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
        // getPriceBasic(e.target.value, selectedWidthBasic);
        addblockBasic(e, selectedWidthBasic);
    });

    materialBot.addEventListener("change", e => {
        const selectedWidthBot =
            widthSelectBot.options[widthSelectBot.selectedIndex].value;
        // getPriceBot(e.target.value, selectedWidthBot);
        addblockBottom(e, selectedWidthBot);
    });

    widthSelect.addEventListener("change", e => {
        const selectedMaterial =
            material.options[material.selectedIndex].value;
        // getPriceTop(selectedMaterial, e.target.value);
        priceWidthCalc(e, selectedMaterial);
    });

    widthSelectBasic.addEventListener("change", e => {
        const selectedMaterialBasic =
            materialBasic.options[materialBasic.selectedIndex].value;
        // getPriceBasic(selectedMaterialBasic, e.target.value);
        // priceWidthCalc(e, selectedMaterialBasic);
    });

    widthSelectBot.addEventListener("change", e => {
        const selectedMaterialBot =
            materialBot.options[materialBot.selectedIndex].value;
        // getPriceBot(selectedMaterialBot, e.target.value);
        // priceWidthCalc(e, selectedMaterialBot);
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
    };

    const getHeightBasicTop = (height) => {
        heightBasic = priceMapLayersBasicHeight[height];
    };

    const getHeightBot = (height) => {
        heightLayerBot = priceMapLayersHeight[height];
    };

    const setHight = () => {
        height = additionalHeightTop + additionalHeightBasic + additionalHeightBottom;
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
    };

    const getPriceBasicKids = (material) => {
        priceBasicKids = priceMapLayersBasicKids[material];
    };

    const getPriceBotKids = (material) => {
        priceBotKids = priceMapLayersKids[material];
    };

    const setPriceKids = () => {
        priceKids = checkedCheckboxThree + additionalPriceTopKids + additionalPriceBotKids + additionalPriceBasicFuncKids + 500;
        resultHolderOneKids.value = priceKids + "грн";
    }

    materialTopKids.addEventListener("change", e => {
        getPriceTopKids(e.target.value);
        addblockKids(e);
    });

    materialBasicKids.addEventListener("change", e => {
        getPriceBasicKids(e.target.value);
        addblockBasicKids(e);
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

    let heightLayerTopKids = 0;
    let heightLayerBotKids = 0;
    let heightBasicKids = 0;
    let heightKids = 0;

    const getHeightTopKids = (height) => {
        heightLayerTopKids = priceMapLayersKidsHeight[height];
    };

    const getHeightBasicTopKids = (height) => {
        heightBasicKids = priceMapLayersBasicKidsHeight[height];
    };

    const getHeightBotKids = (height) => {
        heightLayerBotKids = priceMapLayersKidsHeight[height];
    };

    const setHightKids = () => {
        heightKids = additionalHeightTopKids + additionalHeightBotKids + additionalHeightBasicKids;
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






    // START addblockKids TOP
    var layerGroupKids = [{ layers_top: [] },
        { layers_basic: [] },
        { layers_bottom: [] }
    ];
    var q = 0;
    let additionalPriceTopKids = 0;
    let additionalHeightTopKids = 0;
    let deleteTopPriceKids = 0;
    let deleteHeightTopKids = 0;


    const additionalPriceKids = (e, selectedWidth, layerPriceKids) => {
        additionalPriceTopKids = priceTopKids + additionalPriceTopKids;
        setPriceKids();
    };

    // Додає Висоту
    const additionalHeightKids = (e, layerHeightKids) => {
        additionalHeightTopKids = layerHeightKids + additionalHeightTopKids;
        setHightKids();
    };

    // Видаляє Ціну + Висоту
    const deleteTopLayerKids = (i, img) => {
        deleteTopPriceKids = layerGroupKids[0].layers_top[i].price;
        additionalPriceTopKids = additionalPriceTopKids - deleteTopPriceKids;
        deleteHeightTopKids = layerGroupKids[0].layers_top[i].height;
        additionalHeightTopKids = additionalHeightTopKids - deleteHeightTopKids;
        deleteImgTopKids(img);
        setPriceKids();
        setHightKids();
    };

    // Видаляє Фотку
    const deleteImgTopKids = (img) => {
        let attrImg = img.getAttribute("data-img");
        console.log(attrImg);
        img.remove();
    }



    function addblockKids(e) {
        getPriceTopKids(e.target.value);
        getHeightTopKids(e.target.value, height);
        var el = materialTopKids;
        var p = document.createElement("p");
        var btn = document.createElement('button');
        var src = document.querySelector(".layers-top-kids");
        var img = document.createElement("img");
        btn.textContent = "\u2613";




        layerGroupKids[0].layers_top.push({
            name_item: el.value,
            name: el.value + q,
            img: "img/layers/" + el.value + ".png",
            price: priceTopKids,
            height: heightLayerTopKids,
        });




        var att = document.createAttribute("data-material");
        att.value = el.value + q;
        p.setAttributeNode(att);

        // Фото
        var attImg = document.createAttribute("data-img");
        attImg.value = el.value + q;
        img.setAttributeNode(attImg);
        img.src = layerGroupKids[0].layers_top[q].img;




        // Викликає Функцію Додавання Висоти
        var layerHeightKids = layerGroupKids[0].layers_top[q].height;
        additionalHeightKids(e, layerHeightKids);

        // Викликає Функцію Додавання Ціни
        var layerPriceKids = layerGroupKids[0].layers_top[q].price;
        additionalPriceKids(e, layerPriceKids);


        ///////////////

        btn.addEventListener('click', (e) => {
            const p = e.target.parentNode;
            p.parentNode.removeChild(p);

            let attr = p.getAttribute("data-material");
            var length = layerGroupKids[0].layers_top.length
            for (var i = 0; i < length; i++) {
                if (attr == layerGroupKids[0].layers_top[i].name) {
                    deleteTopLayerKids(i, img);
                }
            }
        });



        //////////////
        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent;
        p.appendChild(btn);
        src.appendChild(img);
        el.parentNode.appendChild(p);
        el.value = '';
        q++;
    }
    // END addblockKids TOP












    // START addblockKids BOT

    var t = 0;
    let additionalPriceBotKids = 0;
    let additionalHeightBotKids = 0;
    let deleteBotPriceKids = 0;
    let deleteHeightBotKids = 0;


    const additionalPriceKidsBot = (e, layerPriceKidsBot) => {
        additionalPriceBotKids = layerPriceKidsBot + additionalPriceBotKids;
        setPriceKids();
    };

    // Додає Висоту
    const additionalHeightKidsBot = (e, layerHeightKidsBot) => {
        additionalHeightBotKids = layerHeightKidsBot + additionalHeightBotKids;
        setHightKids();
    };

    // Видаляє Ціну + Висоту
    const deleteBotLayerKids = (i, img) => {
        deleteBotPriceKids = layerGroupKids[2].layers_bottom[i].price;
        additionalPriceBotKids = additionalPriceBotKids - deleteBotPriceKids;
        deleteHeightBotKids = layerGroupKids[2].layers_bottom[i].height;
        additionalHeightBotKids = additionalHeightBotKids - deleteHeightBotKids;
        deleteImgBotKids(img);
        setPriceKids();
        setHightKids();
    };

    // Видаляє Фотку
    const deleteImgBotKids = (img) => {
        let attrImg = img.getAttribute("data-img");
        console.log(attrImg);
        img.remove();
    }



    function addblockKidsBot(e) {
        getPriceBotKids(e.target.value);
        getHeightBotKids(e.target.value, height);
        var el = materialBotKids;
        var p = document.createElement("p");
        var btn = document.createElement('button');
        var src = document.querySelector(".layers-bottom-kids");
        var img = document.createElement("img");
        btn.textContent = "\u2613";




        layerGroupKids[2].layers_bottom.push({
            name_item: el.value,
            name: el.value + t,
            img: "img/layers/" + el.value + ".png",
            price: priceBotKids,
            height: heightLayerBotKids,
        });


        console.log(layerGroupKids[2].layers_bottom)

        var att = document.createAttribute("data-material");
        att.value = el.value + t;
        p.setAttributeNode(att);

        // Фото
        var attImg = document.createAttribute("data-img");
        attImg.value = el.value + t;
        img.setAttributeNode(attImg);
        img.src = layerGroupKids[2].layers_bottom[t].img;




        // Викликає Функцію Додавання Висоти
        var layerHeightKidsBot = layerGroupKids[2].layers_bottom[t].height;
        additionalHeightKidsBot(e, layerHeightKidsBot);

        // Викликає Функцію Додавання Ціни
        var layerPriceKidsBot = layerGroupKids[2].layers_bottom[t].price;
        additionalPriceKidsBot(e, layerPriceKidsBot);


        ///////////////

        btn.addEventListener('click', (e) => {
            const p = e.target.parentNode;
            p.parentNode.removeChild(p);

            let attr = p.getAttribute("data-material");
            var length = layerGroupKids[2].layers_bottom.length
            for (var i = 0; i < length; i++) {
                if (attr == layerGroupKids[2].layers_bottom[i].name) {
                    deleteBotLayerKids(i, img);
                }
            }
        });



        //////////////
        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent;
        p.appendChild(btn);
        src.appendChild(img);
        el.parentNode.appendChild(p);
        el.value = '';
        t++;
    }
    // END addblockKids BOT








    // START addblockKids BASIC
    var y = 0;
    var additionalPriceBasicFuncKids = 0;
    var additionalHeightBasicKids = 0;

    const additionalPriceBasicKids = (e, layerPriceBasicKids) => {
        additionalPriceBasicFuncKids = 0;
        additionalPriceBasicFuncKids = layerPriceBasicKids + additionalPriceBasicFuncKids;
        setPriceKids();
    };

    const additionalHeighteBasicKids = (e, layerHeightBasicKids) => {
        additionalHeightBasicKids = 0;
        additionalHeightBasicKids = layerHeightBasicKids + additionalHeightBasicKids;
        setHightKids();
    };


    function addblockBasicKids(e, selectedWidthBasic) {
        getHeightBasicTopKids(e.target.value);
        getHeightBotKids(e.target.value, height);
        var el = materialBasicKids;
        var layerHeightBasicKids = heightBasicKids;
        var layerPriceBasicKids = priceBasicKids;
        var src = document.querySelector(".layers-basic-kids");
        var img = document.createElement("img");
        var oldImg = document.querySelector("#old");
        /////////////

        additionalPriceBasicKids(e, layerPriceBasicKids);
        additionalHeighteBasicKids(e, layerHeightBasicKids);
        /////////
        if (y > 0) {
            y--;
            oldImg.remove();
        }

        img.src = "img/layers/" + el.value + ".png";
        src.appendChild(img);
        img.id = "old";
        y++;
    }

    // END addblockKids BASIC
















    const priceWidthCalc = () => {
        additionalPriceTop = 0;

        if (layerGroup[0].layers_top.length == 0) {
            resultHolderOne.value = Number(document.querySelector('#secectorOne').value) + "грн";
        }

        if (layerGroup[0].layers_top.length > 0) {
            for (var i = 0; i < layerGroup[0].layers_top.length; i++) {
                layerGroup[0].layers_top[i].price = priceMapLayers[layerGroup[0].layers_top[i].name_item][widthSelect.value];
                additionalPriceTop = additionalPriceTop + layerGroup[0].layers_top[i].price;
                console.log(layerGroup[0].layers_top[i].price);
                setPrice();
            }
        }
        setPrice();
    };

    // Анульовує значення
    var n = 0;
    var layerGroup = [{ layers_top: [] },
        { layers_basic: [] },
        { layers_bottom: [] }

    ];
    let additionalPriceTop = 0;
    let additionalHeightTop = 0;
    let deleteTopPrice = 0;
    let deleteHeightTop = 0;

    // Додає Ціну
    const additionalPrice = (e, selectedWidth, layerPrice) => {
        additionalPriceTop = layerPrice + additionalPriceTop;
        setPrice();
    };

    // Додає Висоту
    const additionalHeight = (e, layerHeight) => {
        additionalHeightTop = layerHeight + additionalHeightTop;
        setHight();
    };

    // Видаляє Ціну + Висоту
    const deleteTopLayer = (i, img) => {
        deleteTopPrice = layerGroup[0].layers_top[i].price;
        additionalPriceTop = additionalPriceTop - deleteTopPrice;
        deleteHeightTop = layerGroup[0].layers_top[i].height;
        additionalHeightTop = additionalHeightTop - deleteHeightTop;
        deleteImgTop(img);
        setPrice();
        setHight();
        // layerGroup[0].layers_top.splice(i, 1);
    };

    // Видаляє Фотку
    const deleteImgTop = (img) => {
        let attrImg = img.getAttribute("data-img");
        console.log(attrImg);
        img.remove();
    }

    // Загальна функція Додавання
    function addblock(e, selectedWidth) {
        getPriceTop(e.target.value, selectedWidth);
        getHeightTop(e.target.value, height);
        var el = material;
        var elW = widthSelect;
        var p = document.createElement("p");
        var img = document.createElement("img");
        var btn = document.createElement('button');
        var src = document.querySelector(".layers-top");
        btn.textContent = "\u2613";

        // Додає До Массиву Елемент
        layerGroup[0].layers_top.push({
            name_item: el.value,
            name: el.value + n,
            img: "img/layers/" + el.value + ".png",
            price: priceTop,
            height: heightLayerTop,
        });

        var att = document.createAttribute("data-material");
        att.value = el.value + n;
        p.setAttributeNode(att);

        // Викликає Функцію Додавання Висоти
        var layerHeight = layerGroup[0].layers_top[n].height;
        additionalHeight(e, layerHeight);

        // Викликає Функцію Додавання Ціни
        var layerPrice = layerGroup[0].layers_top[n].price;
        additionalPrice(e, selectedWidth, layerPrice);

        // Фото
        var attImg = document.createAttribute("data-img");
        attImg.value = el.value + n;
        img.setAttributeNode(attImg);
        img.src = layerGroup[0].layers_top[n].img;

        // При нажатті на хрестик
        btn.addEventListener('click', (e) => {

            const p = e.target.parentNode;
            p.parentNode.removeChild(p);

            let attr = p.getAttribute("data-material");
            var length = layerGroup[0].layers_top.length
            // console.log(length);
            for (var i = 0; i < length; i++) {
                if (attr == layerGroup[0].layers_top[i].name) {
                    deleteTopLayer(i, img);
                    // priceWidthCalc(length);
                }
            }
        });

        // Додає  Кнопку + Блочок + Фотку + Обнулює елемент + І додає до n 1
        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent;
        p.appendChild(btn);
        el.parentNode.appendChild(p);
        src.appendChild(img);
        el.value = '';
        n++;
    }
    // END addblock TOP













    // START addblock BASIC
    var k = 0;
    var additionalPriceBasicFunc = 0;
    var additionalHeightBasic = 0;

    const additionalPriceBasic = (e, selectedWidthBasic, layerPriceBasic) => {
        additionalPriceBasicFunc = 0;
        additionalPriceBasicFunc = layerPriceBasic + additionalPriceBasicFunc;
        setPrice();
    };

    const additionalHeighteBasic = (e, layerHeightBasic) => {
        additionalHeightBasic = 0;
        additionalHeightBasic = layerHeightBasic + additionalHeightBasic;
        setHight();
    };

    function addblockBasic(e, selectedWidthBasic) {
        getPriceBasic(e.target.value, selectedWidthBasic);
        getHeightBasicTop(e.target.value, height);
        var el = materialBasic;
        var layerHeightBasic = heightBasic;
        var layerPriceBasic = priceBasic;
        var src = document.querySelector(".layers-basic");
        var img = document.createElement("img");
        var oldImg = document.querySelector("#old");
        /////////////

        additionalPriceBasic(e, selectedWidthBasic, layerPriceBasic);
        additionalHeighteBasic(e, layerHeightBasic);

        /////////
        if (k > 0) {
            oldImg.remove();
            k--;
        }

        img.src = "img/layers/" + el.value + ".png";
        src.appendChild(img);
        img.id = "old";
        k++;
    }

    // END addblock BASIC























    let deleteBotPrice = 0;
    let deleteHeightBot = 0;
    let layerBot = 0;
    let additionalPriceBottom = 0;
    let additionalHeightBottom = 0;
    var l = 0;





    // START addblock BOTTOM
    const priceWidthCalcBottom = () => {
        additionalPriceBottom = 0;

        if (layerGroup[2].layers_bottom.length == 0) {
            resultHolderOne.value = Number(document.querySelector('#secectorOne').value) + "грн";
        }

        if (layerGroup[2].layers_bottom.length > 0) {
            for (var i = 0; i < layerGroup[2].layers_bottom.length; i++) {
                layerGroup[2].layers_bottom[i].price = priceMapLayers[layerGroup[2].layers_bottom[i].name_item][widthSelect.value];
                additionalPriceBottom = additionalPriceBottom + layerGroup[2].layers_bottom[i].price;
                setPrice();
            }
        }

        if (layerGroup[0].layers_bottom.length > 0) {
            for (var i = 0; i < layerGroup[2].layers_bottom.length; i++) {
                layerGroup[2].layers_bottom[i].price = priceMapLayers[layerGroup[2].layers_bottom[i].name_item][widthSelect.value];
                additionalPriceBottom = additionalPriceBottom + layerGroup[2].layers_bottom[i].price;
                setPrice();
            }
        }
        setPrice();
    };


    // Додає Ціну
    const additionalPriceBot = (e, layerPriceBot) => {
        additionalPriceBottom = layerPriceBot + additionalPriceBottom;
        setPrice();
    };

    // Додає Висоту
    const additionalHeightBot = (e, layerHeightBottom) => {
        additionalHeightBottom = layerHeightBottom + additionalHeightBottom;
        setHight();
    };


    // Видаляє Ціну + Висоту
    const deleteBotLayer = (i, img) => {
        console.log("Delting Layer")
        deleteBotPrice = layerGroup[2].layers_bottom[i].price;
        additionalPriceBottom = additionalPriceBottom - deleteBotPrice;
        deleteHeightBot = layerGroup[2].layers_bottom[i].height;
        additionalHeightBottom = additionalHeightBottom - deleteHeightBot;
        deleteImgBot(img);
        setPrice();
        setHight();
        // layerGroup[0].layers_top.splice(i, 1);
    };


    // Видаляє Фотку
    const deleteImgBot = (img) => {
        let attrImg = img.getAttribute("data-img");
        console.log(attrImg);
        img.remove();
    }

    // Загальна функція Додавання
    function addblockBottom(e, selectedWidthBot) {
        getPriceBot(e.target.value, selectedWidthBot);
        getHeightBot(e.target.value, height);
        var el = materialBot;
        var elW = widthSelectBot;
        var p = document.createElement("p");
        var img = document.createElement("img");
        var btn = document.createElement('button');
        var src = document.querySelector(".layers-bottom");
        btn.textContent = "\u2613";

        // Додає До Массиву Елемент
        layerGroup[2].layers_bottom.push({
            name_item: el.value,
            name: el.value + l,
            img: "img/layers/" + el.value + ".png",
            price: priceBot,
            height: heightLayerBot,
        });



        var att = document.createAttribute("data-material");
        att.value = el.value + l;
        p.setAttributeNode(att);

        // Викликає Функцію Додавання Висоти
        var layerHeightBottom = layerGroup[2].layers_bottom[l].height;
        additionalHeightBot(e, layerHeightBottom);

        // Викликає Функцію Додавання Ціни
        var layerPriceBot = layerGroup[2].layers_bottom[l].price;
        additionalPriceBot(e, layerPriceBot);

        // Фото
        var attImg = document.createAttribute("data-img");
        attImg.value = el.value + l;
        img.setAttributeNode(attImg);
        img.src = layerGroup[2].layers_bottom[l].img;

        // При нажатті на хрестик
        btn.addEventListener('click', (e) => {

            const p = e.target.parentNode;
            p.parentNode.removeChild(p);

            let attr = p.getAttribute("data-material");
            var length = layerGroup[2].layers_bottom.length
            for (var i = 0; i < length; i++) {
                if (attr == layerGroup[2].layers_bottom[i].name) {
                    deleteBotLayer(i, img);
                }
            }
        });

        console.log(layerGroup);

        // Додає  Кнопку + Блочок + Фотку + Обнулює елемент + І додає до l 1
        p.textContent = el.querySelectorAll("option")[el.selectedIndex].textContent;
        p.appendChild(btn);
        el.parentNode.appendChild(p);
        src.appendChild(img);
        el.value = '';
        l++;
    }

    // END addblock BOTTOM




















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
    container.classList.remove("toggled");
    container1.classList.remove("toggled");
    container2.classList.remove("toggled");
    container3.classList.remove("toggled");
    container4.classList.remove("toggled");
    body.classList.remove("overflow-block");
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        container.classList.remove("toggled");
    container1.classList.remove("toggled");
    container2.classList.remove("toggled");
    container3.classList.remove("toggled");
    container4.classList.remove("toggled");
    body.classList.remove("overflow-block");
    }
}
// END OF MODAL WINDOW
var container = document.querySelector(".container");
var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
var container4 = document.querySelector(".container4");
var body = document.getElementById("body");

btn.onclick = function() {
    container.classList.add("toggled");
    container1.classList.add("toggled");
    container2.classList.add("toggled");
    container3.classList.add("toggled");
    container4.classList.add("toggled");
    // body.classList.add("overflow-block");
    modal.style.display = "block";
}