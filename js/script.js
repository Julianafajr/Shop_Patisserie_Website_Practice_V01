// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');

// Hamburger Menu Click
document.querySelector ('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle ('active');
};

// Click Free Sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
{
    // Hide all elements after a delay
    window.onload = function() {
        let clouds = document.getElementById('clouds');
    
        // Setelah 5 detik, hentikan animasi awan dan hilangkan dari DOM
        setTimeout(function() {
            clouds.style.animation = 'none'; // Menghentikan animasi
            clouds.remove(); // Menghapus elemen awan dari DOM
        }, 5000);
    };    
    
}