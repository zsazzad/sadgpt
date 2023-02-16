const form = document.getElementById("message-form");
const conversation = document.getElementById("bg");


form.addEventListener("submit", (event) => {
    event.preventDefault();


    const userInput = document.getElementById("message-input").value;


    const userMessageDiv = document.createElement("p");
    userMessageDiv.classList.add("receiver");
    userMessageDiv.textContent = userInput;

    conversation.appendChild(userMessageDiv);
    const csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;
    fetch("chatgpt/", {
        method: "POST",
        body: JSON.stringify({ message: userInput }),
        headers: { "Content-Type": "application/json", "X-CSRFToken": csrfToken }
    })
        .then((response) => response.json())
        .then((data) => {
            const chatbotMessageDiv = document.createElement("p");
            chatbotMessageDiv.classList.add("sender");
            chatbotMessageDiv.textContent = data.message;
            conversation.appendChild(chatbotMessageDiv);
            const audio = new Audio('static/audio/dog.mp3');
            var repeatTimes = data.num_string;
            console.log(repeatTimes)
            audio.addEventListener('ended', function () {
                repeatTimes--;
                if (repeatTimes > 0) {
                    audio.play();
                }
            });
            audio.play();
        })
        .catch((error) => console.error(error));
    document.getElementById("message-input").value = "";
});
