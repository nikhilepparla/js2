// console.log('Hello');
// Creating a function 
// const greet = (name) => {
//     console.log('Set Time Out in Js ' + name);
// }
// You should not call the function you just have to enter function name 
//You can also pass parameters of function greet. In our case it is name parameter
// timeout = setTimeout(greet, 1000, 'NewUser')
// To stop the setTimeout we use clearTimeOut
// clearTimeout(timeout)
//Set interval will run after every specified time given by us
// setinterval = setInterval(greet, 1000, 'Nikhil')
// To stop the SetInterval we use clearTimeOut
// clearInterval(setinterval)
function dateofmine() {
    date = Date()
    console.log(date);
    document.querySelector('.setTimeOut').innerHTML=date;
}

clear_timeout=setInterval(dateofmine, 1000)
setTimeout(clear,5000)
function clear(){
    clearTimeout(clear_timeout)
}