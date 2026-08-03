function calculateTotal() {
    let material = Number(document.getElementById("materialCost").value) || 0;
    let labour = Number(document.getElementById("labourCharge").value) || 0;

    let total = material + labour;

    document.getElementById("totalAmount").value = total;
}

function downloadPDF() {

    calculateTotal();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let customer = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let date = document.getElementById("quotationDate").value;
    let address = document.getElementById("customerAddress").value;
    let job = document.getElementById("jobType").value;

    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;

    let material = document.getElementById("materialCost").value;
    let labour = document.getElementById("labourCharge").value;
    let total = document.getElementById("totalAmount").value;

    doc.setFontSize(20);
    doc.text("Sri Lanka Kamal Welding Works", 20, 20);

    doc.setFontSize(11);
    doc.text("Phone : 0714199251", 20, 30);
    doc.text("WhatsApp : 0714199251", 20, 37);
    doc.text("Email : kamalwelding@gmail.com", 20, 44);
    doc.text("Address : Mahawawa, Pandukabayapura, Anuradhapura", 20, 51);

    doc.setFontSize(16);
    doc.text("Quotation", 20, 65);

    doc.setFontSize(12);

    doc.text("Quotation No : Q-0001", 20, 75);

    doc.text("Customer : " + customer, 20, 85);
    doc.text("Phone : " + phone, 20, 93);
    doc.text("Date : " + date, 20, 101);
    doc.text("Address : " + address, 20, 109);
    doc.text("Job Type : " + job, 20, 117);
    
    doc.text("Length : " + length + " ft", 20, 125);
    doc.text("Width : " + width + " ft", 20, 133);
    doc.text("Height : " + height + " ft", 20, 141);

    doc.text("Material Cost : Rs. " + material, 20, 153);
    doc.text("Labour Charge : Rs. " + labour, 20, 161);

    doc.setFont(undefined, "bold");
    doc.text("Total Amount : Rs. " + total, 20, 171);

    doc.setFont(undefined, "normal");

    doc.line(20, 180, 190, 180);

    doc.text("Customer Signature", 20, 195);
    doc.text("Authorized Signature", 120, 195);

    doc.save("Quotation.pdf");
}
