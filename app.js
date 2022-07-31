// https://calculator.swiftutors.com/gross-scheduled-income-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const grossScheduledIncomeRadio = document.getElementById('grossScheduledIncomeRadio');
const grossOperatingIncomeRadio = document.getElementById('grossOperatingIncomeRadio');
const vacancyandCreditLossRadio = document.getElementById('vacancyandCreditLossRadio');

let grossScheduledIncome;
let grossOperatingIncome = v1;
let vacancyandCreditLoss = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

grossScheduledIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Operating Income (GOI)';
  variable2.textContent = 'Vacancy and Credit Loss (VCL)';
  grossOperatingIncome = v1;
  vacancyandCreditLoss = v2;
  result.textContent = '';
});

grossOperatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Scheduled Income (GSI)';
  variable2.textContent = 'Vacancy and Credit Loss (VCL)';
  grossScheduledIncome = v1;
  vacancyandCreditLoss = v2;
  result.textContent = '';
});

vacancyandCreditLossRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Scheduled Income (GSI)';
  variable2.textContent = 'Gross Operating Income (GOI)';
  grossScheduledIncome = v1;
  grossOperatingIncome = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(grossScheduledIncomeRadio.checked)
    result.textContent = `Gross Scheduled Income = ${computeGrossScheduledIncome().toFixed(2)}`;

  else if(grossOperatingIncomeRadio.checked)
    result.textContent = `Gross Operating Income = ${computeGrossOperatingIncome().toFixed(2)}`;

  else if(vacancyandCreditLossRadio.checked)
    result.textContent = `Vacancy and Credit Loss = ${computeVacancyandCreditLoss().toFixed(2)}`;
})

// calculation

function computeGrossScheduledIncome() {
  return Number(grossOperatingIncome.value) + Number(vacancyandCreditLoss.value);
}

function computeGrossOperatingIncome() {
  return Number(grossScheduledIncome.value) - Number(vacancyandCreditLoss.value);
}

function computeVacancyandCreditLoss() {
  return Number(grossScheduledIncome.value) - Number(grossOperatingIncome.value);
}