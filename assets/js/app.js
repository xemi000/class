var firstName;
var lastName;
var birthYear;
var job;

let tempAge;
let eligableToVote;
let familyMemeber = new Array();

let noOfFamily;


firstName=prompt("Your First Nmae");
lastName=prompt("Your Last Nmae");
birthYear=prompt("DOB");
jpob=prompt("Your JOB");
noOfFamily=prompt("how may fam do you have?")




for (let index = 0; index < parseInt(noOfFamily); index++){
             
    familyMemeber[index]= prompt("family memeber" + (index + 1));
}


tempAge=calcAge(birthYear);

if(tempAge>=18){
    eligableToVote=true;
}
else{
    eligableToVote=false;
}








console.log("here ia your info");
console.log("Full name" + firstName + " " + lastName);
console.log("proffesion" + job);
console.log("age" + age);
console.log("eligable to vote" + eligableToVote);


familyMemeber.forEach(function(familyMemeber, index) {
    console.log("family member " + (index + 1) + " " + familyMemeber);
});


function calcAge (br) {

    return new Date().getFullYear() - br;
}