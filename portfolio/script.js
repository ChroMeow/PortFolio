document.addEventListener('DOMContentLoaded', function () {
    // Get the audio element
    var backgroundMusic = document.getElementById('backgroundMusic');

    // Get all elements with the class 'clickable'
    var clickableElements = document.querySelectorAll('.clickable');

    clickableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            backgroundMusic.play();
        });
    });
});

