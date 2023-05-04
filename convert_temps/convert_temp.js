window.onload = function(){ //onload event handlers
    function clearTextBoxes(){ //clears textboxes
        document.getElementById('degrees_entered').value=' ';
        document.getElementById('degrees_computed').value=' ';
    };

    function toCelsius(){ //changes labels for celsius conversion
        document.getElementById('degree_label_1').innerHTML = 'Enter F degrees:';
        document.getElementById('degree_label_2').innerHTML = 'Degrees Celsius:';
        clearTextBoxes(); 
    };
    
    function toFahrenheit(){ //changes labels for fahrenheit conversion
        document.getElementById('degree_label_1').innerHTML = 'Enter C degrees:';
        document.getElementById('degree_label_2').innerHTML = 'Degrees Fahrenheit:';
        clearTextBoxes(); 
    };
    
    function convertTemp(){ //conversion calculations
        var degreesEntered = document.getElementById('degrees_entered').value;
        var degreesComputed = document.getElementById('degrees_computed');

        if (document.getElementById('to_celsius').checked) { //to celsius conversion
            if(isNaN(degreesEntered)) { //validates entry
                alert("You must enter a valid number for degrees.");
            } else {
                degreesComputed.value = parseInt((degreesEntered - 32) * 5/9);
            }
        } else if (document.getElementById('to_fahrenheit').checked){ //to fahrenheit converion
            if(isNaN(degreesEntered)) { //validates entry
                alert("You must enter a valid number for degrees.");
            } else {
                degreesComputed.value = parseInt(((9 * degreesEntered)/5 )+32);
            }
        }
    
    };

    document.getElementById('to_celsius').onclick = toCelsius;
    document.getElementById('to_fahrenheit').onclick = toFahrenheit;
    document.getElementById('convert').onclick = convertTemp;

};