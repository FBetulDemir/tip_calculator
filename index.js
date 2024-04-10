function calculateBill(){
    const totalBill = parseFloat(document.getElementById("bill").value);
    if (50 < totalBill && totalBill <= 300){
        const tipLow = 10;
        const percentageTipLow = (tipLow/ 100) * totalBill;
        document.getElementById("result").textContent = `The total amount of the bill is ${totalBill}. The tip % is therefore ${tipLow} and the total amount to pay including tip is ${percentageTipLow + totalBill}.`
    } else if (totalBill > 300){
        const tipHigh = 15;
        const percentageTipHigh = (tipHigh/ 100) * totalBill;
        document.getElementById("result").textContent = `The total amount of the bill is ${totalBill}. The tip % is therefore ${tipHigh} and the total amount to pay including tip is ${percentageTipHigh + totalBill}.`
    }
}
