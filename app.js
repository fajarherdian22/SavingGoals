var arr = []
var month = []
var data = []
var bulanan = []

function compoundInvestment(InitialDepo, rate, months, monthlyAddition) {
    var total = InitialDepo;

    // Compound invest calc
    for (let i = 1; i <= months; i++) {
        total += monthlyAddition;
        total = Math.floor(total * (1 + rate / 12));
        arr.push(total)
    }
    // membuat variable return bulanan
    for (i = 0; i < arr.length; i++) {
        var x = Math.floor(arr[i] * (rate / 12))
        bulanan.push(x)
    }
    // Membuat Variable bulan
    for (i = 1; i <= arr.length; i++) {
        month.push(i)
    }
    var formater = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR' })
    var formatted = arr.map(formater.format);

    
    var formater2 = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR' })
    var formatted2 = bulanan.map(formater2.format);

    //  membuat array object bulan dan returns
    for (let i = 0; i < arr.length; i++) {
        data.push({ month: month[i], amount: formatted[i], ROI: formatted2[i] });
    }
    // Membuat Chart
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: month,
            datasets: [
                {
                    label: "Total Returns (RP) ",
                    backgroundColor: "#3cba9f",
                    data: arr
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Grafik investings with rate (RP)',
                type: 'logarithmic'
            }
        }
    });



    // parsing ke HTML
    const table = document.querySelector('tbody')
    data.forEach((hasil) => {
        table.innerHTML = table.innerHTML + `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">${hasil.month}</td>
                <td class="px-6 py-4">${hasil.amount}</td>
                <td class="px-6 py-4">${hasil.ROI}</td>
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
    // console.log(result);
    console.log(data);
});