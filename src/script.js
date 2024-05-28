let rate;
let oRate;
let days;

function findNewTotal() {
  const originalRate = document.getElementById("oRate");
  oRate = parseFloat(originalRate.value);

  const daysInput = document.getElementById("days");
  days = parseInt(daysInput.value);

  document.getElementById("copy-error").textContent = "";
  if (isNaN(oRate)) {
    document.getElementById("oRate-error").textContent =
      "Please enter a valid rate.";
    return;
  } else {
    document.getElementById("oRate-error").textContent = "";
  }
  rate = (oRate + oRate * 0.05) * days;
  let roundedRate = rate.toFixed(2);

  document.getElementById("rate").value = roundedRate;
}

function copyToClipboard(s) {
  if (s == "rate") {
    const rateField = document.getElementById("rate");
    rateField.select();
    rateField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("copy-error").textContent = "Total copied.";
  }
}

const copyRateButton = document.getElementById("copy-rate");
copyRateButton.addEventListener("click", function () {
  copyToClipboard("rate");
});

const rateInput = document.getElementById("oRate");

rateInput.addEventListener("wheel", function (event) {
  event.preventDefault();
});
