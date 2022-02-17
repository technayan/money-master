//*****  Variables Declaration  *****//

const incomeInput = document.getElementById('income');
const foodInput = document.getElementById('food');
const rentInput = document.getElementById('rent');
const clothesInput = document.getElementById('clothes');
const calculateBtn = document.getElementById('calculate-btn');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');
const savingPercentage = document.getElementById('save');
const saveBtn = document.getElementById('save-btn');
const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');
const errorBox = document.getElementById('error');
const errorField = document.getElementById('error-field');
const errorCloseBtn = document.getElementById('error-close-btn');

//*****  Event Handlers  *****//

calculateBtn.addEventListener('click', calculateBalance);
saveBtn.addEventListener('click', calculatePercentage);
errorCloseBtn.addEventListener('click', closeError);

//*****  Functions  *****//

// Get Income Function
function getIncome() {
    const income = parseFloat(incomeInput.value);
    return income; 
}

// Calculate Balance Function
function calculateBalance () {
    const income = getIncome();
    const foodExpense = parseFloat(foodInput.value);
    const rentExpense = parseFloat(rentInput.value);
    const clothesExpense = parseFloat(clothesInput.value);
    
    const expensesInTotal = (foodExpense + rentExpense + clothesExpense);
    totalExpenses.innerText = expensesInTotal; 
    balance.innerText = income - expensesInTotal;

    calculateRemaining();
    
}

// Calculate Percentage Function
function calculatePercentage () {
    const percentage = parseFloat(savingPercentage.value);
    const income = getIncome();
    const saving = income * (percentage / 100); 
    savingAmount.innerText = saving;

    calculateRemaining();
}

// Calculate Remaining Function
function calculateRemaining () {
    const balanceAmount = parseFloat(balance.innerText);
    const saving = parseFloat(savingAmount.innerText);
    const remain = balanceAmount - saving;
    remainingBalance.innerText = remain;
}

// Close Error Function 
function closeError () {
    errorBox.style.display = 'none';
}