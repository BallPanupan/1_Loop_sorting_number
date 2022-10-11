// sorting number problem in 1 for loop
// array [2, 3, 7, 9, 11, 7, 5, 6]

let setNumber = [2, 3, 7, 9, 11, 7, 5, 6]
let loop = 0

function count(array) {
  for (let index = 0; index < array.length; index++) {
    if(index >= (array.length-1)){
      index=0
    }

    if(loop == (array.length*array.length)){
      break;
    }
    loop++

    let s = [array[index], array[index+1]]
    if(s[0]<s[1]){
      array[index] = s[1]
      array[index+1] = s[0]
    }   
  }
  return(setNumber)
}
console.log(count(setNumber))