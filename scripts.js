const menuMob = document.getElementById("menu-mob");

function toggleMenu(){
    const mNav = document.getElementById("nav");
    mNav.classList.toggle("active");
}

menuMob.addEventListener("click", toggleMwnu)