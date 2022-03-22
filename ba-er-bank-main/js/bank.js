






document.getElementById('besposite-button').addEventListener('click',()=>{

   let desposite_value=  document.getElementById('besposite-value');
   let despositetext = desposite_value.value;
   let despositetotal = parseFloat(despositetext);

    let despositemoney = document.getElementById('desposite-money');
   let despositetotalmony = parseFloat(despositemoney.innerText);
   let totldesposite = despositetotalmony  + despositetotal;
   despositemoney.innerText=totldesposite;

   let totalbanches = document.getElementById('totalbanches');
   let totalmoneyba =parseFloat(totalbanches.innerText);

   let totaldespositebanches = totalmoneyba + despositetotal;

   totalbanches.innerText= totaldespositebanches  ;

   desposite_value.value ='';

});


document.getElementById('witdrow-button').addEventListener('click',()=>{

    let witdrow_button =document.getElementById('witdrow-value');
    let witdrow_buttontext =witdrow_button.value;
    let witdrow_inputvalue = parseFloat(witdrow_buttontext);

    let witdrow_value=  document.getElementById('witdrow-balnches');
    let witdrow_text = witdrow_value.innerText;
    let witdrow_textvalue = parseFloat(witdrow_text);
    let totalwitdrow =  witdrow_textvalue + witdrow_inputvalue;
    witdrow_value.innerText= totalwitdrow;

    let witdrow_totalbalnces = document.getElementById('totalbanches');
    let  witdrow_totalbalncestotal=parseFloat(witdrow_totalbalnces.innerText);

    let totalwiddrow = witdrow_totalbalncestotal -  witdrow_inputvalue ;
    witdrow_totalbalnces.innerText = totalwiddrow;

    witdrow_button.value='';

});