const inputMonth = document.getElementById('input_month')
const inputDayWeek = document.getElementById('input_dayWeek')
const inputWorkHour = document.getElementById('input_work_hour')
let valueCard = document.getElementById('value_Card')
let salaryBrute = document.getElementById('salary_bruto')
let hourCard = document.getElementById('hour_card')
let result = 0
const valuePerHour = document.getElementById('value_per_hour')
const quantityDays = document.getElementById('quantity_days')
const hourDuration = document.getElementById('hour_duration')
let valueCardTwo = document.getElementById('value_card_two')
let hourCardTwo = document.getElementById('hour_card_two')
let valueHourCardTwo = document.getElementById('value_hour_card_two')

function calc() {
    if (inputMonth.value.length === 0 || inputDayWeek.value.length === 0 || inputWorkHour.value.length === 0) {
        alert("Todos os campos são obrigatórios")
        return
    }

    const salaryMonth = Number(inputMonth.value)
    const dayWeek = Number(inputDayWeek.value)
    const dayHour = Number(inputWorkHour.value)

    const dayPerMonth = dayWeek * 4
    const dayValue = salaryMonth / dayPerMonth
    const hourValue = dayValue / dayHour

    var format = hourValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    valueCard.innerHTML = format


    let Brute = Number(inputMonth.value)
    var formatBrute = Brute.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    salaryBrute.innerHTML = formatBrute

    let totalHourCard = inputDayWeek.value * inputWorkHour.value
    hourCard.innerHTML = totalHourCard

    valuePerHour.value = hourValue

    let valueHour = Number(hourValue)
    var formatValueHour = valueHour.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    valueHourCardTwo.innerHTML = formatValueHour



}

function calculate() {
    if (valuePerHour.value.length === 0 || quantityDays.value.length === 0 || hourDuration.value.length === 0) {
        alert("Todos os campos são obrigatórios")
        return
    }

    const inputValuePerHour = Number(valuePerHour.value)
    const inputQuantityDays = Number(quantityDays.value)
    const inputHourDuration = Number(hourDuration.value)


    valueHourProject = inputValuePerHour * inputQuantityDays
    daysProject = valueHourProject * inputHourDuration

    var formatCardTwo = daysProject.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    valueCardTwo.innerHTML = formatCardTwo

    let hourDay = hourDuration
    hourCardTwo.innerHTML = hourDay.value
}
