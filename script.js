let menos = 0
let step1 = document.querySelector(".step1")
let plano = "mouthly"

let stepMarker = 0
changeMarker()

// muda a cor dos marcadores dependo de onde estiver no formularia
function changeMarker() {
    let number = document.querySelectorAll(".number")
    number[stepMarker].style.border = "2px solid transparent"
    number[stepMarker].style.backgroundColor = "rgb(191, 215, 221)"
    number[stepMarker].style.color = "blue"
}

// move para o proximo passo do formulario
function nextStep() {
    menos -= 81
    step1.style.marginTop = menos + "vh"
    stepMarker += 1
    changeMarker()
}

// move para o passo anterior do formulario
function backStep() {
    menos += 81
    step1.style.marginTop = menos + "vh"
    stepMarker -= 1
    changeMarker()
    clear()
}

// escolhe plano
let planForm = ""
function escPlan(plan){
    planForm = plan
    alert("selecionou: "+planForm)
}
// muda botao checkbox
let trocado = false
function toggleSwitch() {
    let swit = document.querySelector("#switch")
    let mouth = document.querySelector("#mouth")
    let year = document.querySelector("#year")
    let freeMouth = document.querySelectorAll(".freeMouth")
    let preco = document.querySelectorAll(".preco")

    if (trocado == false) {
        swit.style.rotate = "0deg"
        mouth.style.opacity = "0.5"
        year.style.opacity = "1"
        trocado = true
        freeMouth[0].style.display = "block"
        freeMouth[1].style.display = "block"
        freeMouth[2].style.display = "block"
        document.querySelector("#costArcade").innerHTML = "$90/yr"
        document.querySelector("#costAdvanced").innerHTML = "$120/yr"
        document.querySelector("#costPro").innerHTML = "$150/yr"
        preco[0].innerHTML = "+10/yr"
        preco[1].innerHTML = "+20/yr"
        preco[2].innerHTML = "+20/yr"
        plano = "yearly"
    } else {
        swit.style.rotate = "180deg"
        mouth.style.opacity = "1"
        year.style.opacity = "0.5"
        trocado = false
        freeMouth[0].style.display = "none"
        freeMouth[1].style.display = "none"
        freeMouth[2].style.display = "none"
        document.querySelector("#costArcade").innerHTML = "$9/mo"
        document.querySelector("#costAdvanced").innerHTML = "$12/mo"
        document.querySelector("#costPro").innerHTML = "$15/mo"
        preco[0].innerHTML = "+1/mo"
        preco[1].innerHTML = "+2/mo"
        preco[2].innerHTML = "+2/mo"
        plano = "mouthly"
    }
}

// marca os checkbox de planos
let box = document.querySelectorAll(".form-check-input")
function check(e) {

    if (box[e].checked == false) {
        box[e].checked = true
    } else {
        box[e].checked = false
      }


}

let finalPlan = document.querySelector("#finalPlan")
function finish(){
    let finalCostPlan = document.querySelector("#finalCostPlan")
    let planName = document.querySelector("#planName")
    let costOnline = document.querySelector("#costOnline")
    let costLarge = document.querySelector("#costLarge")
    let costCustom = document.querySelector("#costCustom")
    
    planName.innerHTML = planForm
    if(planForm == "Arcade" && plano == "mouthly"){
        finalCostPlan.innerHTML = "<p>$9/mo</p>"
    }else if(planForm == "Arcade" && plano == "yearly"){
        finalCostPlan.innerHTML = "<p>$90/yr</p>"
    }else if(planForm == "Advanced" && plano == "mouthly"){
        finalCostPlan.innerHTML = "<p>$12/mo</p>"
    }else if(planForm == "Advanced" && plano == "yearly"){
        finalCostPlan.innerHTML = "<p>$120/yr</p>"
    }else if(planForm == "Pro" && plano == "mouthly"){
        finalCostPlan.innerHTML = "<p>$15/mo</p>"
    }else if(planForm == "Pro" && plano == "yearly"){
        finalCostPlan.innerHTML = "<p>$150/yr</p>"
    }

    if(box[0].checked == true && plano == "mouthly"){
      costOnline.innerHTML = "+$1/mo"
      finalPlan.innerHTML += "Online services"
    }else if(box[0].checked == true && plano == "yearly"){
      costOnline.innerHTML = "+$10/yr"
      finalPlan.innerHTML += "Online services"
    }else{
      costOnline.innerHTML = ""
    }
    
    if(box[1].checked == true && plano == "mouthly"){
      costLarge.innerHTML = "+$2/mo"
      finalPlan.innerHTML += "Larger storage"
    }else if(box[1].checked == true && plano == "yearly"){
      costLarge.innerHTML = "+$20/yr"
      finalPlan.innerHTML += "Larger storage"
    }else{
      costLarge.innerHTML = ""
    }

    if(box[2].checked == true && plano == "mouthly"){
      costCustom.innerHTML = "+$2/mo"
      finalPlan.innerHTML += "Customizable profile"
    }else if(box[2].checked == true && plano == "yearly"){
      costCustom.innerHTML = "+$20/yr"
      finalPlan.innerHTML += "Customizable profile"
    }else{
      costCustom.innerHTML = ""
    }

}

function clear(){
  finalPlan.innerHTML = ""
}