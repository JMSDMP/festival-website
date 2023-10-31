// parse query string
const url = new URL(document.URL);
const searchParams = new URLSearchParams(url.search);

var total = 0.00;

if (searchParams.size === 0) {
    document.location = "../buy/"
}

if (searchParams.get("normal-tickets")) {
    
    ticketsEle = document.getElementById("tickets");
    total = 69.99 * searchParams.get("normal-tickets")

    newEle = document.createElement("li")
    newPrice = Math.ceil((Number(69.99*searchParams.get("normal-tickets")))*100)/100
    if ((newPrice*100)%10 == 0) {
        newPrice = String(newPrice) + "0"
    }
    
    
    newEle.innerText = `${searchParams.get("normal-tickets")}x Normal Ticket (£${newPrice})`
    ticketsEle.appendChild(newEle)
}


// update total
document.getElementById("total").innerText = "Total: £"+total;

