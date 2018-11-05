function wordLength(arr) {
    //Provide Your solution here
    const obj={};
    for (const i of arr){
        obj[i]= i.length;
    }
}


module.exports = wordLength;
