let h2 = document.getElementById('h2')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let int ;
start.addEventListener('click', function () {
    var count = 0
int = setInterval(() => {
        h2.textContent = count
        count++
    }, 1000);
})

stop.addEventListener('click' , function(){
clearInterval(int)
})