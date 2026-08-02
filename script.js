
function calculateTotal() {

    let material = Number(document.getElementById("materialCost").value) || 0;
    let labour = Number(document.getElementById("labourCharge").value) || 0;

    let total = material + labour;

    document.getElementById("totalAmount").value = total;

    alert("Total Amount = Rs. " + total);
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Sri Lanka Kamal Welding Works", 20, 20);

    doc.setFontSize(12);
    doc.text("Customer Name: " + document.querySelector('input[type="text"]').value, 20, 40);

    doc.text("Material Cost: Rs. " + document.getElementById("materialCost").value, 20, 60);
    doc.text("Labour Charge: Rs. " + document.getElementById("labourCharge").value, 20, 70);
    doc.text("Total Amount: Rs. " + document.getElementById("totalAmount").value, 20, 80);

    doc.save("Quotation.pdf");
}
}
