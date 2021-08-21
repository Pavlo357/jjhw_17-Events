// На странице находится инпут и кнопка. Пользователь может ввести что-то в инпут и нажать на кнопку,
// после этого в списке ниже должна отобразится строка с тем, что было введено в инпуте. После этого инпут очищается.
// Если пользователь добавляет еще текст, он добавляется НАД предыдущим.
// Список должен быть сделан через ul > li.


document.getElementById("ButtonId").addEventListener("click", function() {
    let textInput = document.getElementById("inputId");
    let li = document.createElement("li");
    let ul = document.getElementById("ulId");
    li.innerHTML = textInput.value;
    ul.prepend(li);
    textInput.value = "";
})