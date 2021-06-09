let nCalls = document.getElementById('inp');
let nSms = document.getElementById('sms');
let callCharges = document.getElementById('calout');
let smsCharges = document.getElementById('smsout');
let totalCharges = document.getElementById('total');

function billCalculate(){
    if(nCalls.value<0 || nSms.value<0){
        alert("Enter valid input");
    }
    if(nCalls.value <= 50){
        var lf = 0.5 * nCalls.value;
        callcharges=lf;
    }else if(nCalls.value>50 && nCalls.value<=150){
        var bfo = 25 +(0.70 * (nCalls.value-50));
        callcharges = bfo;
    }else if(nCalls.value>150 && nCalls.value<=300){
        var bot = 95 +(0.85 * (nCalls.value-150));
        callcharges= bot;
    }else if(nCalls.value>300){
        at = 132.5 +(0.95 * (nCalls.value-300));
        callcharges = at;
        }
    
    callCharges.innerText = callcharges
        // alert("Call Charges are : " + callcharges)
    
    if(nSms.value <= 50){
        lf = 0* nSms.value;
        smscharges=lf

    }else if(nSms.value>50 && nSms.value<=200){
        bfo = 0 +(0.25 * (nSms.value-50));
        smscharges=bfo
    }else if(nSms.value>200 && nSms.value<=400){
        bot = 37.5 +(0.40 * (nSms.value-200));
        smscharges=bot
    }else if(nSms.value > 400){
        bot = 117.5 +(0.45 * (nSms.value-200));
        smscharges=bot
    }
    smsCharges.innerText = smscharges;
    totalCharges.innerText = callcharges+smscharges
    // alert("SMS Charges are: " + (smscharges));
    // alert("Total Charges are: " + (callcharges+smscharges));
};
