/* ==========================================
   Sri Lanka Kamal Welding Works
   Welding Quotation App V3.0
========================================== */

// App Start
document.addEventListener("DOMContentLoaded", () => {

    generateQuotationNumber();
    setTodayDate();
    setupPhotoPreview();
    createEmptyRow();

});

// Generate Quotation Number
function generateQuotationNumber() {

    const now = new Date();

    const no =
        "Q-" +
        now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0") +
        "-" +
        Math.floor(Math.random() * 900 + 100);

    document.getElementById("quotationNo").value = no;

}

// Set Today's Date
function setTodayDate() {

    document.getElementById("quotationDate").value =
        new Date().toISOString().split("T")[0];

}

// Photo Preview
function setupPhotoPreview() {

    const input = document.getElementById("jobPhoto");
    const preview = document.getElementById("photoPreview");

    input.addEventListener("change", function () {

        if (!this.files.length) return;

        const reader = new FileReader();

        reader.onload = e => {

            preview.src = e.target.result;

        };

        reader.readAsDataURL(this.files[0]);

    });

}
