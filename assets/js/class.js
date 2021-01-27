

let choice;
let nums = [];
let operaion = " ";
let result='';
let finalRe='';


choice=prompt("how many numbers do you want to enter?");
for (let index = 0; index < choice; index++) {
    num1 = prompt("enter num");
    nums.push(num1);
    }
operation = prompt("enter operation");




    
    function sum(nums) {
        for (let index = 0; index < nums.length; index++) {
            Number(result)+=nums[index];
            }
        return result;
    }
    function sub(nums) {
    
        for (let index = 0; index < nums.length; index++) {
           Number(result)-=nums[index];
            }
        return result;
    }
    function mult(nums) {
        for (let index = 0; index < nums.length; index++) {
           Number(result)*=nums[index];
            }
        return result;
        
        
    }
    function div(nums) {
            for (let index = 0; index < nums.length; index++) {
           Number(result)/=nums[index];
                }
            return result;
        
        
    }
    
    if (operation = "add"){
        
        Number(finalRe)=sum(nums);
        
        
    }
    if (operation = "sub"){
        Number(finalRe)=sub(nums);
        
    }
    if (operation = "mult"){
        Number(finalRe)=mult(nums);
        
    }
    if (operation = "div"){
        Number(finalRe)=div(nums);
        
    }
    console.log(finalRe);











