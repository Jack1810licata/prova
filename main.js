let value = 0;
function initialize() {
    let number = document.getElementById('number');
    }
    function add() {
        value++;
        number.innerHTML = value;
        }
        function subtract() {
            value--;
            number.innerHTML = value;
            }
            window.onload = initialize();