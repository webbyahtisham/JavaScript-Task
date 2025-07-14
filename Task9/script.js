let text = document.querySelector("#text")
let counter = document.querySelector(".counter")
text.addEventListener("input", function () {
    counter.textContent = text.value.length;
})