// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  //Hide Results
  document.getElementById('results').style.display = 'none';
  //Show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1500);
  e.preventDefault();
});

// Calculate Results
function calculateResults(){
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const  calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    //Show Results
    document.getElementById('results').style.display = 'block';
    
    //Hide Loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your numbers');
  }

}

//Show Error
function showError(error){
  //Show Results
  document.getElementById('results').style.display = 'none';
    
  //Hide Loader
  document.getElementById('loading').style.display = 'none';

  //Create a div
  const errorDiv = document.createElement('div');
  //Add class to error div
  errorDiv.className = 'alert alert-danger';
  //Append text Node to the div
  errorDiv.appendChild(document.createTextNode(error));
  //Get Heading and parent Element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  //Insert the errorDiv before heading
  card.insertBefore(errorDiv, heading);

  //Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

//Clear error function
function clearError(){
  document.querySelector('.alert').remove();
}