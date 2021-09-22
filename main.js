/*=========== SHOWS AND HIDES THE MENU ON SMALL DEVICES ============*/

const navMenu = document.getElementById('nav-menu'),
		navBars = document.getElementById('nav-bars'),
		navClose = document.getElementById('nav-close');

/*=== SHOW MENU ===*/
/*Valida si const existe*/
if(navBars){
	//Si se clickea en navBars, se agrega la clase show-menu a navMenu, y se agrega la clase hides bars a las navBars y se abre el menu y ocultan las bars en disp peq
	navBars.addEventListener('click', () =>{
		navMenu.classList.add('show-menu');
		navBars.classList.add('hides-bars');
	});
}


/*=== HIDES MENU ===*/
/*Valida si const existe*/
if(navClose){
	//Si se clickea en close, se quita la clase show-menu al navMenu y se remueve la clase hides bars y se cierra el menu y se muestran las navBars en disp peq
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu');
		navBars.classList.remove('hides-bars');
	});
}

/*========== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav__item');

function linkAction(){
	const navMenu = document.getElementById('nav-menu');
	//cuando se clickea en cada nav__link, se quita la clase show-menu y se quita la clase hides bars y se cierra el menu y se muestran las bars en disp peq
	navMenu.classList.remove('show-menu');
	navBars.classList.remove('hides-bars');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

