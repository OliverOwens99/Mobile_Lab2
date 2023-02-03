let sentence:string = "Hello World!!!!!!!!";

// function countingString(sentence:string) {
    
// let count:number = sentence.length;

// return count;

// }


// console.log(countingString(sentence));

let space:boolean = false;

function NoSpaces(sentence:string,space?:boolean) {
    
    let count:number = 0;

    if (space == false){
         count = sentence.replace(" ","").length;
    }
    else{
         count = sentence.length;
    }
    
    return count;
    
}

console.log(NoSpaces(sentence,space));