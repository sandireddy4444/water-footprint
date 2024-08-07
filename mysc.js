function redto1(){
    location.href="Tips.html";
}
function redto2(){
    location.href="Calc.html";
}
function gotolearn(){
    location.href="https://en.wikipedia.org/wiki/Water_footprint";
}
function myf(){
    document.getElementById("dem1").innerHTML="<h4>Reg No's:</h4><b>Manideep</b>-22BCE1434<br><b>Jyothi</b>-22BCE1677<br><b>Harshith</b>-22BCE1414<br>";
}
function myins(){
    document.getElementById("dem2").innerHTML="<h4>School:</h4><b>Manideep</b>CSE core<br><b>Jyothi</b>CSE core<br><b>Harshith</b>CSE core<br>";
}   

function getValue() {
    var inputElement = document.getElementById("inputField");
    var inputValue = inputElement.value.toLowerCase();
    var displayElement = document.getElementById("displayValue");
    if (foodItems.hasOwnProperty(inputValue)) {
        var foodItem = foodItems[inputValue];
        displayElement.textContent = "Water Footprint (wft) of " + inputValue + ": " + foodItem.wft + " " + foodItem.unit;
    } else {
        displayElement.textContent = "invalid";
    }
}
