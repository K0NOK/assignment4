//  Functionality of ticket count change

function ticketCountChange(ticket, isIncrease) {
    let ticketCount = parseInt(document.getElementById(ticket + '-ticket-count').value);
    if (isIncrease == false && ticketCount > 0) {
        ticketCount--;
    }
    if (isIncrease == true) {
        ticketCount++;
    }
    document.getElementById(ticket + '-ticket-count').value = ticketCount;
}
//  Functionality of calculate total price and show the price in the message box

function calculateTotalPrice() {
    const firstClassTicketCount = parseInt(document.getElementById('firstClass-ticket-count').value);
    const firstClassTicketPrice = firstClassTicketCount * 150;
    const economyTicketCount = parseInt(document.getElementById('economy-ticket-count').value);
    const economyTicketPrice = economyTicketCount * 100;
    const subtotal = firstClassTicketPrice + economyTicketPrice;
    document.getElementById('sub-total').innerText = subtotal;
    const vat = Math.round((subtotal * 0.1));
    document.getElementById('vat').innerText = vat;
    const total = subtotal + vat;
    document.getElementById('total').innerText = total;
    //  Confirmation message by clicking Book Now button
    document.getElementById('show-firstClass').innerText = firstClassTicketCount;
    document.getElementById('show-economy').innerText = economyTicketCount;
    document.getElementById('show-firstClass-price').innerText = '$' + firstClassTicketPrice;
    document.getElementById('show-economy-price').innerText = '$' + economyTicketPrice;
    document.getElementById('show-subtotal').innerText = '$' + subtotal;
    document.getElementById('show-vat').innerText = '$' + vat;
    document.getElementById('show-total').innerText = '$' + total;

}
// first class plus button 
document.getElementById('firstClass-plus-btn').addEventListener('click', function() {
    ticketCountChange("firstClass", true);
    calculateTotalPrice();
});
// first class minus button
document.getElementById('firstClass-minus-btn').addEventListener('click', function() {
    ticketCountChange("firstClass", false);
    calculateTotalPrice();
});

// economy plus button 
document.getElementById('economy-plus-btn').addEventListener('click', function() {
    ticketCountChange("economy", true);
    calculateTotalPrice();
});
// economy minus button
document.getElementById('economy-minus-btn').addEventListener('click', function() {
    ticketCountChange("economy", false);
    calculateTotalPrice();
});
// book now button
document.getElementById("bookNow-button").addEventListener('click', function() {
    document.getElementById('confirmation').style.display = "block";
    document.getElementById("booking-details").style.display = "none";
});