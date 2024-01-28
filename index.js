let a11;
let a12;
let a21;
let a22;
document.getElementById("calculate").onclick = function(){
    a11=document.getElementById("one").value;
    a12=document.getElementById("two").value;
    a21=document.getElementById("three").value;
    a22=document.getElementById("four").value;
    let answer=(a11*a22)-(a12*a21);
    
    document.getElementById("anslabel").innerHTML=answer;
}
let b11;
let b12;
let b13;
let b21;
let b22;
let b23;
let b31;
let b32;
let b33;
document.getElementById("calculate2").onclick = function() {
    b11=document.getElementById("5").value;
    b12=document.getElementById("6").value;
    b13=document.getElementById("7").value;
    b21=document.getElementById("8").value;
    b22=document.getElementById("9").value;
    b23=document.getElementById("10").value;
    b31=document.getElementById("11").value;
    b32=document.getElementById("12").value;
    b33=document.getElementById("13").value; 

    let answer2=(b11*((b22*b33)-(b23*b32)))-(b12*((b21*b33)-(b23*b31)))+(b13*((b21*b32)-(b22*b31)));
    document.getElementById("anslabel2").innerHTML=answer2;
}
document.getElementById("tracebtn").onclick = function() {
    a11=document.getElementById("one").value;
    a22=document.getElementById("four").value;
    let trace=Number(a11)+Number(a22);
    document.getElementById("trace").innerHTML=trace;
    
}
document.getElementById("tracebtn2").onclick=function() {
    b11=document.getElementById("5").value;
    b22=document.getElementById("9").value;
    b33=document.getElementById("13").value;
    let trace2=Number(b11) + Number(b22) + Number(b33);
    document.getElementById("trace2").innerHTML=trace2;
}
document.getElementById("transpose").onclick=function() {
    a11=document.getElementById("one").value;
    a12=document.getElementById("two").value;
    a21=document.getElementById("three").value;
    a22=document.getElementById("four").value;
    
    document.getElementById("label1").innerHTML=a11;
    document.getElementById("label2").innerHTML=a21;
    document.getElementById("label3").innerHTML=a12;
    document.getElementById("label4").innerHTML=a22;
    
}
document.getElementById("transpose2").onclick = function() {
    document.getElementById("l1").innerHTML=b11;
    document.getElementById("l2").innerHTML=b21;
    document.getElementById("l3").innerHTML=b31;
    document.getElementById("l4").innerHTML=b12;
    document.getElementById("l5").innerHTML=b22;
    document.getElementById("l6").innerHTML=b32;
    document.getElementById("l7").innerHTML=b13;
    document.getElementById("l8").innerHTML=b23;
    document.getElementById("l9").innerHTML=b33;
    

}
let C11;

document.getElementById("cofactorbtn").onclick = function() {
    let cofactor=document.getElementById("cofactor");
    if(cofactor==C11){
        console.log("correct");

    }
}

   



    

   

   


    

    



