const i = document.querySelector(".btn")
i.addEventListener("click",()=>{
    document.querySelector(".toggle").style.display = "flex"
})

const x = document.querySelector(".fa-x")
x.addEventListener("click",()=>{
    document.querySelector(".toggle").style.display = "none"
})

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      console.log(document.documentElement.scrollTop);
      document.querySelector("body").style.backgroundColor = "#c4a69b25"
    } else {
      document.querySelector("body").style.backgroundColor = "transperent"
    }
  }