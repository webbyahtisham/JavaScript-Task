let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let btn = document.querySelector('.btn').addEventListener('click', function () {
    src1 = img1.src
    src2 = img2.src
    img1.src = src2
    img2.src = src1

})



