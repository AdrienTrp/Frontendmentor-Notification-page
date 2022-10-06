let items = document.querySelectorAll('.item');
let clearBtn = document.querySelector('.clear-btn');
let count = document.querySelector('.count');
let unreads = document.getElementsByClassName('unread');
let unreadIcon = document.querySelectorAll('unread-btn');

count.textContent = unreads.length;

// Add or remove unread classes to items
items.forEach(i => {
    i.addEventListener('click', () => {
        if(i.classList.contains('unread')) {
            i.classList.remove('unread');
        };

        count.textContent = unreads.length;
    });
});

// Remove unread class when clicking on the clear button
clearBtn.addEventListener('click', () => {
    items.forEach(i => {
        i.classList.remove('unread');
    });

    count.textContent = 0;
});






