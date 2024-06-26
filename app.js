$('#brand > h1').on('click',function() {
    window.location.href = 'testsea.html';
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            let ratingValue = star.getAttribute('data-value');
            console.log(`Rating: ${ratingValue}`);
        });
    });
});
