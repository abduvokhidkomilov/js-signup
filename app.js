// const re =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// console.log(re)

// const gmail = 'akhrorwebgmail.com'

// re.test(gmail)
const h2 = document.querySelector("h2")
const formEl = document.querySelector("form")
const btn = document.querySelector("button")
const inp =document.querySelector("input")
const smallblock=document.querySelector("small")
const smallblockemail=document.querySelector(".smallblockemail")
const inpsmall=document.querySelector(".inpsmall")
const emailEl=document.querySelector(".email")
let error =document.querySelector(".error")
let emailer=document.querySelector(".emailerror")
let parolo=document.querySelector(".parolo")
let parolt=document.querySelector(".parolt")

btn.addEventListener("click" ,(e)=> {
    e.preventDefault()
 const ism = formEl.ism.value.trim()
 const email = formEl.email.value.trim()
 const parol1 = formEl.parolOne.value.trim()
 const parol2 = formEl.parolTwo.value.trim() 
formEl.reset() 
if(ism.length == 0) {
    error.textContent = "Iltimos ismingizni kiriting!"
    inp.style.borderColor ="red"
    
     if(ism.length>1) {
        error.textContent = " "
        inp.style.borderColor ="rgb(77, 216, 162)"

    }
}

if(email.length == 0) {
    emailer.textContent="Iltimos emailingizni kiriting!"
    formEl.email.style.borderColor="red"
}

if( parol1.length>=6 && parol2.length >= 6) {
    if (parol1 != parol2) {
        parolt.textContent="Parol to'g'ri kelmadi! "
        formEl.parolTwo.style.borderColor="red"

    }  
}
  if(parol1.length == 0 || parol1.length < 6) {
    parolo.textContent="Parolni to'g'ri kiriting! "
    formEl.parolOne.style.borderColor="red"
    
}
if(parol2.length == 0 || parol2.length < 6) {
    parolt.textContent="Parolni to'g'ri kiriting! "
    formEl.parolTwo.style.borderColor="red"   
}






// if (ism.length == 0 ){
//     inp.style.border="1px solid red"
//     smallblock.style.display="block"
// }
//  if (email.length == 0){
//     inp.style.border="1px solid red"
//     smallblockemail.style.display="block"

//  }
// if(parol1!=parol2) {
//     inpsmall.textContent="Parollar bir xil emas!"
//     inpsmall.style.color="red"
// }
// if(parol1.length < 6) {
//     inp.style.border="1px solid red"
//     inpsmall.style.color="red"
// }






})