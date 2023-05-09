/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle)
{
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu');
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose)
{
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu');
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink=document.querySelectorAll('.nav__link');

function linkAction(){
    console.log("hii");
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(e => e.addEventListener('click',linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent= document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills()
{
    let itemClass= this.parentNode.className;
    console.log("hllo")

    for(let i = 0 ; i < skillsContent.length; i++){
        skillsContent[i].className='skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }

}
skillsHeader.forEach((el) =>{
    el.addEventListener( 'click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');


tabs.forEach( tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent  => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav=document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else
    nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop=document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else
    scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton=document.getElementById('theme-button');
const darkTheme='dark-theme';
const iconTheme= 'uil-sun';

const selectedTheme= localStorage.getItem('selected-theme');
const selectedIcon= localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if(selectedTheme){

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})