function complete(){
    alert("Ви увійшли успішно!");
}

function changeColorButton() {
    document.body.style.backgroundColor = 'lightblue';
}
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    var messages = []; // Масив для зберігання повідомлень
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var nameInput = document.getElementById("POST-name");
        var name = nameInput.value;
        
        messages.push("Name: " + name); // Додати нове повідомлення до масиву
        
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = ""; // Очистити вміст outputDiv перед відображенням нових повідомлень
        
        // Пройтися по всіх повідомленнях у масиві та відобразити їх
        messages.forEach(function(message) {
            var messageParagraph = document.createElement("p");
            messageParagraph.textContent = message;
            outputDiv.appendChild(messageParagraph);
        });
    });
});
