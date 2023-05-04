function makeChange(cents){ //passes user entry and does calculation
    var quarters = document.getElementById('quarters');
    var dimes = document.getElementById('dimes');
    var nickels = document.getElementById('nickels');
    var pennies = document.getElementById('pennies');

    var change = cents;

    quarters.value = parseInt(change / 25); //calculates quarters
    change = change % 25;

    dimes.value = parseInt(change / 10); //calculates dimes
    change = change % 10;
    
    nickels.value = parseInt(change / 5); //calculates nickels
    change = change % 5;

    pennies.value = parseInt(change / 1); //calculates pennies
    change = change % 1;    
};

function processEntries(){ //gets user entry and checks for validation
    var cents = document.getElementById('cents').value;
    if (isNaN(cents)) { //validates entry
        alert("Entry must be numeric");
    } else if (cents < 0 || cents > 99) {
        alert("Entry of cents should be between 0 to 99");
    } else {
        var change = makeChange(cents);   
    }
};

function clearEntries(){ //clears entries
    document.getElementById('cents').value=' ';
};

window.onload = function(){ //onload event handlers
    document.getElementById('calculate').onclick=processEntries;
    document.getElementById('cents').addEventListener('focus',clearEntries);
    document.getElementById('cents').focus();
};
