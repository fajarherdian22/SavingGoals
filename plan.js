var plan = []

function goalsPlan(TargetUang, Durasi){
    var x = TargetUang / Durasi
    plan.push(x)
}


const formTarget = document.getElementById("Target-form");
formTarget.addEventListener("submit", function (e) {
    e.preventDefault();
    const TargetUang = parseInt(document.getElementById("TargetUang").value);
    console.log(TargetUang);
    const Durasi = parseInt(document.getElementById("Durasi").value);
    const hasil = goalsPlan(TargetUang, Durasi);
    // console.log(hasil);
    console.log(plan);
});