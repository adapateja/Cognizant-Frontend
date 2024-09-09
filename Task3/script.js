function calculateBill() {
   
    let conntype = document.getElementById('conntype').value;
    let scheme = document.querySelector('input[name="scheme"]:checked').value;
    let duration = document.getElementById('duration').value;

    
    let schemeCost = 0;
    if (scheme === 'Local') schemeCost = 200;
    if (scheme === 'STD') schemeCost = 350;
    if (scheme === 'FullTalkTime') schemeCost = 500;

    
    let monthlyRental = 0;
    if (conntype === 'Pre') monthlyRental = 75;
    if (conntype === 'Post') monthlyRental = 150;

    
    let totalCost = (duration * schemeCost) + monthlyRental;

    
    document.getElementById('result').innerHTML = "The Total Monthly Rental Cost is Rs. " + totalCost;
}
