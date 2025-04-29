let list = [];

function alertList(v) {
    list.push(v);
    alert(JSON.stringify(list));
}

function formSubmit() {
    let inputValue = document.getElementById("input").value;
    alertList(inputValue);
    document.getElementById("input").value = "";
}

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
        document.getElementById("toast_body").innerHTML = JSON.stringify(list);
        toast.show()
    })
}

function randpok() {
    const randomId = Math.floor(Math.random() * 898);
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonName = data.name;
            alert(`Pokemon Name: ${pokemonName}`);
        })
        .catch(error => console.error(error));
}


document.getElementById("apip").addEventListener("click", randpok);
document.getElementById("mutateb").addEventListener("click", function () {
    document.getElementById("textb").innerHTML = "Working, Please Wait";
    setTimeout(function () {
        document.getElementById("textb").innerHTML = "waiting";
    }, 5000);
});
document.getElementById("alert").addEventListener("click", alertList);
document.getElementById("submit").addEventListener("click", formSubmit);