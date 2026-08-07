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
/* ==========================================
   Material Table Management
========================================== */

const materialBody = document.querySelector("#materialTable tbody");

function createEmptyRow(material = "", unit = "") {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <select class="materialName"></select>
        </td>

        <td>
            <input type="number" class="qty" value="0" min="0">
        </td>

        <td>
            <input type="text" class="unit" value="${unit}" readonly>
        </td>

        <td>
            <input type="number" class="rate" value="0" min="0">
        </td>

        <td>
            <input type="number" class="total" value="0" readonly>
        </td>
    `;

    materialBody.appendChild(row);

    const select = row.querySelector(".materialName");

    select.innerHTML = `<option value="">-- Select Material --</option>`;

    MATERIALS.forEach(item => {

        const option = document.createElement("option");

        option.value = item.name;
        option.textContent = item.name;

        select.appendChild(option);

    });

    select.value = material;

    if (material) {

        const found = MATERIALS.find(m => m.name === material);

        if (found) {
            row.querySelector(".unit").value = found.unit;
        }

    }

    select.addEventListener("change", function () {

        const found = MATERIALS.find(m => m.name === this.value);

        row.querySelector(".unit").value =
            found ? found.unit : "";

        calculateTotals();

    });

}
/* ==========================================
   Smart Job Type Material Fill
========================================== */

const jobTypeSelect = document.getElementById("jobType");

jobTypeSelect.addEventListener("change", function () {

    const job = this.value;

    // Clear existing rows
    materialBody.innerHTML = "";

    if (!job || !JOB_TYPES[job]) {

        createEmptyRow();
        return;

    }

    // Create rows automatically
    JOB_TYPES[job].forEach(materialName => {

        createEmptyRow(materialName);

    });

    calculateTotals();

});
