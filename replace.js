let text = document.getElementById('dtext');
let replacew = document.getElementById('replacew');
let replace_with = document.getElementById('replace_with');
let para = document.createElement('p');
function treplace(){
    if(text.value.includes(replacew.value)){
        let output = text.value.replaceAll(replacew.value,replace_with.value);
        para.innerText=output;
        document.getElementById('fr').appendChild(para);
    }else{
        return "that didnt work";
     }
};