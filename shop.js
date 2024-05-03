let links = document.querySelectorAll(".links li")
let linkarr = Array.from(links)
let games = document.querySelectorAll(" .games .container > div")
let gamesarray = Array.from(games)

// console.log(linkarr)
linkarr.forEach((ele) =>{
    ele.addEventListener("click",function(e){
        // console.log(ele)
        linkarr.forEach((ele)=>{
            ele.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
        gamesarray.forEach((div)=>{
            div.style.display = "none";

        })
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    })
})
// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
