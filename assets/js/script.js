let items = document.querySelectorAll('.item');
let clearBtn = document.querySelector('.clear-btn');
let count = document.querySelector('.count');
let unreads = document.getElementsByClassName('unread');

// Add or remove unread classes to items
items.forEach(i => {
    i.addEventListener('click', () => {
        i.classList.toggle('unread');
    });
});


// Remove unread class when clicking on the clear button
clearBtn.addEventListener('click', () => {
    items.forEach(i => {
        i.classList.remove('unread');
    });
});



