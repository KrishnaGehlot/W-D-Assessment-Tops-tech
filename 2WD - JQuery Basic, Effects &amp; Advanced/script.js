function submit() {
    let a =  document.getElementById("one").value
    let b =  document.getElementById("two").value
    let c =  document.getElementById("three").value
    let d =  document.getElementById("four").value
    let e =  document.getElementById("five").value
    let f =  document.getElementById("six").value
    let g =  document.getElementById("seven").value
    let h =  document.getElementById("eight").value
    let i =  document.getElementById("nine").value
    let j =  document.getElementById("ten").value
    let k =  document.getElementById("eleven").value
    let l =  document.getElementById("twel").value
    let m =  document.getElementById("Thir").value
    let n =  document.getElementById("check").value
    let o =  document.getElementById("password").value
    
  if(a && b && c && d && e && f && g && h && i && j && k && l && m && n && o){
     let p = window.alert("Submited")
  }
  else{
    if(!a){
        window.alert("Please enter your first name").autofocus();
    }
    if(!b){
        window.alert("Please enter your last name");
     
    }
    if(!c){
        window.alert("Please enter your Email Id ");
     
    }
    if(!d){
        window.alert("Please enter your Mobile No. ");
     
    }
    if(!e){
        window.alert("Please enter your Gender");
     
    }
    if(!f){
        window.alert("Please enter your Date of birth");
     
    }
    if(!g){
        window.alert("Please enter your Address");
     
    }
    if(!h){
        window.alert("Please enter your city Name ");
     
    }
    if(!i){
        window.alert("Please enter your Area pin");
     
    }
    if(!j){
        window.alert("Please enter your State");
     
    }
    if(!k){
        window.alert("Please enter your Qualification  Name");
     
    }
    if(!l){
        window.alert("Please enter your Specialization   Name");
     
    }
    if(!m){
        window.alert("Please enter your Specialization   Name");
     
    }
    if(!n){
        window.alert("Please enter your Check Box");
     
    }
    if(!o){
        window.alert("Please enter your  Password");
     
    }
    if(!a && !b && !c && !d && !e && !f && !g && !h && !i && !j && !k && !l && !m && !n && o){
        window.alert("Please enter your  error");
     
    }
    

    
    
  }






    

}