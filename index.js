// Code your solutions in this file

function printBadges(array){
  for (let i=0; i<array.length; i++){
    counter = i+1
    console.log(`Welcome ${array[i]}! You are employee #${counter}.`)
  }
  return array
}


