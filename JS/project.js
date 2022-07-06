'use strict';

let sidebar = document.querySelector('.sidebar');
let sidebarToggler = document.querySelector('.sidebar_toogler');
let body = document.querySelector('body');

sidebar.classList.add('hidden');

sidebarToggler.addEventListener('click', 
    () => {
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.toggle('show');
        }
    }
);
