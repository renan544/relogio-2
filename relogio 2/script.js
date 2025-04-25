
let resultado = document.querySelector(".resultado")
setInterval(() => {
    let date = new Date()
    let horaAtual = 12
    let minutosAtual = date.getMinutes() < 10. ? `0${date.getMinutes()}` : `${date.getMinutes()}`
    let diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"]
    let diaAtualSemana = diasSemana[date.getDay()]
    let diaAtualMes = date.getDate()
    let mesAno = ["janeiro", "fevereiro", "maerço", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    let mesAtual = mesAno[date.getMonth()]

    if (horaAtual > 0 && horaAtual < 5) {
        resultado.innerHTML = ` <div class="card bg-noite">
            <div class="date"> 
            <h1>${horaAtual}:${minutosAtual}</h1>
                <p>${diaAtualSemana}, ${diaAtualMes} de ${mesAtual}</p>
            </div>
            <i class="fa-solid fa-moon"></i>
            </div>`


    } else if (horaAtual > 5 && horaAtual < 12) {
        resultado.innerHTML = ` <div class="card bg-manha">
            <div class="date"> 
            <h1>${horaAtual}:${minutosAtual}</h1>
                <p>${diaAtualSemana}, ${diaAtualMes} de ${mesAtual}</p>
            </div>
            <i class="fa-solid fa-cloud"></i>
            </div>`


    } else if (horaAtual >= 12  && horaAtual < 18) {
        resultado.innerHTML = ` <div class="card bg-tarde">
            <div class="date"> 
            <h1>${horaAtual}:${minutosAtual}</h1>
                <p>${diaAtualSemana}, ${diaAtualMes} de ${mesAtual}</p>
            </div>
            <i class="fa-solid fa-sun"></i>
            </div>`

    } else {
        resultado.innerHTML = ` <div class="card bg-noite">
            <div class="date"> 
            <h1>${horaAtual}:${minutosAtual}</h1>
                <p>${diaAtualSemana}, ${diaAtualMes} de ${mesAtual}</p>
            </div>
            <i class="fa-solid fa-moon"></i>
            </div>`


    }}, 1000);