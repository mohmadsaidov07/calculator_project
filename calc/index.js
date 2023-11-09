const header = document.querySelector('.header')
const main = document.querySelector('.main')

let calc_block = document.createElement('div');
calc_block.classList.add('calc_block')
main.append(calc_block)

let calc_display = document.createElement('div');
calc_display.classList.add('calc_display')
calc_display.textContent = 1;
calc_block.append(calc_display)