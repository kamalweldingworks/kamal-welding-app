
/* ==========================================
   Sri Lanka Kamal Welding Works
   Welding Quotation App V2.0
   Script Part 1
========================================== */

// ---------- Page Load ----------

document.addEventListener("DOMContentLoaded", () => {

    generateQuotationNumber();
    setTodayDate();
    previewPhoto();

});

// ---------- Auto Quotation Number ----------

function generateQuotationNumber() {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    const random = Math.floor(Math.random() * 900 + 100);

    document.getElementById("quotationNo").value =
        `Q-${year}${month}${day}-${random}`;

}

// ---------- Today's Date ----------

function setTodayDate() {

    const today = new Date().toISOString().split("T")[0];

    document.getElementById("quotationDate").value = today;

}

// ---------- Photo Preview ----------

function previewPhoto() {

    const input = document.getElementById("jobPhoto");

    const preview = document.getElementById("photoPreview");

    input.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            preview.src = e.target.result;

        };

        reader.readAsDataURL(file);

    });

}
