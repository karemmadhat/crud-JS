  let title=document.getElementById('title')  ;
 let price=document.getElementById('price')  ;  
 let taxes=document.getElementById('taxes') ;   
 let abs=document.getElementById('abs') ;   
 let discount=document.getElementById('discount');    
 let total=document.getElementById('total') ;   
 let count=document.getElementById('count');    
 let category=document.getElementById('category');
 let submit =document.getElementById('submit'); 

function gettotal()
{
    if(price.value  != ''){
    let result = (+price.value + + taxes.value + + abs.value)
    - + discount.value;  
    total.innerHTML =result; 
     
    }
}
let datepro =[];


submit.onclick =function(){
let newpro ={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    abs:abs.value,
    discount:discount.value,
    total:total.value,
    count:count.value,
    category:category.value,
}
datepro.push()
console.log(newpro)
}