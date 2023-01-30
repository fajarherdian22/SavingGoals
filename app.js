var arr = []
var month = []
var data = []
var bulanan = []
var totalbulan = []
var quotes = ['"An investment in knowledge pays the best interest." — Benjamin Franklin', '"Bottoms in the investment world dont end with four-year lows; they end with 10- or 15-year lows." — Jim Rogers',
    '"I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful." — Warren Buffett',
    '"With a good perspective on history, we can have a better understanding of the past and present, and thus a clear vision of the future." — Carlos Slim Helu',
    '"Its not whether youre right or wrong thats important, but how much money you make when youre right and how much you lose when youre wrong." — George Soros',
    '"Given a 10% chance of a 100 times payoff, you should take that bet every time." — Jeff Bezos', '"Dont look for the needle in the haystack. Just buy the haystack!" — John Bogle',
    '"I dont look to jump over seven-foot bars; I look around for one-foot bars that I can step over." — Warren Buffett',
    '"The stock market is filled with individuals who know the price of everything, but the value of nothing." — Phillip Fisher', '"In investing, what is comfortable is rarely profitable." — Robert Arnott',
    '"How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case." — Robert G. Allen']

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
    // parsing array Number ke format IDR
    var formater = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR' })
    var formatted = arr.map(formater.format);

    // parsing array bulanan return Number ke format IDR
    var formater2 = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR' })
    var formatted2 = bulanan.map(formater2.format);

    const z = bulanan.reduceRight((acc, cur) => acc + cur, 0);
    totalbulan.push(z)
    const returnTotal = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR' }).format(z)

    var balance = arr[arr.length - 1] - totalbulan
    const returnTotalIDR = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR' }).format(balance)

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
    // 
    for (let i = 0; i < 10; i++) {
        var randNum = Math.floor(Math.random() * 10) + 1;
    }


    // DOM
    document.getElementById("asu").innerHTML = formatted[formatted.length - 1];
    document.getElementById("ppk").innerHTML = returnTotal;
    document.getElementById("IB").innerHTML = returnTotalIDR;
    document.getElementById("quots").innerHTML = quotes[randNum]
    $(document).ready(function () {
        $("#hide").click(function () {
            $("#assu").hide()
        })
    })
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

    // const formater = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR'})
    // const formatted = arr.map(formater.format);
    // console.log(formatted[formatted.length -1]);

    // const formater2 = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR'})
    // const formatted2 = bulanan.map(formater2.format);
    // console.log(formatted2[formatted2.length -1]);

    // const z = bulanan.reduceRight((acc, cur) => acc + cur, 0);
    // console.log(new Intl.NumberFormat(undefined, { style: 'currency', currency: 'IDR' }).format(z))
    // console.log(result);
    console.log(data);
});