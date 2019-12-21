function Table(username, rollNo, feePaid) {
    this.username = username;
    this.rollNo = rollNo;
    this.feePaid = feePaid;
}
var i = 1;
function show() {
    var username = document.getElementById('username');
    var rollNo = document.getElementById('rollNo');
    var feePaid = document.getElementById('feePaid').value;
    var table1 = document.getElementById("push");
    var newDiv = document.getElementById("whole");
    var feeLeft;
    var annualFee = 50000;
    var remainingFee = annualFee - feePaid;
    newDiv = new Table(username, rollNo, feePaid);
    console.log(username, rollNo, feePaid);
    if (username.value.length === 0) {
        username.focus();
        return false;
    }
    else if (rollNo.value.length === 0) {
        rollNo.focus();
        return false;
    }
    else if (feePaid.length === 0) {
        feePaid.focus();
        return false;
    }
    if (feePaid == 50000) {
        console.log('Your Fee is paid.');

    }
    table1.innerHTML += `<table id="table" class="table"><tr><td>${i}</td><td class="padd">${username.value}</td>
    <td class="padd">${rollNo.value}</td><td class="padd">${feePaid}</td><td class="padd pad">${remainingFee}</td></tr></table>`;
    i++;
}