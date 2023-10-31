var mainText = document.getElementsByClassName("main-text");

const link2 = document.querySelector('.link_container a:nth-child(2)')//1link

var links = document.querySelectorAll('.link_container .link')//getting all links

Array.from(links).forEach((link) => {
    link.textContent = "hello";
})

console.log(link2);