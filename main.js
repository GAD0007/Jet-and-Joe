const homeBtn = document.getElementById("home-btn")
homeBtn.style.borderBottom = '2px solid white';
const toggleBtn = document.querySelector('.navbar-toggler-icon-box')
const cancelBtn = document.querySelector('.cancel-btn')

toggleBtn.addEventListener("click",function (params) {
    document.querySelector('.navigation-small').style.display = "block"
    console.log('clicked');    
})
cancelBtn.addEventListener("click",function (params) {
    document.querySelector('.overlay-small-screen').style.display = "none"
    console.log('clicked');    
})

// if (window.innerWidth > 991) {
//     document.querySelector('.navigation-small').style.display = "none"

//     // overlayOpen();
    
//   }