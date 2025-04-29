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
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonName = data.name;
            alert(`Pokemon Name: ${pokemonName}`);
        })
        .catch(error => console.error(error));
}
window.onload = async () => {
    const nidoapi = `https://pokeapi.co/api/v2/pokemon/nidoking`;
    await fetch(nidoapi)
        .then(response => response.json())
        .then(data => {
            const pokemonName = data.name;
            const pokemonAbilities = data.abilities.map(a => a.ability.name).join(", ");
            document.getElementById("nidoking").innerHTML = pokemonName + " " + pokemonAbilities;
        })
        .catch(error => console.error(error));
};

async function getpok() {
    let inp = document.getElementById("pin").value;
    const apicall = `https://pokeapi.co/api/v2/pokemon/${inp}`;
    fetch(apicall)
        .then(response => response.json())
        .then(data => {
            const pokemonName = data.name;
            document.getElementById("resultp").innerHTML = pokemonName;
        })
        .catch(error => console.error(error));
}



document.getElementById("submitp").addEventListener("click", getpok());
document.getElementById("apip").addEventListener("click", randpok);
document.getElementById("mutateb").addEventListener("click", function () {
    document.getElementById("textb").innerHTML = "Working, Please Wait";
    setTimeout(function () {
        document.getElementById("textb").innerHTML = "waiting";
    }, 5000);
});
document.getElementById("alert").addEventListener("click", alertList);
document.getElementById("submit").addEventListener("click", formSubmit);