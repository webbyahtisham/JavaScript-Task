let pro = document.querySelector(".progress")
let count = 0
function startDownload() {
    let int = setInterval(() => {
        if (count === 100) {
            clearInterval(int)
        }
        count++
        pro.style.width = count + "%";
    }, 50);
}