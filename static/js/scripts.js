const form = document.getElementById("message-form");
const conversation = document.getElementById("bg");


form.addEventListener("submit", (event) => {
    event.preventDefault();


    const userInput = document.getElementById("message-input").value;


    const userMessageDiv = document.createElement("p");
    userMessageDiv.classList.add("receiver");
    userMessageDiv.textContent = userInput;

    conversation.appendChild(userMessageDiv);

    fetch("/api/chatgpt", {
        method: "POST",
        body: JSON.stringify({ message: userInput }),
        headers: { "Content-Type": "application/json" }
    })
        .then((response) => response.json())
        .then((data) => {
            const chatbotMessageDiv = document.createElement("p");
            chatbotMessageDiv.classList.add("sender");
            chatbotMessageDiv.textContent = data.message;
            conversation.appendChild(chatbotMessageDiv);
        })
        .catch((error) => console.error(error));
    document.getElementById("message-input").value = "";
});
