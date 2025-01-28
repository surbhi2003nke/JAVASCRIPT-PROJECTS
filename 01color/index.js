const buttons = document.querySelectorAll('.color-btn');
const body = document.querySelector('body');

buttons.forEach(function(button)
{
    button.addEventListener('click', function(e){
        const reqcol = getComputedStyle(e.target).backgroundColor;
        body.style.backgroundColor = reqcol;
    });

    button.addEventListener('mouseover', function(e){
        e.target.style.border = 'none';
    });

    button.addEventListener('mouseout', function(e) {
        e.target.style.border = '1px solid black'; // Reset border when the mouse leaves
    });


});
