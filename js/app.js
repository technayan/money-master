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
const errorBody = document.querySelector('.error-body');
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

    // Error checking
    errorCheck(clothesExpense, 'Clothes Expense');
    errorCheck(rentExpense, 'Rent Expense');
    errorCheck(foodExpense, 'Food Expense');
    errorCheck(income, 'Income Amount');

    if ((clothesExpense > -1) && (rentExpense > -1) && (foodExpense > -1) && (income > -1)) {
        const expensesInTotal = (foodExpense + rentExpense + clothesExpense);

        if (income < expensesInTotal) {

            // Calling Insufficient Balance Function
            insufficientBalance('expend', 'income');
        } else {
            errorBox.style.display = 'none';
            totalExpenses.innerText = expensesInTotal; 
            balance.innerText = income - expensesInTotal;
        }
    }
}

// Calculate Percentage Function
function calculatePercentage () {
    const percentage = parseFloat(savingPercentage.value);
    
    // Error Checking
    errorCheck(percentage, 'Saving Percentage');
    if (percentage > -1) {
        const income = getIncome();
        const saving = income * (percentage / 100); 

        // Calling Calculate Remaining function
        calculateRemaining(saving);
    }
    
};

// Calculate Remaining Function
function calculateRemaining (saving) {
    const balanceAmount = parseFloat(balance.innerText);
    const saveMoney = saving;
    if (balanceAmount < saveMoney) {

        // Calling Insufficient Balance Function
        insufficientBalance('save', 'balance');
    } else {
        errorBox.style.display = 'none';
        savingAmount.innerText = saving;
        const remain = balanceAmount - saveMoney;
        remainingBalance.innerText = remain;
    };
};

// Close Error Function 
function closeError () {
    errorBox.style.display = 'none';
}

// Error Check Function
function errorCheck(input, field) {
    if (isNaN(input) || (input < 0)) {
        errorBox.style.display = 'block';
        errorField.innerText = field;
    } else {
        return input;
    } 
}

// Insufficient Balance Function
function insufficientBalance(action, capital) {
    errorBox.style.display = 'block';
    errorBody.innerText = 'You cannot ' + action + ' more than your ' + capital + '!';
}