
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
/* ==========================================
   Material Row Management
========================================== */

const addBtn = document.getElementById("addMaterial");
const removeBtn = document.getElementById("removeMaterial");
const materialTable = document.querySelector("#materialTable tbody");

// Add Material Row
addBtn.addEventListener("click", function () {

    const row = materialTable.insertRow();

    row.innerHTML = `
        <td>
            <select class="materialName">
                <option value="">-- Select Material --</option>
                <option>2x2 Box Bar</option>
                <option>2x1 Box Bar</option>
                <option>1x2 Box Bar</option>
                <option>1x1 Box Bar</option>
                <option>3x3 Box Bar</option>
                <option>Angle Iron</option>
                <option>Flat Bar</option>
                <option>Round Bar</option>
                <option>12mm Rod</option>
                <option>10mm Rod</option>
                <option>8mm Rod</option>
                <option>Amano Sheet</option>
                <option>C Purlin</option>
                <option>Welding Rod</option>
                <option>Cutting Disc</option>
                <option>Grinding Disc</option>
                <option>Primer Paint</option>
                <option>Finish Paint</option>
                <option>Thinner</option>
                <option>Hinges</option>
                <option>Lock</option>
                <option>Wheel</option>
                <option>Screw</option>
                <option>Nut & Bolt</option>
            </select>
        </td>

        <td><input type="number" class="qty" value="0"></td>

        <td><input type="text" class="unit"></td>

        <td><input type="number" class="rate" value="0"></td>

        <td><input type="number" class="total" value="0" readonly></td>
    `;

});

// Remove Material Row
removeBtn.addEventListener("click", function () {

    if (materialTable.rows.length > 1) {

        materialTable.deleteRow(materialTable.rows.length - 1);

    }

});
/* ==========================================
   Auto Calculate System
========================================== */

function calculateTotals() {

    const rows = document.querySelectorAll("#materialTable tbody tr");

    let materialCost = 0;

    rows.forEach(function(row){

        const qty =
        parseFloat(row.querySelector(".qty").value) || 0;

        const rate =
        parseFloat(row.querySelector(".rate").value) || 0;

        const total = qty * rate;

        row.querySelector(".total").value =
        total.toFixed(2);

        materialCost += total;

    });

    document.getElementById("materialCost").value =
    materialCost.toFixed(2);

    const labour =
    parseFloat(document.getElementById("labourCost").value) || 0;

    const transport =
    parseFloat(document.getElementById("transportCost").value) || 0;

    const other =
    parseFloat(document.getElementById("otherCost").value) || 0;

    const discount =
    parseFloat(document.getElementById("discount").value) || 0;

    const grandTotal =
    materialCost + labour + transport + other - discount;

    document.getElementById("grandTotal").value =
    grandTotal.toFixed(2);

}

/* ==========================================
   Live Calculation
========================================== */

document.addEventListener("input", function(e){

    if(
        e.target.classList.contains("qty") ||
        e.target.classList.contains("rate") ||
        e.target.id=="labourCost" ||
        e.target.id=="transportCost" ||
        e.target.id=="otherCost" ||
        e.target.id=="discount"
    ){

        calculateTotals();

    }

});

/* ==========================================
   Calculate Button
========================================== */

document.getElementById("calculateBtn").addEventListener("click",function(){

    calculateTotals();

    

});

/* ==========================================
   PART 5 - AUTO MATERIAL LIST
========================================== */

const materialDatabase = {
    "Gate": [
        "2x2 Box Bar",
        "1x1 Box Bar",
        "12mm Rod",
        "Welding Rod",
        "Primer Paint"
    ],

    "Roof": [
        "2x2 Box Bar",
        "C Purlin",
        "Amano Sheet",
        "Welding Rod",
        "Roof Screw"
    ],

    "Handrail": [
        "2x2 Box Bar",
        "1x1 Box Bar",
        "Welding Rod",
        "Grinding Disc",
        "Finish Paint"
    ],

    "Grill": [
        "1x1 Box Bar",
        "10mm Rod",
        "Welding Rod",
        "Primer Paint",
        "Finish Paint"
    ],

    "Stair Handrail": [
        "2x2 Box Bar",
        "1x1 Box Bar",
        "12mm Rod",
        "Welding Rod",
        "Finish Paint"
    ]
};

/* ==========================================
   Smart Auto Material Fill V2.1
========================================== */

document.getElementById("jobType").addEventListener("change", function () {

    const job = this.value;

    if (!JOB_TYPES[job]) return;

    const rows = document.querySelectorAll("#materialTable tbody tr");

    rows.forEach((row, index) => {

        const materialName = JOB_TYPES[job][index] || "";

        row.querySelector(".materialName").value = materialName;

        row.querySelector(".qty").value = 0;
        row.querySelector(".rate").value = 0;
        row.querySelector(".total").value = 0;

        const material = MATERIALS.find(m => m.name === materialName);

        row.querySelector(".unit").value = material ? material.unit : "";

    });

    calculateTotals();

});
