document.addEventListener('keypress', function(e) {

    if(e.key === '0'){
        var numberZero = document.querySelector('button.button-zero')
        numberZero.click()
    }
    else if(e.key === ','){
        var comma = document.querySelector('button.button-comma')
        comma.click()
    }
    else if(e.key === `+`){
        add.click()
    }
    else if(e.key === `-`){
        sub.click()
    }
    else if(e.key === `*`){
        mult.click()
    }
    else if(e.key === `/`){
        div.click()
    }
    else if(e.key === '1'){
        var numberOne = document.querySelector('button.button-one')
        numberOne.click()
    }
    else if(e.key === '2'){
        var numberTwo = document.querySelector('button.button-two')
        numberTwo.click()
    }
    else if(e.key === '3'){
        var numberThree = document.querySelector('button.button-three')
        numberThree.click()
    }
    else if(e.key === '4'){
        var numberFour = document.querySelector('button.button-four')
        numberFour.click()
    }
    else if(e.key === '5'){
        var numberFive = document.querySelector('button.button-five')
        numberFive.click()
    }
    else if(e.key === '6'){
        var numberSix = document.querySelector('button.button-six')
        numberSix.click()
    }
    else if(e.key === '7'){
        var numberSeven = document.querySelector('button.button-seven')
        numberSeven.click()
    }
    else if(e.key === '8'){
        var numberEight = document.querySelector('button.button-eight')
        numberEight.click()
    }
    else if(e.key === '9'){
        var numberNine = document.querySelector('button.button-nine')
        numberNine.click()
    }
})

document.addEventListener('keydown', function(e){
    if(e.key === 'Backspace'){
        var clean = document.querySelector('button.button-clean')
        clean.click()
    }
    else if(e.key === 'Enter'){
        var equality = document.querySelector('button.button-equality')
        equality.click()
    }
})