var tab1,tab2,tab3,tab_content1,tab_content2,tab_content3;

window.onload = function(){
	tab_content1 = document.getElementsByClassName('tab_content1');
	tab1 = document.getElementsByClassName('tab1');
	hideTabsContent(1);
}

function hideTabsContent(a){
	for(var i = a; i< tabContent.length; i++){
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('white-border');
	}
}

document.getElementById('tabs').onclick = function (event) {
	var target = event.target;
	if (target.className == 'tab') {
		for (var i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				showTabsContent(i);
				break;
			}
		}
	}
}

function showTabsContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		hideTabsContent(0);
		tab[b].classList.add('white-border');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}
