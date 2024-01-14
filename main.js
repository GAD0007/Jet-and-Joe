'use strict'
const toggleBtn = document.querySelector('.nav-collapse')
const cancelBtn = document.querySelector('.cancel-btn')
// toggle btn
toggleBtn.addEventListener("click",function (params) {
    document.querySelector('.navigation-small').style.display = "block"
    // navigationSmall.classList.toggle('show');
    console.log('clicked');    
})

// cancel btn
cancelBtn.addEventListener("click",function (params) {
    document.querySelector('.navigation-small').style.display = "none"
    console.log('clicked');    
})

let counter1 = 0
let counter2 = 0
let counter3 = 0

let buttonValue 
let buttonValueMinus 
let arrayCounter = [];
const itemPrices = {
    item1: 1000,
    item2: 2000,
    item3: 3000,


}


// the function that adds the counter to the small counter on cart

// const counterNav = function () {

    
// }

// 
// document.querySelector('.item-cost1').textContent = `$${itemPrices.item1}`
// console.log(itemPrices.item1);
// document.querySelector('.item-cost2').textContent = `$${itemPrices.item2}`
// document.querySelector('.item-cost3').textContent = `$${itemPrices.item3}`


const homeBtn = document.getElementById("home-btn")
homeBtn.style.borderBottom = '2px solid white';
// const navigationSmall = document.querySelector('.navigation-small')
const PlusBtn = document.querySelectorAll('.plusbtnall')
const minusBtn = document.querySelectorAll('.prevbtnall')
const toCartBtn = document.querySelectorAll('.add-to-cart')
const totalCartPrice = document.querySelector('.cost-total')
const cartItem1 = document.querySelector('.item-1')
const cartItem2 = document.querySelector('.item-2')
const cartItem3 = document.querySelector('.item-3')
// cartItem1.style.display = "none"
// cartItem2.style.display = "none"
// cartItem3.style.display = "none"







// const counterValue = 

// plus btn
for (let i = 0; i < PlusBtn.length; i++) 
// for (let i = 0; i < counterValue.length; i++) 

PlusBtn[i].addEventListener('click',function name(params) {
    const buttonValue = PlusBtn[i].value;
    if (buttonValue == 1) {
        // counter1 = 0
        counter1 ++
        // console.log('001');
        // console.log(counter);
        // counterValue.textcontent = counter
        let counterArrival1 =  document.querySelector(`.counter-value${buttonValue}`)
        counterArrival1.textContent = counter1
        arrayCounter[0]= [];
        arrayCounter[0].push(Number(counterArrival1.textContent));
        console.log(arrayCounter);
        console.log(arrayCounter[0][0]);
        // counterNav ()
    document.querySelector(`.item-count${buttonValue}`).textContent = counter1


        
    } else if( buttonValue == 2 ) {
        console.log('002');
        // counter2 = 0

        counter2 ++
        // console.log('001');
        // console.log(counter);
        // counterValue.textcontent = counter
        let counterArrival2 =  document.querySelector(`.counter-value${buttonValue}`)
        counterArrival2.textContent = counter2 
        arrayCounter[1]= [];
        arrayCounter[1].push(Number(counterArrival2.textContent));
        console.log(arrayCounter);
        console.log(arrayCounter[1][0]);;
    document.querySelector(`.item-count${buttonValue}`).textContent = counter2

    }
    else if( buttonValue == 3 ) {
        console.log('003');
        // counter3 = 0

        counter3 ++
        // console.log('001');
        // console.log(counter);
        // counterValue.textcontent = counter
        let counterArrival3 =  document.querySelector(`.counter-value${buttonValue}`)
        counterArrival3.textContent = counter3 
        arrayCounter[2]= [];
        arrayCounter[2].push(Number(counterArrival3.textContent));
        console.log(arrayCounter);
        console.log(arrayCounter[2][0]);
    document.querySelector(`.item-count${buttonValue}`).textContent = counter3


    }
    
})

// minus btn
for (let i = 0; i < minusBtn.length; i++) 
minusBtn[i].addEventListener('click',function name(params) {
    const buttonValueMinus = minusBtn[i].value;

    console.log('minus clicked');
    if (buttonValueMinus == 1) {
        // counter1 = 0
      if (counter1 > 0) {

        counter1 --
        // console.log('001');
        // console.log(counter);
        // counterValue.textcontent = counter
        let counterArrival1 =  document.querySelector(`.counter-value${buttonValueMinus}`)
        counterArrival1.textContent = counter1
        arrayCounter[0]= [];
        arrayCounter[0].push(Number(counterArrival1.textContent));
        console.log(arrayCounter);
        console.log(arrayCounter[0][0]);
    }
        
    } else if( buttonValueMinus == 2 ) {
        console.log('002');
        // counter2 = 0
        if (counter2 > 0) {

        counter2 --
        // console.log('001');
        // console.log(counter);
        // counterValue.textcontent = counter
        let counterArrival2 =  document.querySelector(`.counter-value${buttonValueMinus}`)
        counterArrival2.textContent = counter2 
        arrayCounter[1]= [];
        arrayCounter[1].push(Number(counterArrival2.textContent));
        console.log(arrayCounter);
        console.log(arrayCounter[1][0]);;
        }
    }
    else if( buttonValueMinus == 3 ) {
        console.log('003');
        // counter3 = 0

      if (counter3 > 0) {
        counter3 --
        // console.log('001');
        // console.log(counter);
        // counterValue.textcontent = counter
        console.log(counter3);
        let counterArrival3 =  document.querySelector(`.counter-value${buttonValueMinus}`)
        counterArrival3.textContent = counter3 
        arrayCounter[2]= [];
        arrayCounter[2].push(Number(counterArrival3.textContent));
        console.log(arrayCounter);
        console.log(arrayCounter[2][0]);
    }
        
      }
    
    
})

// for (let i = 0; i < toCartBtn.length; i++) 

// toCartBtn[i].addEventListener("click",function name(params) {
//     console.log(arrayCounter);
//     const buttonCartValue = toCartBtn[i].value;
//     if (buttonCartValue == 1) {
//         console.log('first');  
//     }else if (buttonCartValue == 2) {
//         console.log('second');
//     }
//     else if (buttonCartValue == 3) {
//         console.log('third');
//     }


    // let price = 10000
    // totalCartPrice.textContent= price * arrayCounter[0][0] + arrayCounter[1][0] + arrayCounter[2][0] 
// console.log(arrayCounter[0][0] + arrayCounter[1][0] + arrayCounter[2][0] );
    
// })
// console.log(arrayCounter);
// console.log(arrayCounter[0][0] + arrayCounter[1][0] + arrayCounter[2][0] );

// if (window.innerWidth > 991) {
//     document.querySelector('.navigation-small').style.display = "none"

//     // overlayOpen();
    
//   }