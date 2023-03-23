let menuButton = document.querySelector('button');
let navList = document.getElementById('nav-list');

let about = document.getElementById('about-link');
let accept = document.getElementById('accepted-link');
let call = document.getElementById('call-link');
let contact = document.getElementById('contact-link');
let orga = document.getElementById('orga-link');

about.addEventListener('click', toggleNavigation);
accept.addEventListener('click', toggleNavigation);
call.addEventListener('click', toggleNavigation);
contact.addEventListener('click', toggleNavigation);
orga.addEventListener('click', toggleNavigation);


menuButton.addEventListener('click', function() {
    if(menuButton.classList.contains('opened') &&
        navList.style.display !== 'block'){
        navList.style.display = 'block';
    }
    else {
        navList.style.display = 'none';
    }
});

function toggleNavigation(){
    if(self.innerWidth < 1000) {
        navList.style.display = 'none';
        menuButton.classList.remove('opened');
    }
}

function toggleNavigationOnResize(){

    if(self.innerWidth >= 1001 && navList.style.display !== 'block') {
        navList.style.display = 'block';
        menuButton.classList.remove('opened');
    }
    if(self.innerWidth < 1000 && navList.style.display !== 'none') {
        navList.style.display = 'none';
        menuButton.classList.remove('opened');
    }
}



window.addEventListener('resize', toggleNavigationOnResize);
