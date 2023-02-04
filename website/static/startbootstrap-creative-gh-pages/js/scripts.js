/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }
    ;

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // // send mail function
    // function sendMail() {
    //     const params = {
    //         from_name: document.getElementById('name').value,
    //         email_id: document.getElementById('email').value,
    //         message: document.getElementById('message').value
    //     }
    //     emailjs.send("service_xkiycpd", "template_m437o2u", params)
    // }

    const stringToDisplay = '@Kozminski_AI';
    let displayedString = '';
    let index = 0;

    const displayStringInterval = setInterval(() => {
        displayedString += stringToDisplay[index];
        document.getElementById('display').innerHTML = displayedString;
        index++;
        if (index === stringToDisplay.length) {
            clearInterval(displayStringInterval);
        }
    }, 225);

    const stringToDisplay2 = '"Where students and AI meet."';
    let displayedString2 = '';
    let index2 = 0;

    const displayStringInterval2 = setInterval(() => {
        displayedString2 += stringToDisplay2[index2];
        document.getElementById('display2').innerHTML = displayedString2;
        index2++;
        if (index2 === stringToDisplay2.length) {
            clearInterval(displayStringInterval2);
        }
    }, 100);

    const eventsProjects = document.querySelectorAll('#eventsProjects');

    eventsProjects.forEach(function (portfolio) {
        portfolio.addEventListener('mouseenter', function () {
            portfolio.classList.add('animate');
        });
        portfolio.addEventListener('mouseleave', function () {
            portfolio.classList.remove('animate');
        });
    });


});
