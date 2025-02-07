
function sumbilBtn(){
 const selectedItem = document.querySelector('.number--highligthed').textContent
 location.href = `action.html?selected=${selectedItem}`
}
function highlight(number){
    const buttons = Array.from(document.querySelectorAll('.number'))
    for(let index = 0 ; index < buttons.length ; index++){
       const element = buttons[index];
       element.classList.remove('number--highligthed')
    }
    const button = buttons.at(number-1)
    button.classList.add('number--highligthed')
     console.log(button);
}
