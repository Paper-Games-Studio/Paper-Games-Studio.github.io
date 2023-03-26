const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');

    }, 2000)
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pobierz przycisk hamburgera i listę nawigacji
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

// Dodaj obsługę zdarzenia click do przycisku hamburgera
navToggle.addEventListener('click', () => {
  // Toggle klasy .nav-active na liście nawigacji
  navList.classList.toggle('nav-active');
});