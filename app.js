let messageInput = document.getElementById("message");

let getMessageBtn = document.querySelector("#get-message");

let outputMessage = document.querySelector(".output-text");

function generateUrl(text) {
  return `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${text}`;
}

let url = "";

function fetchCall(link) {
  fetch(link)
    .then(response => response.json())
    .then(json => console.log(json.contents.translated));
}

getMessageBtn.addEventListener("click", function () {
  console.log("Input message: " + messageInput.value);
  outputMessage.innerHTML = messageInput.value;
  url = generateUrl(messageInput.value);
  fetchCall(url);
});
