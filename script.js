let ans = 0, earning = 0, homeAmount = 0, educationAmount = 0, healthAmount = 0, travelAmount = 0, personalAmount = 0;

function calculate() {
    var x = (document.getElementById("earning").value);
    earning += parseInt(x);

    var x = document.getElementsByClassName("housebill");
    var i;
    for (i = 0; i < x.length; i++) {
        homeAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }

    var x = document.getElementsByClassName("edubill");
    var i;
    for (i = 0; i < x.length; i++) {
        educationAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }


    var x = document.getElementsByClassName("healthbill");
    var i;
    for (i = 0; i < x.length; i++) {
        healthAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }


    var x = document.getElementsByClassName("travelbill");
    var i;
    for (i = 0; i < x.length; i++) {
        travelAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }


    var x = document.getElementsByClassName("personalbill");
    var i;
    for (i = 0; i < x.length; i++) {
        personalAmount += parseInt(x[i].value);
        ans += parseInt(x[i].value);
    }
    document.getElementById("anspara").innerHTML = ` Household Expenses are ${homeAmount}<br>
     Education Expenses are ${educationAmount}<br>
     Health Expenses are ${healthAmount}<br>
     Travel Expenses are ${travelAmount}<br>
     Personal Expenses are ${personalAmount}<br>
     Earnings are ${earning} <br>
    Savings are ${earning - ans} <br> `;

}


window.onclick = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Your Expenses"
        },
        data: [{
            type: "pie",
            startAngle: 0,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                { y: homeAmount, label: "homeAmount" },
                { y: educationAmount, label: "educationAmount" },
                { y: healthAmount, label: "healthAmount" },
                { y: travelAmount, label: "travelAmount" },
                { y: personalAmount, label: "personalAmount" },
            ]
        }]
    });
    chart.render();

}
