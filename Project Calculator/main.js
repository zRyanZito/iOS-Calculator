var display = document.querySelector('h1.numero')
var mult = document.querySelector('button.mult')
var div = document.querySelector('button.div')
var add = document.querySelector('button.add')
var sub = document.querySelector('button.sub')

var insertComma = false 
var mydisplay = 0
var isAdd = false
var isSub = false
var isMult = false
var isDivi = false
var firstNumber = 0
var isPorcent = false
var limit = []
var verify = false
var subPressed = false
var addPressed = false
var multPressed = false
var diviPressed = false

display.innerHTML = `0`

function clean(){
    
    mult.style.backgroundColor = 'Purple'

    div.style.backgroundColor = 'Purple'

    add.style.backgroundColor = 'Purple'

    sub.style.backgroundColor = 'Purple'

    display.innerHTML = `0`

    mydisplay = 0
    firstNumber = 0
    isAdd = false
    isSub = false
    isMult = false
    isDivi = false
    isPorcent = false
    limit = []
    insertComma = false
    verify = false
    subPressed = false
    addPressed = false
    multPressed = false
    diviPressed = false
}

function usernum(n){

    if(mydisplay != 0){
        limit.push(n)
    }

    if (display.innerHTML === `0`){
        mydisplay = `${n}`
        mydisplay = Number(mydisplay)
        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }

    else if (insertComma && limit.length < 13 && !verify) {
        mydisplay += `.${n}`
        display.innerHTML += `${n}`
        verify = true
    }
    else if (insertComma && limit.length < 13 && verify) {
        mydisplay += `${n}`
        display.innerHTML += `${n}`
    }
    else if (limit.length < 12){
        mydisplay += `${n}`
        mydisplay = Number(mydisplay)
        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    else{
        alert('Você não pode inserir números com mais de 12 caracteres.')
    }

}
    
function comma(){

    if(!insertComma){
        display.innerHTML += `,`
        insertComma = true
    }

}

function multiply(){

    if (mydisplay !=0 && mydisplay !=NaN || isDivi || isAdd || isSub ){

    mult.style.backgroundColor = '#c900ff'
    div.style.backgroundColor = 'Purple'
    add.style.backgroundColor = 'Purple'
    sub.style.backgroundColor = 'Purple'

    }

    if (isPorcent) {
        console.log('fodase')
    }
    else if(isDivi){
        equality()
        isSub = false
        isDivi = false
        isAdd = false
        isMult = true
        diviPressed = true
        multiply()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(isAdd){
        equality()
        isSub = false
        isDivi = false
        isAdd = false
        isMult = true
        addPressed = true
        multiply()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(isSub){
        equality()
        isSub = false
        isDivi = false
        isAdd = false
        isMult = true
        subPressed = true
        multiply()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(subPressed || addPressed || diviPressed){
        mult.click()
        subPressed = false
        addPressed = false
        diviPressed = false
    }
    else if (mydisplay !=0 && mydisplay !=NaN && !subPressed && !addPressed && !diviPressed){
        isPorcent = false
        insertComma = false
        verify = false
        limit = []
        equality()
        firstNumber = Number(mydisplay)
        mydisplay = 0
        isMult = true
    }
    else{
        alert('Por favor digite um número!')
    }
    
}

function addition(){

    if (mydisplay !=0 && mydisplay !=NaN || isDivi || isMult || isSub){

    add.style.backgroundColor = '#c900ff'
    div.style.backgroundColor = 'Purple'
    mult.style.backgroundColor = 'Purple'
    sub.style.backgroundColor = 'Purple'

    }

    if(isDivi){
        equality()
        isMult = false
        isSub = false
        isDivi = false
        isAdd = true
        diviPressed = true
        addition()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(isMult){
        equality()
        isMult = false
        isSub = false
        isDivi = false
        isAdd = true
        multPressed = true
        addition()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(isSub){
        equality()
        isMult = false
        isSub = false
        isDivi = false
        isAdd = true
        subPressed = true
        addition()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(subPressed || diviPressed || multPressed){
        add.click()
        subPressed = false
        multPressed = false
        diviPressed = false
    }
    else if (mydisplay !=0 && mydisplay !=NaN && !subPressed && !multPressed && !diviPressed){
        insertComma = false
        verify = false
        limit = []
        equality()
        firstNumber = Number(mydisplay)
        mydisplay = 0
        isAdd = true
    }
    else{
        alert('Por favor digite um número!')
    }

}

function division(){

    console.log(display)

    if (mydisplay !=0 && mydisplay !=NaN || isAdd || isMult || isSub){

    div.style.backgroundColor = '#c900ff'
    add.style.backgroundColor = 'Purple'
    mult.style.backgroundColor = 'Purple'
    sub.style.backgroundColor = 'Purple'

    }

    if(isAdd){
        equality()
        isAdd = false
        isMult = false
        isSub = false
        isDivi = true
        addPressed = true
        division()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(isMult){
        equality()
        isAdd = false
        isMult = false
        isSub = false
        isDivi = true
        multPressed = true
        division()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(isSub){
        equality()
        isAdd = false
        isMult = false
        isSub = false
        isDivi = true
        subPressed = true
        division()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(subPressed || addPressed || multPressed){
        div.click()
        subPressed = false
        addPressed = false
        multPressed = false
    }
    else if (mydisplay !=0 && mydisplay !=NaN && !subPressed && !addPressed && !multPressed){
        insertComma = false
        verify = false
        limit = []
        equality()
        firstNumber = Number(mydisplay)
        mydisplay = 0
        isDivi = true
    }
    else{
        alert('Por favor digite um número!')
    }

}

function subtraction(){

    if (mydisplay !=0 && mydisplay !=NaN || isAdd || isDivi || isMult){

    sub.style.backgroundColor = '#c900ff'
    add.style.backgroundColor = 'Purple'
    mult.style.backgroundColor = 'Purple'
    div.style.backgroundColor = 'Purple'

    }

    if(isAdd){
        equality()
        isAdd = false
        isMult = false
        isDivi = false
        isSub = true
        addPressed = true
        subtraction()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(isDivi){
        equality()
        isAdd = false
        isMult = false
        isDivi = false
        isSub = true
        diviPressed = true
        subtraction()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(isMult){
        equality()
        isAdd = false
        isMult = false
        isDivi = false
        isSub = true
        multPressed = true
        subtraction()
        return firstNumber = mydisplay, mydisplay = 0
    }
    else if(addPressed || diviPressed || multPressed){
        sub.click()
        diviPressed = false
        addPressed = false
        multPressed = false
    }
    else if (mydisplay !=0 && mydisplay !=NaN && !addPressed && !diviPressed && !multPressed){
        insertComma = false
        verify = false
        limit = []
        equality()
        firstNumber = Number(mydisplay)
        mydisplay = 0
        isSub = true
    }
    else{
        alert('Por favor digite um número!')
    }

}

function equality(){

    if (isMult) {
        mydisplay = firstNumber * mydisplay
 
        mydisplay = Number(mydisplay)

        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    else if (isDivi) {
        mydisplay = firstNumber / mydisplay

        mydisplay = Number(mydisplay)

        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    else if (isAdd) {
        mydisplay = firstNumber + mydisplay

        mydisplay = Number(mydisplay)

        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    else if (isSub) {
        mydisplay = firstNumber - mydisplay

        mydisplay = Number(mydisplay)

        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    
}

function signal(){

    if(mydisplay > 0 && mydisplay !=0 && mydisplay !=NaN){
        mydisplay = mydisplay - mydisplay*2

        mydisplay = Number(mydisplay)

        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    else if (mydisplay < 0 && mydisplay !=0 && mydisplay !=NaN){
        mydisplay = mydisplay - (mydisplay*2)

        mydisplay = Number(mydisplay)

        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
    }
    else{
        alert('Por favor digite um número!')
    }

}

function porcent(){

    if(mydisplay !=0 && mydisplay !=NaN){
        isPorcent = false
        mydisplay = mydisplay/100
        insertComma = false
        verify = false
        mydisplay = Number(mydisplay)
        display.innerHTML = `${mydisplay.toLocaleString('pt-BR')}`
        multiply()
        isPorcent = true
    }
    else{
        alert('Por favor digite um número!')
    }
}

function equal(){

    if (mydisplay != 0){

    mult.style.backgroundColor = 'Purple'
        
    div.style.backgroundColor = 'Purple'
        
    add.style.backgroundColor = 'Purple'
        
    sub.style.backgroundColor = 'Purple'
    
    }
    
}

// Created by: RyanZito