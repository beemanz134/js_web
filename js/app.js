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

document.getElementById("alert").addEventListener("click", alertList);
document.getElementById("submit").addEventListener("click", formSubmit);