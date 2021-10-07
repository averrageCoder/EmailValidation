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

//uc3
console.log("======= UC 3 =======")
emailRegex = RegExp('^[a-z]+@[a-z]+\\.[a-z]+');
arguments.forEach(element => {
    console.log(element+": ", emailRegex.test(element));
});

//uc4
console.log("======= UC 4 =======")
emailRegex = RegExp('^[a-z]+([\.\+\_\-][a-z]+)?@[a-z]+.[a-z]+');
arguments.forEach(element => {
    console.log(element+": ", emailRegex.test(element));
});

//uc5
console.log("======= UC 5 =======")
emailRegex = RegExp('^[a-z]+([\.\+\_\-][a-z]+)?@[a-z]+.[a-z]+(\.[a-z]{2})?$');
arguments.forEach(element => {
    console.log(element+": ", emailRegex.test(element));
});