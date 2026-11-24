/* Partner Lab 2 -- Jeff to review */

function applyChanges() {
    let enteredName = document.getElementById("nameInput").value;
    let enteredMessage = document.getElementById("messageInput").value;
    let selectedColor = document.getElementById("colorSelect").value;

    if (enteredName !== "") {
        document.getElementById("greeting").innerHTML = "Hello " + enteredName + "!";
    }

    if (enteredMessage !== "") {
        document.getElementById("message").innerHTML = enteredMessage;
    }

    document.body.style.backgroundColor = selectedColor;
}


function previewColor() {
    let selectedColor = document.getElementById("colorSelect").value;
    document.getElementById("colorSelect").style.backgroundColor = selectedColor;
}


function addTodoItem() {
    let todoInputBox = document.getElementById("todoInput");
    let taskText = todoInputBox.value;

    if (taskText === "") {
        return;
    }

    let newListItem = document.createElement("li");
    newListItem.innerHTML = taskText;

    document.getElementById("todoList").appendChild(newListItem);

    todoInputBox.value = "";
}
