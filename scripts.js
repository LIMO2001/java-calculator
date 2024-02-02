function appendToResult(value) {
    var result = document.getElementById('result');
    if (result.textContent === '0') {
        result.textContent = value;
    } else {
        result.textContent += value;
    }
}
function calculateResult() {
    var result = document.getElementById('result');
    var expression = result.textContent;
    var answer = eval(expression);
    result.textContent = answer;
}

function deleteLastCharacter() {
    var result = document.getElementById('result');
    result.textContent = result.textContent.slice(0, -1);
}
function clearResult() {
    var result = document.getElementById('result');
    result.textContent = '0';
}
