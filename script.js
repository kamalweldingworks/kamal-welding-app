function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let customer = document.querySelector('input[type="text"]').value;
    let phone = document.querySelectorAll('input[type="text"]')[1].value;
    let date = document.getElementById("quotationDate").value;
    let address = document.querySelector("textarea").value;
    let job = document.querySelector("select").value;

    let material = document.getElementById("materialCost").value;
    let labour = document.getElementById("labourCharge").value;
    let total = document.getElementById("totalAmount").value;

    doc.setFontSize(18);
    doc.text("Sri Lanka Kamal Welding Works", 20, 20);

    doc.setFontSize(12);
    doc.text("Quotation", 20, 35);

    doc.text("Customer : " + customer, 20, 45);
    doc.text("Phone : " + phone, 20, 55);
    doc.text("Date : " + date, 20, 65);
    doc.text("Address : " + address, 20, 75);
    doc.text("Job Type : " + job, 20, 85);

    doc.text("Material Cost : Rs. " + material, 20, 100);
    doc.text("Labour Charge : Rs. " + labour, 20, 110);
    doc.text("Total Amount : Rs. " + total, 20, 120);

    doc.save("Quotation.pdf");
}
