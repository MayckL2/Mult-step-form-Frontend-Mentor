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
  if(innerWidth <= 800){
    menos -= 78
  }else{
    menos -= 81
  }
  step1.style.marginTop = menos + "vh"
  stepMarker += 1

  document.querySelector(".step" + stepMarker).style.opacity= "0"
  changeMarker()
}

// move para o passo anterior do formulario
function backStep() {
  if(innerWidth <= 800){
    menos += 78
  }else{
    menos += 81
  }
  step1.style.marginTop = menos + "vh"
  stepMarker -= 1

  document.querySelector(".step" + (stepMarker +1) ).style.opacity= "1"
  changeMarker()
  clear()
}

// escolhe plano, anual ou mensal
let planForm = ""
function escPlan(plan) {
  planForm = plan
  alert("selecionou: " + planForm)
}

// muda botao checkbox de modo de pagamento
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

// marca os checkbox de planos adicionais
let box = document.querySelectorAll(".form-check-input")
function check(e) {

  if (box[e].checked == false) {
    box[e].checked = true
  } else {
    box[e].checked = false
  }

}

//faz os calculos finais e exibe o sumario com as escolhas feitas
let finalPlan = document.querySelector("#finalPlan")
function finish() {
  let finalCostPlan = document.querySelector("#finalCostPlan")
  let planName = document.querySelector("#planName")
  let costOnline = document.querySelector("#costOnline")
  let costLarge = document.querySelector("#costLarge")
  let costCustom = document.querySelector("#costCustom")
  let total = document.querySelector("#total")
  let x = 0
  let add0 = add1 = add2 = 0

  planName.innerHTML = planForm
  if (planForm == "Arcade" && plano == "mouthly") {
    finalCostPlan.innerHTML = "$9/mo"
    x += 9
  } else if (planForm == "Arcade" && plano == "yearly") {
    finalCostPlan.innerHTML = "$90/yr"
    x += 90
  } else if (planForm == "Advanced" && plano == "mouthly") {
    finalCostPlan.innerHTML = "$12/mo"
    x += 12
  } else if (planForm == "Advanced" && plano == "yearly") {
    finalCostPlan.innerHTML = "$120/yr"
    x += 120
  } else if (planForm == "Pro" && plano == "mouthly") {
    finalCostPlan.innerHTML = "$15/mo"
    x += 15
  } else if (planForm == "Pro" && plano == "yearly") {
    finalCostPlan.innerHTML = "$150/yr"
    x += 150
  }

  if (box[0].checked == true && plano == "mouthly") {
    costOnline.innerHTML = "+$1/mo"
    finalPlan.innerHTML += "Online services<br>"
    add0 = 1
  } else if (box[0].checked == true && plano == "yearly") {
    costOnline.innerHTML = "+$10/yr"
    finalPlan.innerHTML += "Online services<br>"
    add0 = 10
  } else {
    costOnline.innerHTML = ""

    add0 = 0
  }

  if (box[1].checked == true && plano == "mouthly") {
    costLarge.innerHTML = "+$2/mo"
    finalPlan.innerHTML += "Larger storage<br>"
    add1 = 2
  } else if (box[1].checked == true && plano == "yearly") {
    costLarge.innerHTML = "+$20/yr"
    finalPlan.innerHTML += "Larger storage<br>"
    add1 = 20
  } else {
    costLarge.innerHTML = ""
    add1 = 0
  }

  if (box[2].checked == true && plano == "mouthly") {
    costCustom.innerHTML = "+$2/mo"
    finalPlan.innerHTML += "Customizable profile<br>"
    add2 = 2
  } else if (box[2].checked == true && plano == "yearly") {
    costCustom.innerHTML = "+$20/yr"
    finalPlan.innerHTML += "Customizable profile<br>"
    add2 = 20
  } else {
    costCustom.innerHTML = ""
    add2 = 0
  }

  if (plano == "mouthly") {
    total.innerHTML = "$" + (x + add0 + add1 + add2) + "/mo"
  } else {
    total.innerHTML = "$" + (x + add0 + add1 + add2) + "/yr"
  }
}

//limpa sumario para nao acumular resultados quando chamar a funçao finish
function clear() {
  finalPlan.innerHTML = ""
  x = add0 = add1 = add2 = 0
}