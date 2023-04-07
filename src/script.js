let rate;

function solveForRate() {
  const totalInput = document.getElementById("total");
  const total = parseFloat(totalInput.value);
  const percentInput = document.getElementById("percent-increase");
  const percent = parseFloat(percentInput.value) || 12.63;

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
function copyToClipboard() {
  const rateField = document.getElementById("rate");
  rateField.select();
  rateField.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

const copyRateButton = document.getElementById("copy-rate");
copyRateButton.addEventListener("click", function () {
  if (rate) {
    copyToClipboard();
    alert("Rate copied.");
  } else {
    alert("Please calculate rate before copying.");
  }
});
