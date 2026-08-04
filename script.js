let uploadedImage = "";

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("jobPhoto").addEventListener("change", function (event) {

        const file = event.target.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (e) {

                uploadedImage = e.target.result;

                const preview = document.getElementById("photoPreview");
                preview.src = uploadedImage;
                preview.style.display = "block";

            };

            reader.readAsDataURL(file);

        }

    });

});
function calculateTotal() {

    let material = Number(document.getElementById("materialCost").value) || 0;
    let labour = Number(document.getElementById("labourCharge").value) || 0;

    document.getElementById("totalAmount").value = material + labour;

}

document.getElementById("jobPhoto").addEventListener("change", function (event) {

    const file = event.target.files[0];

    if (file) {

        const reader = new FileReader();

        reader.onload = function (e) {

            const preview = document.getElementById("photoPreview");

            preview.src = e.target.result;
            preview.style.display = "block";

        };

        reader.readAsDataURL(file);

    }

});

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

    let materialList = document.getElementById("materialList").value;

    let material = document.getElementById("materialCost").value;
    let labour = document.getElementById("labourCharge").value;
    let total = document.getElementById("totalAmount").value;    doc.setFontSize(20);
    doc.text("Sri Lanka Kamal Welding Works", 20, 20);

    doc.setFontSize(14);
    doc.text("Quotation", 20, 35);

    doc.setFontSize(11);

    doc.text("Customer : " + customer, 20, 50);
    doc.text("Phone : " + phone, 20, 58);
    doc.text("Date : " + date, 20, 66);
    doc.text("Address : " + address, 20, 74);
    doc.text("Job Type : " + job, 20, 82);

    doc.text("Measurements", 20, 94);
    doc.text("Length : " + length + " ft", 25, 102);
    doc.text("Width : " + width + " ft", 25, 110);
    doc.text("Height : " + height + " ft", 25, 118);

    doc.text("Material List", 20, 130);

    let lines = doc.splitTextToSize(materialList || "-", 165);
    doc.text(lines, 20, 138);

    let y = 138 + (lines.length * 7) + 10;

    doc.text("Material Cost : Rs. " + material, 20, y);
    doc.text("Labour Charge : Rs. " + labour, 20, y + 10);

    doc.setFont(undefined, "bold");
    doc.text("Total Amount : Rs. " + total, 20, y + 22);
    doc.setFont(undefined, "normal");

    doc.line(20, y + 35, 190, y + 35);

    doc.text("Customer Signature", 20, y + 48);
    doc.text("Authorized Signature", 120, y + 48);

    doc.save("Quotation.pdf");

}
