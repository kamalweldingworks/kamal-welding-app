
function calculateTotal() {

    let material = Number(document.getElementById("materialCost").value) || 0;
    let labour = Number(document.getElementById("labourCharge").value) || 0;

    let total = material + labour;

    document.getElementById("totalAmount").value = total;

    alert("Total Amount = Rs. " + total);

}
