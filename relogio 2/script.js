let date = new Date()
let horaAtual = date.getHours()
let minutosAtual = date.getMinutes ()
let diasSemana = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"]
let diaAtualSemana = diasSemana[date.getDay()]
let diaAtualMes = date.getDate()
let mesAno = ["janeiro", "fevereiro", "maerço", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
let mesAtual = mesAno[date.getMonth()]
console.log()