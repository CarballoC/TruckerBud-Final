//listen for submit
document
  .getElementById("calculator-form")
  .addEventListener("submit", earningCalculator);

//calculate earning
function earningCalculator(e) {
  //   console.log("calculating...");
  //ui variable
  const miles = document.getElementById("miles");
  const moneyPerMile = document.getElementById("money-per-miles");
  const dailyFoodMoney = document.getElementById("daily-food-money");
  const moneyForTheTrip = document.getElementById("money-earned");
  const tripDuration = document.getElementById("trip-days");
  const totalMoneyForFood = document.getElementById("total-food-money");
  const stimatedMiles = document.getElementById("stimated-miles-day");

  const distance = parseFloat(miles.value);
  const paymentPerMile = parseFloat(moneyPerMile.value);
  const foodMoney = parseFloat(dailyFoodMoney.value);
  const quantityOfMilesDay = parseFloat(stimatedMiles.value);

  const qtyOfDays = parseFloat(distance / quantityOfMilesDay);
  const totalMoneyFood = parseFloat(qtyOfDays * foodMoney);
  const moneyEarned = parseFloat(distance * paymentPerMile - totalMoneyFood);
  if (isFinite(qtyOfDays, totalMoneyFood, moneyEarned)) {
    tripDuration.value = qtyOfDays.toFixed(1);
    totalMoneyForFood.value = totalMoneyFood.toFixed(2);
    moneyForTheTrip.value = moneyEarned.toFixed(2);
  } else {
    showError("PLease check Trip miles or Miles per day");
  }
  if (moneyPerMile.value === "" || moneyPerMile === null) {
    showError("PLease check Money per miles");
  }
  if (dailyFoodMoney.value === "" || dailyFoodMoney === null) {
    showError("PLease check Daily food money");
  }
  e.preventDefault();
}
//show error function
function showError(error) {
  const errorDiv = document.createElement("div");
  const calculator = document.querySelector(".calculator");
  const heading = document.querySelector(".heading");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  calculator.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);
}
function clearError() {
  document.querySelector(".alert").remove();
}
