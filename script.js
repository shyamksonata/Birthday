var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box")

function compareValue(sum,luckyNumber){
    if (sum%luckyNumber==0){
        outputBox.innerText = "your birthday is lucky";
    }else{
        outputBox.innerText ="your birthday is not lucky";

    }

}

function checkbirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob)
    if(sum&&dob)
    compareValue(sum,luckyNumber.value)
    else
    outputBox.innerText = "Please Enter both the fields";

}


function calculateSum(dob){
    dob= dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i)) ;
    }
    return sum;

}


checkNumberButton.addEventListener('click',checkbirthDateIsLucky)
