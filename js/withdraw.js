document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);


    if (isNaN(newWithdrawAmount)) {
        alert('please use valid number');
        return;
    }
    
    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousTotalWithdrawString = withdrawTotalElement.innerText;
    const  previousTotalWithdraw = parseFloat(previousTotalWithdrawString);
    
    

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Your money is low');
        return;
    }

    const newWithDrawTotal = previousTotalWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithDrawTotal;


    const presentTotalBalance = previousBalanceTotal - newWithdrawAmount;

    balanceElement.innerText = presentTotalBalance;


})