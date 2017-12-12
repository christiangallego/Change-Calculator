function calculateChange(cost, tendered) {
  // multiply any change due by 100 to reduce decimal calculations / errors when dealing with cents
  let calculate = (tendered - cost).toFixed(2) * 100;
  return calculate;
}

function handleClickEvent() {
  // get the values from the input fields and pass into calculateChange method as arguments
  let tendered = document.getElementById("amount-received").value;
  let cost = document.getElementById("amount-due").value;
  if (tendered === "" || cost === "") {
    alert("Please enter a number to begin the program.");
  } 
  let changeDue = calculateChange(cost, tendered);
  
  // dollars
  if (changeDue >= 100) {
    // convert dollars due back to a count of one. Repeat for each denomination. e.g., 400 === 4
    let dollars = Math.floor(changeDue / 100);
    // if there is change left after dollars are calculated, assign to changeDue variable for use in next denomination
    changeDue %= 100;
    // pass in the new value of dollars, if any, to the HTML page with the corresponding ID. Repeat for each denomination
    document.getElementById("dollars-output").innerHTML = dollars;
  }
  // quarters
  if (changeDue < 100 && changeDue >= 25) {
    let quarters = Math.floor(changeDue / 25);
    changeDue %= 25;
    document.getElementById("quarters-output").innerHTML = quarters;
  }
  // dimes
  if (changeDue < 25 && changeDue >= 10) {
    let dimes = Math.floor(changeDue / 10);
    changeDue %= 10;
    document.getElementById("dimes-output").innerHTML = dimes;
  }
  // nickels
  if (changeDue < 10 && changeDue >= 5) {
    let nickels = Math.floor(changeDue / 5);
    changeDue %= 5;
    document.getElementById("nickels-output").innerHTML = nickels;
  }
  // pennies
  if (changeDue >= 1 && changeDue < 5) {
    let pennies = Math.round(changeDue);
    document.getElementById("pennies-output").innerHTML = pennies;
  }
}
// assign an event listener to the corresponding HTML ID and pass it handleClickEvent as a callback function, which executes changeDue calculations and prints results to the screen
document.getElementById("calculate-change").addEventListener("click", handleClickEvent);