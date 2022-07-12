/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{ /*tc = tabcontent*/
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{ /*t = tab*/
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*==================== MIXTITUP FILTER ====================*/
let mixerPortfolio = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
    this.classList.add('active-portfolio')
}

linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))
/*==================== AWARD ====================*/
var swiperAward = new Swiper(".award__container", {
    spaceBetween: 32,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:true,
    loop: true,
    autoplay: {
        delay: 2500
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__title, .footer__container`)
sr.reveal(`.section__title`, {delay: 500, reset: true})
sr.reveal(`.section__subtitle`, {delay: 600, reset: true})
sr.reveal(`.home__subtitle,.footer__info`, {delay: 500})
sr.reveal(`.home__description`, {delay: 600})
sr.reveal(`.home__social`, {delay: 700})
sr.reveal(`.home__img, .home__button`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.home__button-small, .skills__container, .portfolio__container, .portfolio__filters`, {origin: 'left'})
sr.reveal(`.home__scroll, .contact__images, .filters, .award__container`, {origin: 'right'})

