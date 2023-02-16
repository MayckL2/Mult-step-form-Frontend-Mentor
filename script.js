let menos = 0
let step1 = document.querySelector(".step1")
let plano = "yearly"

let stepMarker= 0
changeMarker()

// muda a cor dos marcadores dependo de onde estiver no formularia
function changeMarker(){
    let number = document.querySelectorAll(".number")
    number[stepMarker].style.border= "2px solid transparent"
    number[stepMarker].style.backgroundColor= "rgb(191, 215, 221)"
    number[stepMarker].style.color= "blue"
}

// move para o proximo passo do formulario
function nextStep(){
    menos -= 81
    step1.style.marginTop = menos+"vh"
    stepMarker += 1
    changeMarker()
}

// move para o passo anterior do formulario
function backStep(){
    menos += 81
    step1.style.marginTop = menos+"vh"
    stepMarker -= 1
    changeMarker()
}

// muda botao checkbox
let trocado = false
function toggleSwitch(){
    let swit = document.querySelector("#switch")
    let mouth= document.querySelector("#mouth")
    let year= document.querySelector("#year")
    let freeMouth= document.querySelectorAll(".freeMouth")
    let preco = document.querySelectorAll(".preco")

    if(trocado == false){
        swit.style.rotate= "180deg"
        mouth.style.opacity= "1"
        year.style.opacity= "0.5"
        trocado = true
        freeMouth[0].style.display= "block"
        freeMouth[1].style.display= "block"
        freeMouth[2].style.display= "block"
        document.querySelector("#costArcade").innerHTML= "$90/yr"
        document.querySelector("#costAdvanced").innerHTML= "$120/yr"
        document.querySelector("#costPro").innerHTML= "$150/yr"
        preco[0].innerHTML= "+10/yr"
        preco[1].innerHTML= "+20/yr"
        preco[2].innerHTML= "+20/yr"
        plano= "mouthly"
    }else{
        swit.style.rotate= "0deg"
        mouth.style.opacity= "0.5"
        year.style.opacity= "1"
        trocado = false
        freeMouth[0].style.display= "none"
        freeMouth[1].style.display= "none"
        freeMouth[2].style.display= "none"
        document.querySelector("#costArcade").innerHTML= "$9/mo"
        document.querySelector("#costAdvanced").innerHTML= "$12/mo"
        document.querySelector("#costPro").innerHTML= "$15/mo"
        preco[0].innerHTML= "+1/mo"
        preco[1].innerHTML= "+2/mo"
        preco[2].innerHTML= "+2/mo"
        plano= "yearly"
    }
}

// marca os checkbox de planos
function check(e){
    let box = document.querySelectorAll(".form-check-input")
    if(box[e].checked == false){
        box[e].checked= true
    }else{
        box[e].checked= false
    }
}