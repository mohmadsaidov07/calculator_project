const header = document.querySelector('.header')
const main = document.querySelector('.main')

let calc_block = document.createElement('div');
calc_block.classList.add('calc_block')
main.append(calc_block)

let calc_display = document.createElement('div');
calc_display.classList.add('calc_display')
calc_display.textContent = ''; //
calc_block.append(calc_display)

let buttons_block = document.createElement('div');
buttons_block.classList.add('buttons_block')
calc_block.append(buttons_block)

const button_amout = 19
const button_signs = "0 1 2 3 4 5 6 7 8 9 + - clear * / . ++ -- =".split(" ")

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
const button_dot = document.querySelector('.main .calc_block .buttons_block .button:nth-child(16)')
const button_plusx2 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(17)')
const button_minusx2 = document.querySelector('.main .calc_block .buttons_block .button:nth-child(18)')
const button_equal = document.querySelector('.main .calc_block .buttons_block .button:nth-child(19)')

const functions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

button_print(button0),button_print(button1),button_print(button2),button_print(button3)
button_print(button4),button_print(button5),button_print(button6),button_print(button7),button_print(button_dot)
button_print(button8),button_print(button9),button_print2(button_plus),button_print2(button_minus)
button_print2(button_multiply),button_print2(button_divide),button_result(button_equal)

button_clear.addEventListener('click', () =>{
    setTimeout(() => {
        location.reload()
    }, 50);
})


function button_print(btn){
    btn.addEventListener('click', () => {
        if ((calc_display.textContent).length < 16){
            if (calc_display.textContent.length == 0){
                calc_display.textContent = btn.textContent;
            } else {
                calc_display.textContent = calc_display.textContent + '' + btn.textContent;
            }
        }else{
            calc_display.textContent = "see you chump"
            setTimeout(() => {
                location.reload()
            }, 2000);
        }

    })
}
let operation_counter = 0
function button_print2(btn){
    btn.addEventListener('click', () => {
        if(operation_counter < 1 && calc_display.textContent.length != 0){
            calc_display.textContent = calc_display.textContent + ' ' + btn.textContent + ' ';
            operation_counter+=1
        }
    })
}

function button_result(btn){
    btn.addEventListener('click', () => {
        if((calc_display.textContent).length > 0){
            const number1 = Number(calc_display.textContent.split(' ')[0])
            const sign = calc_display.textContent.split(' ')[1]
            const number2 = Number(calc_display.textContent.split(' ')[2])
            if (functions[sign](number1,number2).length < 14) {
                calc_display.textContent = functions[sign](number1,number2)
            }else if(functions[sign](number1,number2) % 1 == 0){
                calc_display.textContent = functions[sign](number1,number2)}
            else{
                calc_display.textContent = functions[sign](number1,number2).toFixed(14)
            }
            setTimeout(() => {
                location.reload()
            }, 2000);
    }   
    })
}

button_plusx2.addEventListener('click' , () => {
    if (calc_display.textContent.split(" ").length == 1) {
        calc_display.textContent = Number(calc_display.textContent) + 1
    }
})

button_minusx2.addEventListener('click' , () => {
    if (calc_display.textContent.split(" ").length == 1) {
        calc_display.textContent = Number(calc_display.textContent) - 1
    }
})