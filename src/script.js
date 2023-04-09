let rate;
let totalF;

function findNewTotal() {
  const originalRate = document.getElementById("oRate");
  const oRate = parseFloat(originalRate.value);
  const exTaxInput = document.getElementById("exTax");
  const eTax = parseFloat(exTaxInput.value) || 5.75;
  document.getElementById("copy-error").textContent = "";
  if (isNaN(oRate)) {
    document.getElementById("oRate-error").textContent =
      "Please enter a valid rate.";
    return;
  } else {
    document.getElementById("oRate-error").textContent = "";
  }

  exTaxInput.value = eTax.toFixed(2);
  totalF = (oRate + (oRate * eTax) / 100).toFixed(2);
  document.getElementById("total").value = totalF;
  document.getElementById("eTotal").value = totalF;
}

function solveForRate() {
  const totalInput = document.getElementById("total");
  const total = parseFloat(totalInput.value);
  const percentInput = document.getElementById("percent-increase");
  const percent = parseFloat(percentInput.value) || 12.63;
  document.getElementById("copyR-error").textContent = "";

  if (isNaN(total)) {
    document.getElementById("total-error").textContent =
      "Please enter a valid total.";
    totalInput.focus();
    return;
  } else {
    document.getElementById("total-error").textContent = "";
  }

  percentInput.value = percent.toFixed(2);

  rate = (total / (1 + percent / 100)).toFixed(2);
  document.getElementById("rate").value = rate;
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
