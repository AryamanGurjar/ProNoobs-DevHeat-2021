let ans = 0, homeAmount = 0, educationAmount = 0, healthAmount = 0, travelAmount = 0, personalAmount = 0;
function homeExpense() {
    var x = document.getElementsByClassName("housebill");
    var i;
    for (i = 0; i < x.length; i++) {
        homeAmount += parseInt(x[i].value);
        // ans += parseInt(x[i].value);
    }
    // console.log(res);
    // console.log(ans);
    document.getElementById("para").innerHTML = ` amount is ${ans}`;

}
function educationExpense() {
    var x = document.getElementsByClassName("edubill");
    var i;
    for (i = 0; i < x.length; i++) {
        educationAmount += parseInt(x[i].value);
        // ans += parseInt(x[i].value);
    }
    // console.log(res);
    // console.log(ans);
    document.getElementById("para").innerHTML = ` amount is ${ans}`;

}
function healthExpense() {
    var x = document.getElementsByClassName("healthbill");
    var i;
    for (i = 0; i < x.length; i++) {
        healthAmount += parseInt(x[i].value);
        // ans += parseInt(x[i].value);
    }
    // console.log(res);
    // console.log(ans);
    document.getElementById("para").innerHTML = ` amount is ${ans}`;

}
function travellingExpense() {
    var x = document.getElementsByClassName("travelbill");
    var i;
    for (i = 0; i < x.length; i++) {
        travelAmount += parseInt(x[i].value);
        // ans += parseInt(x[i].value);
    }
    // console.log(res);
    // console.log(ans);
    document.getElementById("para").innerHTML = ` amount is ${ans}`;

}
function personalExpense() {
    var x = document.getElementsByClassName("personalbill");
    var i;
    for (i = 0; i < x.length; i++) {
        personalAmount += parseInt(x[i].value);
        // ans += parseInt(x[i].value);
    }
    // console.log(res);
    // console.log(ans);
    document.getElementById("para").innerHTML = ` amount is ${ans}`;
}
function result() {
    ans = homeAmount + healthAmount + travelAmount + personalAmount + educationAmount;
    document.getElementById("para").innerHTML = `Total amount is ${ans}`;

}