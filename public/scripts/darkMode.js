const toggleSwitch = document.querySelector('input[type="checkbox"]')
const image = document.getElementById('home-img')

// switch image
function imageMode(num) {
    image.src = `/images/car${num}.png`;
}

// switch theme dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        imageMode(2);
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        imageMode(1);
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        imageMode(2);
    }
}
