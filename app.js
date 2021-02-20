
const generateBtn = document.getElementById("generateBtn");
const displayInput = document.getElementById("display-input");
const digitsContainer= document.getElementById("digits-container");
const typedPin =document.getElementById("typed-pin");
const submitBtn = document.getElementById("submit-btn");


generateBtn.addEventListener("click",()=> {
    pinGenerator()
} )

const pinGenerator = () => {
    let randomNumber = Math.random() * 10000;
    let convertedRandomNumber = randomNumber + "";
    let splitNumber = convertedRandomNumber.split(".")[0]
    if(splitNumber.length <= 3) {
        console.log(splitNumber);
        pinGenerator()
    } else
     {
         console.log(splitNumber);
         displayInput.value = splitNumber;
     }
}
digitsContainer.addEventListener('click', (event)=> {
   const digit =  event.target.innerText;
   if(isNaN(digit)) {
       //handle backSpace
       //handle clear
       typedPin.value = "";
   } else {
    typedPin.value =typedPin.value + digit;
   }

//    let multipleValue = "";
//    multipleValue = multipleValue + singleValue;
//    console.log(multipleValue);
    
})
submitBtn.addEventListener("click",()=> {
    if(displayInput.value === typedPin.value) {

        displayMatchResult('block','none');
        // const correct =document.getElementById("correct-pin");
        // const incorrect =document.getElementById("incorrect-pin");
        // correct.style.display = correctStatus;
        // incorrect.style.display = incorrectStatus;
       
    } else {
        displayMatchResult('none','block');
        // const incorrect = document.getElementById("incorrect-pin");
        // const correct =document.getElementById("correct-pin");
        // incorrect.style.display = "block"
        // correct.style.display = "none" 
    }
})
  function displayMatchResult(correctStatus, incorrectStatus) {
    const correct =document.getElementById("correct-pin");
    const incorrect =document.getElementById("incorrect-pin");
    correct.style.display = correctStatus;
    incorrect.style.display = incorrectStatus;
  }
