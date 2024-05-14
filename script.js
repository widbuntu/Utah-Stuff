$(document).ready(function(){
    $("#main-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["<",">"],
        autoPlay:true
    });
});

document.getElementById('confirmEmail').addEventListener('input', function() {
    const email = document.getElementById('email').value;
    const confirmEmail = this.value;
    const error = document.getElementById('emailError');

    if (email !== confirmEmail) {
        error.style.display = 'inline';
    } else {
        error.style.display = 'none';
    }
});

function validateForm() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        alert('Email addresses do not match.');
    } else {
        alert('Form submitted successfully!');
    }
}