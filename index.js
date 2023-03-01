setInterval(displayHello, 500);
const opValue = document.getElementById("output"),
      inpVal = document.getElementById('temp_deff'),
      opVal = document.getElementById('temp_deff_op');

let opFinal;
function displayHello() {
    const inpSelVal = temp_deff.options[inpVal.selectedIndex].value,
          opSelVal = temp_deff_op.options[opVal.selectedIndex].value,
          inputVal = parseInt(document.querySelector('#inp_temp_data').value);
    if((inpSelVal=="cel" && opSelVal =="far"))
        opFinal = (inputVal*(9/5))+32;

    else if(inpSelVal=="cel" && opSelVal =="kel")
        opFinal = (inputVal+273.15);

    else if(inpSelVal == "far" && opSelVal =="cel")
        opFinal = (inputVal-32)*(5/9);

    else if(inpSelVal == "far" && opSelVal =="kel")
        opFinal = ((inputVal - 32) * 5/9) + 273.15 ;

    else if(inpSelVal == "kel" && opSelVal =="cel")
        opFinal = (inputVal-273.15);

    else if(inpSelVal == "kel" && opSelVal =="far")
        opFinal = (inputVal-459.67);


    else{
        opFinal = inputVal;
    }
    opValue.innerHTML = opFinal;
}


