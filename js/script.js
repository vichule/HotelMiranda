const buttonMenu = document.querySelector('.header__button')
const crossMenu = document.querySelector('#menuOpened')
const barsMenu = document.querySelector('#menuClosed')
const hiddenMenu = document.querySelector('.header__mobile-menu')

let dropdown = false;

buttonMenu.addEventListener('click', function(){
			
    if(!dropdown){

        hiddenMenu.classList.remove('hidden');
        crossMenu.classList.remove('hidden');
        barsMenu.classList.add('hidden');
        dropdown = true;
    }else{
        hiddenMenu.classList.add('hidden');
        crossMenu.classList.add('hidden');
        barsMenu.classList.remove('hidden');
        dropdown = false;
    }
});