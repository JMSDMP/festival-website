// parse query string
const url = new URL(document.URL);
const searchParams = new URLSearchParams(url.search);

var total = 0.00;

change = false;

if (searchParams.size > 0) {
if (searchParams.get("normal-tickets") && searchParams.get("normal-tickets") > 0) {
    
    ticketsEle = document.getElementById("tickets");
    total = 50 * searchParams.get("normal-tickets")

    newEle = document.createElement("li")
    newPrice = Math.ceil((Number(50*searchParams.get("normal-tickets")))*100)/100

    
    
    newEle.innerText = `${searchParams.get("normal-tickets")}x Normal Ticket (£${newPrice})`
    ticketsEle.appendChild(newEle)
    change = true
}

if (searchParams.get("paintballing-tickets") && searchParams.get("paintballing-tickets") > 0) {
    
    ticketsEle = document.getElementById("tickets");
    total += 12 * searchParams.get("paintballing-tickets")

    newEle = document.createElement("li")
    newPrice = Math.ceil((Number(12*searchParams.get("paintballing-tickets")))*100)/100

    
    
    newEle.innerText = `${searchParams.get("paintballing-tickets")}x Paintballing Ticket (£${newPrice})`
    ticketsEle.appendChild(newEle)
    change = true
}

if (searchParams.get("zorbing-tickets") && searchParams.get("zorbing-tickets") > 0) {
    
    ticketsEle = document.getElementById("tickets");
    total += 10 * searchParams.get("zorbing-tickets")

    newEle = document.createElement("li")
    newPrice = Math.ceil((Number(10*searchParams.get("zorbing-tickets")))*100)/100

    
    
    newEle.innerText = `${searchParams.get("zorbing-tickets")}x Zorbing Ticket (£${newPrice})`
    ticketsEle.appendChild(newEle)
    change = true
}
}

if (!change) {
    document.location = "../buy/"
}

// update total
document.getElementById("total").innerText = "Total: £"+total;

