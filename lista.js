document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const itemInput = document.getElementById("itemInput");
    const shoppingList = document.getElementById("shoppingList");

    // Función para añadir un nuevo alimento a la lista
    addButton.addEventListener("click", () => {
        const itemText = itemInput.value.trim();
        if (itemText !== "") {
            addItemToList(itemText);
            itemInput.value = "";
        }
    });

    // Función para añadir un alimento a la lista
    function addItemToList(text) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = text;
        li.appendChild(span);

        const completeButton = document.createElement("button");
        completeButton.textContent = "Comprado";
        completeButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
        li.appendChild(completeButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            shoppingList.removeChild(li);
        });
        li.appendChild(deleteButton);

        shoppingList.appendChild(li);
    }
});