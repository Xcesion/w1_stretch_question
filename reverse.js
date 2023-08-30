//W1D1 reverse stretch question
//Write a program that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console.

const reverse = function(str){
  let reversed = ""
  for (let i = str.length -1 ; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}

const args = process.argv.slice(2);

for(const arg of args) {
  const reversedArg = reverse(arg);
  console.log(reversedArg);
}