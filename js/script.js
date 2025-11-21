welcomeMessage();
function welcomeMessage(){
    let userName = prompt('please enter your name');
    document.getElementById('Welcome-speech').innerText ='welcome, ' +userName+'!';
    // console.log("welcome," +userName+"!"); 
    
}
