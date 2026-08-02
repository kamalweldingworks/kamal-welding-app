

function calculateTotal() {

    let material = Number(document.getElementById("materialCost").value);
    let labour = Number(document.getElementById("labourCharge").value);

    let total = material + labour;

    document.getElementById("totalAmount").value = total;

}
