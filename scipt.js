const calculateBtn = document.getElementById('calculate-btn');

let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

calculateBtn.addEventListener('click', function () {
  const billAmount = document.getElementById('bill-amount-input').value;
  const percentageTip = document.getElementById('percentage-tip-input').value;

  const tipAmount = (billAmount * percentageTip) / 100;

  const tipAmountDisplay = (document.getElementById(
    'tip-amount-display'
  ).innerHTML = `$${tipAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`);

  let total = parseFloat(billAmount) + parseFloat(tipAmount);

  const totalDisplay = (document.getElementById(
    'total-amount-display'
  ).innerHTML = `$${total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`);
});
