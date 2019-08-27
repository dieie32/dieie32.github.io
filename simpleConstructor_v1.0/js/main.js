
var chboxOne, chboxTwo, chboxThree, priceOne, chboxSpecOne, chboxSpecTwo, chboxSpecThree;

chboxOne = document.getElementById('one');
chboxTwo = document.getElementById('two');
chboxThree = document.getElementById('three');

chboxSpecOne = document.getElementById('oneSpec');
chboxSpecTwo = document.getElementById('twoSpec');
chboxSpecThree = document.getElementById('threeSpec');

priceOne = document.getElementById("priceOne");


function find() {

    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;



if (chboxOne.checked) {
    if (sel == 0) {
        priceOne.innerHTML = "500$";
    }
    if (sel == 1) {
        priceOne.innerHTML = "600$";
    }
    if (sel == 2) {
        priceOne.innerHTML = "700$";
    }
    if (sel == 3) {
        priceOne.innerHTML = "800$";
    }
}


if (chboxTwo.checked) {
    if (sel == 0) {
        priceOne.innerHTML = "550$";
    }
    if (sel == 1) {
        priceOne.innerHTML = "650$";
    }
    if (sel == 2) {
        priceOne.innerHTML = "750$";
    }
    if (sel == 3) {
        priceOne.innerHTML = "850$";
    }
}




if (chboxThree.checked) {
    priceOne.innerHTML = "Потрібен виїзд замірщика";
}


}











  // function change() {
  //   var header = document.getElementsByTagName("H2").item(0);

  //   console.log(header);

  //   header.firstChild.data = "Параграф змінений";
  
    
  //   var para = document.getElementsByTagName("P").item(0);
  //   para.firstChild.data = "Це був перший параграф";

  //   console.log(para);
   
  //   var newText = document.createTextNode("Тут створили другий параграф");

  //   console.log(newText);

  //   var newElement = document.createElement("P");

  //   console.log(newElement);

  //   newElement.appendChild(newText);


  //   para.parentNode.appendChild(newElement);
  // }








  // function price() {
  //   var priceName = document.getElementById("one");
    
  //   priceChange = priceName.innerHTML;

  //   priceChange = priceChange + 50;

  //   priceName.firstChild.data = priceChange;

  //   console.log(priceChange);

  // }







// function fun1() {
//     var sel = document.getElementById('mySelect').selectedIndex;
//     var options = document.getElementById('mySelect').options;
//     if (sel == 0) {
//         priceOne.innerHTML = "500$";
//     }
//     if (sel == 1) {
//         priceOne.innerHTML = "2100$";
//     }
//     if (sel == 2) {
//         priceOne.innerHTML = "2300$";
//     }
//     if (sel == 3) {
//         priceOne.innerHTML = "2500$";
//     }
// }






//   function ChangeValue(targ,dest){
//     if (document.getElementById(dest).checked){
//         document.getElementById(targ).value = 1;
//     }else{
//         document.getElementById(targ).value = 0;
//     }
// }

// `