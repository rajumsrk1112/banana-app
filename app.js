let getMessageButton=document.getElementById("get-message");

let inputText=document.querySelector("#message");

let outputDiv=document.querySelector(".output-text");

getMessageButton.addEventListener("click",()=>{
    outputDiv.innerText=inputText.value;
})

// console.log(inputText.innerHTML);

