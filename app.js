let messageInput = document.getElementById("message");
let getMessageBtn = document.querySelector("#get-message");
let outputMessage = document.querySelector(".output-text");

getMessageBtn.addEventListener("click", function () {
  console.log(messageInput.value);
  fetch(
    `https://api.funtranslations.com/translate/minion.json?text=${messageInput.value}`
  )
    .then(response => response.json())
    .then(json => {
      outputMessage.innerText = json.contents.translated;
    });
});
