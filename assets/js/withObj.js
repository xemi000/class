let personProfile = {
    firstName : "",
    lastName : "",
    age : 0,
    weight : "",
    height : "",
    birthYear: "",
    eligableToVote: "",
    bmi: "",
    familyMemeber: [],

    calcAge : function(){

        return this.age = new Date().getFullYear()- this.birthYear;

    },
    
    eligable : function(){

    },
    calcBmi: function() {
       return this.bmi=personProfile.weight/(personProfile.height)**2
    }

    
}
personProfile.firstName =prompt("enter name");
personProfile.lastName =prompt("enter name");
personProfile.ageName =prompt("enter name");
personProfile.firstName =prompt("enter name");


(function(){

    console.log("first name" + personProfile.firstName);
    console.log("bmi" + bmi);

})