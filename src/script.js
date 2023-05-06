let rate;
let totalF;
let oRate;

function findNewTotal() {
  const originalRate = document.getElementById("oRate");
  oRate = parseFloat(originalRate.value);
  const eTax = 5.75;
  document.getElementById("copy-error").textContent = "";
  if (isNaN(oRate)) {
    document.getElementById("oRate-error").textContent =
      "Please enter a valid rate.";
    return;
  } else {
    document.getElementById("oRate-error").textContent = "";
  }
  totalF = oRate + (oRate * 5.75) / 100;
  let roundedTotal = roundUp(totalF);

  rate = (oRate * (100 + 5.75)) / (100 + 12.63);
  let roundedRate = roundUp(rate);

  document.getElementById("rate").value = roundedRate;
  document.getElementById("eTotal").value = roundedTotal;
}

function roundUp(value) {
  const roundedValue = Math.floor(value * 100) / 100; // Round down to second decimal

  if (value - roundedValue >= 0.005) {
    return roundedValue + 0.01; // Round up if the difference is 0.005 or higher
  }

  return roundedValue;
}

function copyToClipboard(s) {
  if (s == "rate") {
    const rateField = document.getElementById("rate");
    rateField.select();
    rateField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("copyR-error").textContent = "Rate copied.";
  }
  if (s == "eTotal") {
    const totalField = document.getElementById("eTotal");
    totalField.select();
    totalField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("copy-error").textContent = "Total copied.";
  }
}
const copyEtotalButton = document.getElementById("copy-eTotal");
copyEtotalButton.addEventListener("click", function () {
  copyToClipboard("eTotal");
});

const copyRateButton = document.getElementById("copy-rate");
copyRateButton.addEventListener("click", function () {
  copyToClipboard("rate");
});

const rateInput = document.getElementById("oRate");

rateInput.addEventListener("wheel", function (event) {
  event.preventDefault();
});

/*const findButton = document.getElementById("find");
findButton.addEventListener("click", function () {
  findNewTotal();
});*/
