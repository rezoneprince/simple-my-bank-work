document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountString);
    console.log(newdepositAmount);


    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    const newDepoSiteTotal = previousDepositTotal + newdepositAmount;
    depositTotalElement.innerText = newDepoSiteTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalbalance = parseFloat(previousTotalBalanceString);

    const newTotalBalance = previousTotalbalance + newdepositAmount;
    balanceTotalElement.innerText = newTotalBalance;

});

