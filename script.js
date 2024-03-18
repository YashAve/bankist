'use strict';

let account;

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const elements = {
  labelWelcome: document.querySelector('.welcome'),
  labelDate: document.querySelector('.date'),
  labelBalance: document.querySelector('.balance__value'),
  labelSumIn: document.querySelector('.summary__value--in'),
  labelSumOut: document.querySelector('.summary__value--out'),
  labelSumInterest: document.querySelector('.summary__value--interest'),
  labelTimer: document.querySelector('.timer'),

  containerApp: document.querySelector('.app'),
  containerMovements: document.querySelector('.movements'),

  btnLogin: document.querySelector('.login__btn'),
  btnTransfer: document.querySelector('.form__btn--transfer'),
  btnLoan: document.querySelector('.form__btn--loan'),
  btnClose: document.querySelector('.form__btn--close'),
  btnSort: document.querySelector('.btn--sort'),

  inputLoginUsername: document.querySelector('.login__input--user'),
  inputLoginPin: document.querySelector('.login__input--pin'),
  inputTransferTo: document.querySelector('.form__input--to'),
  inputTransferAmount: document.querySelector('.form__input--amount'),
  inputLoanAmount: document.querySelector('.form__input--loan-amount'),
  inputCloseUsername: document.querySelector('.form__input--user'),
  inputClosePin: document.querySelector('.form__input--pin')
};

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (movements) {
  elements.containerMovements.innerHTML = "";
  movements.forEach(function (movement, index) {
    const movementType = movement > 0 ? "deposit" : "withdrawal";
    const HTML = `
    <div class="movements__row">
      <div class="movements__type movements__type--${movementType}">${index + 1} ${movementType}</div>
      <div class="movements__value">${movement}€</div>
    </div>`;
    elements.containerMovements.insertAdjacentHTML("afterBegin", HTML);
  })
};

const usernames = function () {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map(value => value.charAt(0)).join("");
    //console.log(account);
  });
};

const balances = function () {
  elements.labelBalance.textContent = `${account.movements.reduce(function (accumulator, movement, index, array) {
    return accumulator + movement;
  })}€`;

  elements.labelSumIn.textContent = `${account.movements
    .filter(movement => movement > 0)
    .reduce((accumulator, movement) => accumulator + movement)}€`;

  elements.labelSumOut.textContent = `${account.movements
    .filter(movement => movement < 0)
    .reduce((accumulator, movement) => accumulator + movement) * -1}€`;

  elements.labelSumInterest.textContent = `${Math.round(account.movements
    .filter(movement => movement > 0)
    .reduce((accumulator, movement) => accumulator + ((movement * account.interestRate) / 100))
  )}€`;
};

const login = function () {
  console.log("login function called");
  account = accounts.find(credential => credential.username === elements.inputLoginUsername.value
    && credential.pin === Number(elements.inputLoginPin.value));
  console.log(account);
  if (account) {
    console.log("login successful");
    elements.labelWelcome.textContent = `Welcome back, ${account.owner.split(" ")[0]}!`;
    console.log(elements.labelWelcome.textContent);
    displayMovements(account.movements);
    balances();
    elements.containerApp.style.opacity = 100;
  }
}

// setup functions
usernames();

elements.containerApp.style.opacity = 0;
elements.btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  login();
});