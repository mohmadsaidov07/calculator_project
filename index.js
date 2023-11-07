const link2 = document.querySelector('.link_container a:nth-child(2)')//1link
const links = document.querySelectorAll('.link_container .link')//getting all links
const footer = document.querySelector('.footer')
const mainText = document.querySelector('.main .main-text')
const main = document.querySelector('.main')

Array.from(links).forEach((link) => {
    link.textContent = "changed link";
})

console.log(footer);

mainText.textContent = "I changed the main text"

let count = 1
mainText.classList.add("bigger_text")
if(count==0){
    mainText.classList.remove("bigger_text")
}

let second_maintext = document.createElement("div")
second_maintext.textContent = "i was created in js"
main.append(second_maintext);