//your JS code here. If required.
var counterElement = document.getElementById("counter");
var incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click", function() {
            var currentValue = parseInt(counterElement.innerText);
            alert(currentValue);
            counterElement.innerText = currentValue + 1;
});