var arr = []
var month = []
var data = []
var bulanan = []

function compoundInvestment(InitialDepo, rate, months, monthlyAddition) {
    var total = InitialDepo;
    //
    for (let i = 1; i <= months; i++) {
        total += monthlyAddition;
        total = Math.floor(total * (1 + rate / 12));
        arr.push(total)
    }
    // membuat variable return bulanan
    for(i=0; i< arr.length; i++){
        var x = Math.floor(arr[i]*(rate/12))
        bulanan.push(x)
    }
    //
    for(i=1; i<= arr.length; i++){
        month.push(i)
    }

    //  membuat array object bulan dan returns
    for (let i = 0; i < arr.length; i++) {
        data.push({ month: month[i], amount: arr[i], ROI: bulanan[i]});
    }
    // parsing ke HTML
    const table = document.querySelector('tbody')
    data.forEach((hasil) => {
        table.innerHTML = table.innerHTML + `<tr>
                <td>${hasil.month}</td>
                <td>${hasil.amount}</td>
                <td>${hasil.ROI}</td>
            </tr>`
    })
    return total;
}

const form = document.getElementById("investment-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const principal = parseInt(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const months = parseInt(document.getElementById("months").value);
    const monthlyAddition = parseInt(document.getElementById("monthly-addition").value);
    const result = compoundInvestment(principal, rate, months, monthlyAddition);
    console.log(arr);
    // console.log(result);
    console.log(bulanan);
    console.log(data);
});


// new Chart("myChart", {
//     type: "line",
//     data: {
//       labels: month,
//       datasets: [{
//         backgroundColor: "rgba(0,0,0,1.0)",
//         borderColor: "rgba(0,0,0,0.1)",
//         data: arr
//       }]
//     },
//     options: {
//         legend: {display: false},
//         scales: {
//           yAxes: [{ticks: {min: 6, max:16}}],
//         }
//       }
//     });