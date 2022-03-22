
document.getElementById('buttonone').addEventListener('click',function(){
    let emailcontroller=  document.getElementById('emailcontroller');
    let emailfrom = emailcontroller.value;
    
    let passwordcontroller=  document.getElementById('passwordcontroller');
    let passworfrom = passwordcontroller.value;
    
    
    if(emailfrom == 'ibrahimislam101010@gmail.com' && passworfrom==123){
        window.location.href='bank.html';
    }else{
     window.location.href='erro.html';
    }
});




