let input = document.querySelector("input")
let data = [
    {
        name: "Elon musk",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg/640px-USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg"
    },
    {
        name: "Eric Schmidt",
        src: "https://imageio.forbes.com/specials-images/imageserve/5f4526a6f048a75b8e14e6b2/0x0.jpg?format=jpg&crop=3235,3234,x0,y381,safe&height=416&width=416&fit=bounds"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://image.cnbcfm.com/api/v1/image/108043097-1727989387071-gettyimages-2173579179-META_CONNECT.jpeg?v=1744292077&w=800&h=600&ffmt=webp"
    },
    {
        name: "EMarissa Mayer",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_fdAWpKoRZgSvzBZjr2XeaOOqkbbAyOApg&s"
    },
    {
        name: " Bill Gates",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZVtiDW6ZhvvWgq5SYoD8X2c2LtS5nycvLA&s"
    },
]
let pers = "";
data.forEach(function (e) {
    pers += `   <div class="members">
                    <img src="${e.src}"
                        alt="">
                    <h2 class="name">${e.name}</h2>
                </div>`
})
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {

    var filter = data.filter(function (e) {
        return e.name.trim().toLowerCase().startsWith(input.value.trim().toLowerCase())
    })
    let newuser = ""
filter.forEach(function (e) {
    newuser += `   <div class="members">
                    <img src="${e.src}"
                        alt="">
                    <h2 class="name">${e.name}</h2>
                </div>`
})
document.querySelector(".people").innerHTML = newuser;
})
