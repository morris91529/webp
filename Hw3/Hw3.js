document.addEventListener('keydown', presstostart);
document.addEventListener('keydown', deleteChar);
var output = '';

function presstostart() {
    setInterval("print()", "400");
    //400毫秒產生一次字母
    this.removeEventListener('keydown', presstostart);
}

function print() {
    var result = Math.floor(Math.random() * 26);
    var charOut = String.fromCharCode(result + 65);
    //ascii code碼的大寫英文字母A-Z
    output = document.getElementById("out");
    output.innerHTML = charOut + output.innerHTML;
    //從前面生成
}

function deleteChar(e) {
    var lastWord = output.innerHTML.substr(-1);
    var input = document.getElementById("in");
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        input.innerHTML += e.key;
    }
    if (lastWord == e.key) {
        output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1);
    }
}