// Write code that will allow any number of arguments to be passed in the Command Line and will add them together. 


var result = 0;

  for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}
  console.log(result);