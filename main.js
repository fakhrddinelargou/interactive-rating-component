const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const num3 = document.querySelector('.num3')
const num4 = document.querySelector('.num4')
const num5 = document.querySelector('.num5')

const yourNum = document.getElementById('yourNumber')

const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')

function btnNum1() {
    num1.style.backgroundColor = 'hsl(25, 97%, 53%)'
    num1.style.color = 'hsl(213, 19%, 18%)'
    num4.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num3.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num2.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num5.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num4.style.color = 'hsl(217, 12%, 63%)'
    num3.style.color = 'hsl(217, 12%, 63%)'
    num2.style.color = 'hsl(217, 12%, 63%)'
    num5.style.color = 'hsl(217, 12%, 63%)'
    yourNum.textContent = '1'
}
function btnNum2() {
    num2.style.color = 'hsl(213, 19%, 18%)'
    num2.style.backgroundColor = 'hsl(25, 97%, 53%)'
    num4.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num3.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num5.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num1.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num4.style.color = 'hsl(217, 12%, 63%)'
    num3.style.color = 'hsl(217, 12%, 63%)'
    num5.style.color = 'hsl(217, 12%, 63%)'
    num1.style.color = 'hsl(217, 12%, 63%)'
    yourNum.textContent = '2'
}
function btnNum3() {
    num3.style.backgroundColor = 'hsl(25, 97%, 53%)'
    num3.style.color = 'hsl(213, 19%, 18%)'
    num4.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num5.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num2.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num1.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num4.style.color = 'hsl(217, 12%, 63%)'
    num5.style.color = 'hsl(217, 12%, 63%)'
    num2.style.color = 'hsl(217, 12%, 63%)'
    num1.style.color = 'hsl(217, 12%, 63%)'
    yourNum.textContent = '3'
}
function btnNum4() {
    num4.style.backgroundColor = 'hsl(25, 97%, 53%)'
    num4.style.color = 'hsl(213, 19%, 18%)'
    num5.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num3.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num2.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num1.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num5.style.color = 'hsl(217, 12%, 63%)'
    num3.style.color = 'hsl(217, 12%, 63%)'
    num2.style.color = 'hsl(217, 12%, 63%)'
    num1.style.color = 'hsl(217, 12%, 63%)'
    yourNum.textContent = '4'
}
function btnNum5() {
    num5.style.backgroundColor = 'hsl(25, 97%, 53%)'
    num5.style.color = 'hsl(213, 19%, 18%)'
    num4.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num3.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num2.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num1.style.backgroundColor = 'hsla(217, 12%, 63%, 0.055)'
    num4.style.color = 'hsl(217, 12%, 63%)'
    num3.style.color = 'hsl(217, 12%, 63%)'
    num2.style.color = 'hsl(217, 12%, 63%)'
    num1.style.color = 'hsl(217, 12%, 63%)'
    yourNum.textContent = '5'
}


function sumbilBtn(event){
card1.classList.add('hidden')
card2.classList.remove('hidden')
}




