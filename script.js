function calculateTotal() {
    let material = Number(document.getElementById("materialCost").value);
    let labour = Number(document.getElementById("labourCharge").value);

    let total = material + labour;

    document.getElementById("totalAmount").value = total;
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let material = document.getElementById("materialCost").value;
    let labour = document.getElementById("labourCharge").value;
    let total = document.getElementById("totalAmount").value;

    doc.setFontSize(18);
    doc.text("Sri Lanka Kamal Welding Works", 20, 20);

    doc.setFontSize(12);
    doc.text("Quotation", 20, 35);
    doc.text("Material Cost : Rs. " + material, 20, 50);
    doc.text("Labour Charge : Rs. " + labour, 20, 60);
    doc.text("Total Amount : Rs. " + total, 20, 70);

    doc.save("Quotation.pdf");
}
