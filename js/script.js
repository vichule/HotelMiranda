const buttonMenu = document.querySelector('.header__button')
const crossMenu = document.querySelector('#menuOpened')
const barsMenu = document.querySelector('#menuClosed')
const hiddenMenu = document.querySelector('.header__mobile-menu')
const headerBar = document.querySelector('header')
const contactBtn = document.querySelector('.contactBtn')
const contactForm = document.querySelector('.contactForm__form')
const bookingForm = document.querySelector('.details-container__form')

let dropdown = false;

buttonMenu.addEventListener('click', function () {

    if (!dropdown) {

        hiddenMenu.classList.remove('hidden');
        crossMenu.classList.remove('hidden');
        barsMenu.classList.add('hidden');
        dropdown = true;
    } else {
        hiddenMenu.classList.add('hidden');
        crossMenu.classList.add('hidden');
        barsMenu.classList.remove('hidden');
        dropdown = false;
    }
});


window.addEventListener('scroll', function () {

    let body = document.documentElement;

    let scrollT = body.scrollTop || document.body.scrollTop;
    let scrollH = body.scrollHeight || document.body.scrollHeight;


    document.addEventListener("mousemove", (event) => {
        let y = event.clientY



        if (scrollT > 200 && y >= 200) {
            headerBar.classList.remove('header-down')
            headerBar.classList.add('header-normal')

        } else if (scrollT < 200) {

            headerBar.classList.remove('header-normal')
            headerBar.classList.add('header-down')
        }
    });

})


if(contactForm){
    contactForm.addEventListener("submit", function (event){
        event.preventDefault();
        swal({
            title: 'Succes!',
            text: 'Thanks for your time, your data was sent succesfully!',
        }).then(() => {
            window.location = 'contact.html'
        })
    });
}


if(bookingForm){
    bookingForm.addEventListener("submit", function (event){
        console.log(bookingForm)
        if(bookingForm.in === ''){
            event.preventDefault();
            swal({
                title: 'error',
                text: 'You have to write down every input',
            })
        }else{
            event.preventDefault();
        swal({
            title: 'Succes!',
            text: 'Your booking is complete!',
        }).then(() => {
            window.location = 'rooms.html'
        })
        }
        
    });
}



