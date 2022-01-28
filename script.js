const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const transcationType = document.getElementsByName('transactionType');
const showAll = document.getElementById('showAllBtn');

const showExpenseBtn = document.getElementById('expenseBtn');
const showIncomeBtn = document.getElementById('incomeBtn');

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Buttons 
showExpenseBtn.addEventListener('click', showTypeHistoy);
showIncomeBtn.addEventListener('click', showTypeHistoy);
showAll.addEventListener('click', showTypeHistoy);




// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {

    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };
    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();
    text.value = '';
    amount.value = '';

  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Check Transaction Type
function checkTransType(transaction) {
  transcationType.forEach((trans) => {
    if (trans.checked) {
      if (trans.value === '-')
        transaction.amount *= -1;
    }
  })
}


// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  checkTransType(transaction);
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');
  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  ).toFixed(2)}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
  `;

  list.appendChild(item);

}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();
  init();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));

}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}


form.addEventListener('submit', addTransaction);

init();

function showTypeHistoy() {
  const incomeEl = document.querySelectorAll('.plus');
  const expenseEl = document.querySelectorAll('.minus');

  if (this.value === '1') {
    expenseEl.forEach(expenseE => expenseE.classList.remove('hide'));
    incomeEl.forEach(incomeE => incomeE.classList.remove('hide'));
  } else if (this.value === '3') {
    incomeEl.forEach(incomeE => incomeE.classList.add('hide'));
    expenseEl.forEach(expenseE => expenseE.classList.remove('hide'));
  } else {
    expenseEl.forEach(expenseE => expenseE.classList.add('hide'));
    incomeEl.forEach(incomeE => incomeE.classList.remove('hide'));
  }
}
