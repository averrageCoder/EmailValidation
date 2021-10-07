let arguments = process.argv;
arguments.splice(0,2);

//uc1
console.log("======= UC 1 =======")
let emailRegex = RegExp('^[a-z]+');
arguments.forEach(element => {
    console.log(element+": ", emailRegex.test(element));
});

//uc2
console.log("======= UC 2 =======")
emailRegex = RegExp('^[a-z]+@[a-z]+');
arguments.forEach(element => {
    console.log(element+": ", emailRegex.test(element));
});