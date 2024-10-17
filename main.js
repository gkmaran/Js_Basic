//GradeCalculation

function calculateGrade(){
    var getElement=parseFloat(document.getElementById("input").value);
    var score=document.getElementById("result");
    document.getElementById("input").value="";
    if(isNaN(getElement)){
        score.innerHTML="Input Is Empty Or Invalid Input...,";
    }
    if(getElement<0 || getElement>100){
        score.innerHTML="Enter Score Between (0-100)";
    }
    else if(getElement>=90 && getElement<=100){
        score.innerHTML="grade A"
    }
    else if(getElement>=80 && getElement<=89){
        score.innerHTML="grade B"
    }
    else if(getElement>=70 && getElement<=79){
        score.innerHTML="grade C"
    }
    else if(getElement>=60 && getElement<=69){
        score.innerHTML="grade D"
    }
    else if(getElement>=50 && getElement<=59){
        score.innerHTML="grade E"
    }
    else if(getElement>=0 && getElement<=49){
        score.innerHTML="grade F"
    }
}
//checkDay
function checkDay(){
    var input=document.getElementById("input").value.trim().toLowerCase();
    var day=document.getElementById("result");
    document.getElementById("input").value="";
    if(input==="sunday"||input==="saturday"){
        day.innerHTML="It's a Weekend";
    }
    else if(input==="monday" ||input==="tuesday" ||input==="wednesday" ||input==="thursday" ||input==="friday"){
        day.innerHTML="It's a Weekday"
    }
    else{
        day.innerHTML="Input Is Empty Or Please enter a valid day of the week.";
    }
}
//ageCalculation
function age(){
    var input=document.getElementById("input").value;
    var age=document.getElementById("result");
    document.getElementById("input").value="";
    if(isNaN(input) || input ==""){
        age.innerHTML="Your Input Is Empty";
    }
    else if (input <= 0 || input > 110) {
        age.innerHTML = "Your Input Is Invalid.";
    }
    else if(input>=1 && input<=12){
        age.innerHTML="You Are Child";
    }
    else if(input>=13 && input<=19){
        age.innerHTML="You Are Teenager";
    }
    else if(input>=20 && input<=64){
        age.innerHTML="You Are Adult";
    }
    else if(input>=65 && input<=110){
        age.innerHTML="You Are Senior Citizen";
    }
    else{
        age.innerHTML="Your Input Is Invalid Or Empty."
    }
}
//MultiplicationTable
function multiplicationTable(){
    var input=parseInt(document.getElementById("input").value);
    var table=document.getElementById("result");
    document.getElementById("input").value="";
    if(isNaN(input) || input < 0 || input > 10){
        table.innerHTML="Please Enter Between (0-10)";
    }
    else{
        let resultHTML = "";
        let i=0;
        while(i <= 10) {
            resultHTML += input + " x " + i + " = " + (input * i) + "<br>"; 
            i++;
        }
    table.innerHTML = resultHTML;
    }
}