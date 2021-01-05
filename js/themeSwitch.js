// Make some defaults
let root = document.documentElement;
let themeBtn = document.body.querySelectorAll('.switchTheme');

// Read or write to storage
if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', 'dark');
    var currentTheme = 'dark';
} else {
    var currentTheme = localStorage.getItem('theme');

    if (currentTheme == 'light') {
        currentTheme = 'dark';
        themeSwitchOnClick();
    }
}

function themeSwitchOnClick() {
    if (currentTheme == 'dark') {
        // Set to light properties
        root.style.setProperty('--main-bg-color', '#ffffff');
        root.style.setProperty('--secondary-bg-color', '#056F92');
        root.style.setProperty('--primary-accent', '#ffbb00');
        root.style.setProperty('--secondary-accent', '#dba800');
        root.style.setProperty('--standard-font-color', '#000000');

        // Change Button
        themeBtn.forEach(btn => btn.innerHTML = '<svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 342.1 342.1"><path d="M206 342.1c-94.3 0-171.1-76.7-171.1-171.1C34.9 76.7 111.7 0 206 0c30.3 0 60 8.1 86.1 23.3l15 8.8 -15.9 7.1c-55 24.7-90.6 79.5-90.6 139.8 0 54.2 29.1 104.9 76.1 132.3l15 8.8 -15.9 7.1C253.8 337.1 230.3 342.1 206 342.1z" fill="#010002"/></svg>');

        // Sets current theme variable
        currentTheme = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        // Set to dark properties
        root.style.setProperty('--main-bg-color', '#1F1F1F');
        root.style.setProperty('--secondary-bg-color', '#13324d');
        root.style.setProperty('--primary-accent', '#fcba03');
        root.style.setProperty('--secondary-accent', '#e4a700');
        root.style.setProperty('--standard-font-color', '#dbdbdb');

        // Change Button
        themeBtn.forEach(btn => btn.innerHTML = '<svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.4 395.4"><path d="M358.3 229.5l37.1-31.8 -37.1-31.8c-2.7-2.3-3.5-6.1-2.1-9.3l19.7-44.7 -47.2-12.4c-3.4-0.9-5.8-3.9-6-7.5l-1.7-48.8 -48 9.2c-3.5 0.7-6.9-1-8.6-4.1L241.7 4.9l-39.2 29.2c-2.8 2.1-6.7 2.1-9.5 0L153.7 4.9 131 48.2c-1.6 3.1-5.1 4.8-8.6 4.2l-48-9.2 -1.7 48.9c-0.1 3.5-2.5 6.6-6 7.5L19.6 111.9l19.7 44.7c1.4 3.2 0.6 7-2.1 9.3L0 197.7l37.1 31.8c2.7 2.3 3.5 6.1 2.1 9.3L19.6 283.5l47.3 12.5c3.4 0.9 5.8 3.9 6 7.5l1.7 48.9 48-9.2c0.5-0.1 1-0.1 1.5-0.1 2.9 0 5.7 1.6 7.1 4.3l22.7 43.3 39.2-29.2c2.8-2.1 6.7-2.1 9.6 0l39.2 29.2 22.7-43.3c1.6-3.1 5.1-4.8 8.6-4.1l48 9.2 1.7-48.8c0.1-3.5 2.5-6.6 6-7.5l47.3-12.4 -19.7-44.7C354.7 235.6 355.6 231.8 358.3 229.5zM197.7 345.7c-81.6 0-148-66.4-148-148s66.4-148 148-148 148 66.4 148 148S279.3 345.7 197.7 345.7z"/><path d="M197.7 65.7c-72.8 0-132 59.2-132 132s59.2 132 132 132c72.8 0 132-59.2 132-132S270.5 65.7 197.7 65.7z"/></svg>');

        // Sets current theme
        currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    }
}