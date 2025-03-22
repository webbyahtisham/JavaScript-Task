let para = document.getElementById('p');
let btn = document.getElementById('button');
let initialText = para.textContent;
console.log(initialText);
btn.addEventListener('click', function () {
   if (para.textContent === "Follow") {
      para.textContent = initialText;
      console.log(para.textContent);
   }
   else {
      para.textContent = "Follow";
      console.log(para.textContent);
   }
})


