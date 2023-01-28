var arr = []
var month = [] /// cuma bisa sampe 12
var data = []


function compoundInvestment(InitialDepo, rate, months, monthlyAddition) {
    var total = InitialDepo;
    for (let i = 1; i <= months; i++) {
        total += monthlyAddition;
        total = Math.floor(total * (1 + rate / 12));
        arr.push(total)
    }
    for(i=1; i<= arr.length; i++){
        month.push(i)
    }

    for (let i = 0; i < arr.length; i++) {
        data.push({ month: month[i], amount: arr[i] });
    }
    const table = document.querySelector('tbody')
    data.forEach((hasil) => {
        table.innerHTML = table.innerHTML + `<tr>
                <td>${hasil.month}</td>
                <td>${hasil.amount}</td>
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
    console.log(result);
    console.log(arr)
    console.log(data);
});


// const newTable = document.createElement("table");
// newTable.innerHTML = "<thead><th>Month</th><th>Return</th></thead>";

// for(Data of data){
//     const newRow = document.createElement("tr")
//     const tdMonth = document.createElement("td")
//     const tdReturn = document.createElement("td")
//     tdMonth.textContent = Data.month;
//     tdReturn.textContent = Data.amount;
//     newRow.appendChild(tdMonth);
//     newRow.appendChild(tdReturn);
//     newTable.appendChild(newRow);
// }

// const target = document.getElementById('target');
// target.appendChild(newTable);

