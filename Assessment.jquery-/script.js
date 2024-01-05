
function formvalidation(){
    let  a = document.getElementById("one");
    let  b = document.getElementById("two").value
    let  c= document.getElementById("three");
    let  d = document.getElementById("threeone");
    let  maleRadio = document.getElementById("maleRadio");
    let  femaleRadio = document.getElementById("femaleRadio");
    let   e = document.getElementById("five");
    let  f = document.getElementById("six");
    let  g = document.getElementById("seven");
    let  h = document.getElementById("eight");
    let  i = document.getElementById("nine");
    let  j = document.getElementById("ten");
    let  k = document.getElementById("twelve");

    
    if(a.value === ''){
      alert("please enter your first name")
       variableone.focus()
       return flet 
    }
    if(!b){
        alert("please enter your last name")
       b.focus()
        return false;   

    }
    if(c.value === ''){
        alert("please enter your email")
        c.focus()
        return false;   

    }
    if(d.value === ''){
        alert("please enter your mobile number")
        d.focus()
        return false;   

    }
    if (!maleRadio.checked && !femaleRadio.checked) {
        alert("Please select your gender");
        return false;
    }
    if(e.value === ''){
        alert("please enter your date of birth")
        e.focus()
        return false;   

    }
    if(f.value === ''){
        alert("please enter your address")
        f.focus()
        return false;   

    }
    if(g.value === ''){
        alert("please enter your city")
        g.focus()
        return false;   

    }
    if(h.value === ''){
        alert("please enter your area pin")
        h.focus()
        return false;   

    }
    if(i.value === ''){
        alert("please enter your state")
        i.focus()
        return false;   

    }
    if (j.value === '') {
        alert("Please select your qualification");
        j.focus()
        return false;
    }
    if(k.value === ''){
        alert("please enter your password")
        k.focus()
        return false;   

    }
    return true;
}
document.querySelector('form').onsubmit = function() {
    return formvalidation();
  };
  






s