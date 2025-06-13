let pro = document.querySelector(".progress")
let btn = document.querySelector(".button")
btn.addEventListener("click", function () {
    let count = 0;
    let int = setInterval(() => {
        if (count === 100
        ) {
            clearInterval(int)
        }
        count++
        pro.style.width = count + "%"
    }, 50);
})
