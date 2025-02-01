    document.addEventListener('DOMContentLoaded', function () {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
      };

      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (entry.isIntersecting) {
              if (entry.target.id === "hero")
                history.replaceState(null, null, `/`);
            else
                history.replaceState(null, null, `#${entry.target.id}`);
            // navLinks.forEach(link => link.classList.remove('active'));
            if (entry.target.id != "hero")
                navLink.classList.add('active');
        }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      sections.forEach(section => observer.observe(section));
    });


var typed = new Typed('.auto-type', {
    strings: ['software developer', "back-end developer", "IT Network Specialist "],
    typeSpeed: 50,
    backSpeed:50,
    loop:true,
  });

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

    // // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

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

});

