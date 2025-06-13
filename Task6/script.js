let tab1 = document.querySelector(".tab-1")
let tab2 = document.querySelector(".tab-2")
let tab3 = document.querySelector(".tab-3")
let content1 = document.querySelector("#content-1")
let content2 = document.querySelector("#content-2")
let content3 = document.querySelector("#content-3")


tab1.addEventListener("click" , function(){
    ar()
     content1.style.display = "block"
})
tab2.addEventListener("click" , function(){
    ar()
     content2.style.display = "block"
})
tab3.addEventListener("click" , function(){
    ar()
     content3.style.display = "block"
})

function ar (){
    document.querySelectorAll("h3").forEach(h3=>{
        h3.style.display = "none"
    })
}