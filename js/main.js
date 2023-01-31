
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
});




const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        // change icon
        const icon = faq.querySelector(".faq__icon i");
        if(icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus";
        }
    });
});




const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    closeBtn.style.display ="none";
    menuBtn.style.display = "inline-block";
})

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}