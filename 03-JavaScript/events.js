// Event Listeners

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert("I also love JavaScript");
}

// Add click event
buttonTwo.addEventListener('click', alertBtn);

// Add mouse over event
const box3 = document.querySelector('.box-3');

function changeBGColour() {
    box3.style.backgroundColor = 'blue';
}

box3.addEventListener('mouseover', changeBGColour);


// Hide and unhide content using event listener
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

// This function adds or removes the reveal-btn class in our hidden content element
function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    }
    else {
        hiddenContent.classList.add('reveal-btn');
    }
}

// If reveal-btn is present in hidden-content class, it will display the content
// Else it does not display the content
// Check style element in html file for more context
revealBtn.addEventListener('click', revealContent);



// Event Listening Example repeating code
/*
document.querySelector('#football').addEventListener(
    'click',
    function(e) {
        console.log('Football clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightgrey';
        }
    }
)

document.querySelector('#basketball').addEventListener(
    'click',
    function(e) {
        console.log('Basketball clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightgrey';
        }
    }
)

document.querySelector('#boxing').addEventListener(
    'click',
    function(e) {
        console.log('Boxing clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightgrey';
        }
    }
)

document.querySelector('#tennis').addEventListener(
    'click',
    function(e) {
        console.log('Tennis clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightgrey';
        }
    }
)

document.querySelector('#golf').addEventListener(
    'click',
    function(e) {
        console.log('Golf clicked');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightgrey';
        }
    }
)
*/

// Event delegation for above example
/* 
Adding the event listener to a parent element will automatically add those events to its current and future children elements.
*/
document.querySelector('#sports').addEventListener(
    'click',
    function(e) {
        console.log(e.target.getAttribute('id') + ' is clicked!');
        const target = e.target;
        if (target.matches('li')) {
            target.style.backgroundColor = 'lightgreen';
        }
    }
)
