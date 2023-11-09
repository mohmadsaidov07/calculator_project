const header = document.querySelector('.header')
const main = document.querySelector('.main')

let calc_block = document.createElement('div');
calc_block.classList.add('calc_block')
main.append(calc_block)

let calc_display = document.createElement('div');
calc_display.classList.add('calc_display')
calc_display.textContent = ''; //число не больше 1999999999999999
calc_block.append(calc_display)

let buttons_block = document.createElement('div');
buttons_block.classList.add('buttons_block')
calc_block.append(buttons_block)

const button_amout = 19
const button_signs = "0 1 2 3 4 5 6 7 8 9 + - clear * / round ++ -- =".split(" ")

for(let i=0;i < button_amout; i++){
    let button = document.createElement('div');
    button.textContent = button_signs[i]
    button.classList.add('button')
    buttons_block.append(button)
}

const button0 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(1)')
const button1 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(2)')
const button2 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(3)')
const button3 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(4)')
const button4 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(5)')
const button5 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(6)')
const button6 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(7)')
const button7 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(8)')
const button8 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(9)')
const button9 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(10)')
const button_plus = document.querySelector('.main .calc_block .buttons_block .button:nth-child(11)')
const button_minus = document.querySelector('.main .calc_block .buttons_block .button:nth-child(12)')
const button_clear = document.querySelector('.main .calc_block .buttons_block .button:nth-child(13)')
const button_multiply = document.querySelector('.main .calc_block .buttons_block .button:nth-child(14)')
const button_divide = document.querySelector('.main .calc_block .buttons_block .button:nth-child(15)')
const button_round = document.querySelector('.main .calc_block .buttons_block .button:nth-child(16)')
const button_plusx2 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(17)')
const button_minusx2 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(18)')
const button_equal = document.querySelector('.main .calc_block .buttons_block .button:nth-child(19)')


function button_print(btn){
    btn.addEventListener('click', () => {
        calc_display.textContent += btn.textContent;
    })
}

function button_print2(btn){
    btn.addEventListener('click', () => {
        calc_display.textContent += btn.textContent;
    })
}



button_print(button0),button_print(button1),button_print(button2),button_print(button3)
button_print(button4),button_print(button5),button_print(button6),button_print(button7)
button_print(button8),button_print(button9),button_print2(button_plus),button_print2(button_minus)
button_print2(button_multiply),button_print2(button_divide),button_print2(button_plusx2),button_print2(button_minusx2)
button_print2(button_equal)

button_clear.addEventListener('click', () =>{
    calc_display.textContent = ''
})

// сделать buttonprint2 который будет изспользоваться только на знаках и иметь ограничения такие как, нельзя несколько знаков в одной строке
// писать, если изспользовать равно до появление знака или второго числа он просто выведет первое выведенное число
// проверить количество знаков можно будет найдя способ как textcontetn превратить в массив и чекнуть массивы