let chave = "68dc0f374534219e80e8270a2c34dd3b"
function showOnScreen(dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = `Cidade: ${dados.name}`
    document.querySelector(".temperature").innerHTML = `A temperatura atual é: ${Math.floor(dados.main.temp) + "°C"}`
    document.querySelector(".state").innerHTML = `O clima está: ${dados.weather[0].description}`
    document.querySelector(".humidity").innerHTML = "Humidade: " + dados.main.humidity + "%"
    document.querySelector(".min").innerHTML = `Temperatura mínima: ${Math.floor(dados.main.temp_min) + "°C"}`
    document.querySelector(".max").innerHTML = `Temperatura máxima: ${Math.ceil(dados.main.temp_max) + "°C"}`
}
async function findCity(cityName) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + chave +
        "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())
    showOnScreen(dados)
    console.log(dados)
}
function search() {
    let cityName = document.querySelector(".input-search").value
    console.log(cityName)
    findCity(cityName)
}
