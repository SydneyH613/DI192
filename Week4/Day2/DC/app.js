const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const result = document.getElementById("result");

const convertBtn = document.getElementById("convertBtn");
const switchBtn = document.getElementById("switchBtn");

const API_KEY = "YOUR_API_KEY";

// ✅ 1. Load currencies into dropdowns
async function loadCurrencies() {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;

  const response = await fetch(url);
  const data = await response.json();

  const codes = data.supported_codes;

  codes.forEach(currency => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.value = currency[0];
    option1.textContent = `${currency[0]} - ${currency[1]}`;

    option2.value = currency[0];
    option2.textContent = `${currency[0]} - ${currency[1]}`;

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  // default values
  fromCurrency.value = "USD";
  toCurrency.value = "ILS";
}

// ✅ 2. Convert currency
async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = amountInput.value;

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;

  const response = await fetch(url);
  const data = await response.json();

  result.textContent = `${data.conversion_result} ${to}`;
}

// ✅ 3. Switch currencies (BONUS)
function switchCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  convertCurrency();
}

// event listeners
convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", switchCurrencies);

// load on start
loadCurrencies();
