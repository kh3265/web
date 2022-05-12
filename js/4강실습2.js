function inputtext() {
    let text = prompt("입력창:")
    if (text == null || text == "") {
        alert('텍스트값을 입력해 주세요');
        document.getElementById('kopo14').style.display = 'none';
    } else {
        document.getElementById('kopo14Text').innerHTML = text;
        document.getElementById('kopo14').style.display = '';
    }
}

function turnRed() {
    document.getElementById('kopo14Text').style.color='red';
}

function turnBlue() {
    document.getElementById('kopo14Text').style.color = 'blue';
}
function turnGreen() {
    document.getElementById('kopo14Text').style.color = 'green';
}

inputtext();

