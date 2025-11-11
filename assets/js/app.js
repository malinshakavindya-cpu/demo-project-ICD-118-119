function calculateSSCL() {
  const value = parseFloat(document.getElementById("amount").value);
  if (isNaN(value) || value <= 0) {
    document.getElementById("output").innerHTML = "Please enter a valid amount.";
    return;
  }

  const saleTax = value * 0.025;
  const afterSaleTax = value + saleTax;
  const vat = afterSaleTax * 0.15;
  const sscl = saleTax + vat;
  const finalAmount = value + saleTax + vat;

  document.getElementById("output").innerHTML = `
    <strong>Results:</strong><br>
    Original Amount: Rs. ${value.toFixed(2)}<br>
    Sale Tax (2.5%): Rs. ${saleTax.toFixed(2)}<br>
    After Sale Amount: Rs. ${afterSaleTax.toFixed(2)}<br>
    VAT (15%): Rs. ${vat.toFixed(2)}<br>
    Final SSCL Value (Tax Total): Rs. ${sscl.toFixed(2)}<br>
    <strong>Total Amount After Tax: Rs. ${finalAmount.toFixed(2)}</strong>
  `;
}