function calculateTotal() {

    let material = Number(document.getElementById("materialCost").value) || 0;
    let labour = Number(document.getElementById("labourCharge").value) || 0;

    document.getElementById("totalAmount").value = material + labour;

}

document.getElementById("language").addEventListener("change", changeLanguage);

function changeLanguage(){

    let lang = document.getElementById("language").value;

    if(lang=="si"){

        document.getElementById("lblCustomer").innerHTML="පාරිභෝගිකයාගේ නම";
        document.getElementById("lblPhone").innerHTML="දුරකථන අංකය";
        document.getElementById("lblDate").innerHTML="දිනය";
        document.getElementById("lblAddress").innerHTML="ලිපිනය";
        document.getElementById("lblJob").innerHTML="වැඩ වර්ගය";

    }else{

        document.getElementById("lblCustomer").innerHTML="Customer Name";
        document.getElementById("lblPhone").innerHTML="Phone Number";
        document.getElementById("lblDate").innerHTML="Date";
        document.getElementById("lblAddress").innerHTML="Address";
        document.getElementById("lblJob").innerHTML="Job Type";

    }

}

function downloadPDF(){

    calculateTotal();

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    let lang=document.getElementById("language").value;

    let customer=document.getElementById("customerName").value;
    let phone=document.getElementById("customerPhone").value;
    let date=document.getElementById("quotationDate").value;
    let address=document.getElementById("customerAddress").value;
    let job=document.getElementById("jobType").value;

    let length=document.getElementById("length").value;
    let width=document.getElementById("width").value;
    let height=document.getElementById("height").value;

    let materialList=document.getElementById("materialList").value;

    let material=document.getElementById("materialCost").value;
    let labour=document.getElementById("labourCharge").value;
    let total=document.getElementById("totalAmount").value;
        doc.setFontSize(20);
    doc.text("Sri Lanka Kamal Welding Works", 20, 20);

    doc.setFontSize(12);

    if(lang=="si"){

        doc.text("Quotation",20,35);

        doc.text("Customer : " + customer,20,50);
        doc.text("Phone : " + phone,20,60);
        doc.text("Date : " + date,20,70);
        doc.text("Address : " + address,20,80);
        doc.text("Job Type : " + job,20,90);

        doc.text("Length : " + length + " ft",20,100);
        doc.text("Width : " + width + " ft",20,110);
        doc.text("Height : " + height + " ft",20,120);

        doc.text("Material List",20,130);
        doc.text(materialList,20,140);

        doc.text("Material Cost : Rs. " + material,20,180);
        doc.text("Labour Charge : Rs. " + labour,20,190);
        doc.text("Total Amount : Rs. " + total,20,200);

    }else{

        doc.text("Quotation",20,35);

        doc.text("Customer : " + customer,20,50);
        doc.text("Phone : " + phone,20,60);
        doc.text("Date : " + date,20,70);
        doc.text("Address : " + address,20,80);
        doc.text("Job Type : " + job,20,90);

        doc.text("Length : " + length + " ft",20,100);
        doc.text("Width : " + width + " ft",20,110);
        doc.text("Height : " + height + " ft",20,120);

        doc.text("Material List",20,130);
        doc.text(materialList,20,140);

        doc.text("Material Cost : Rs. " + material,20,180);
        doc.text("Labour Charge : Rs. " + labour,20,190);
        doc.text("Total Amount : Rs. " + total,20,200);

    }

    doc.save("Quotation.pdf");

}
