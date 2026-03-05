function generateQRCode() {

    const inputText = document.getElementById("input-text").value.trim();
    const qrCodeImage = document.getElementById("qrcode");
    const toast = document.getElementById("toast");
    const button = document.querySelector(".btn");

    // Validation
    if (!inputText) {
        showToast("Please enter text or a URL", "error");
        return;
    }

    // Disable button while generating
    button.disabled = true;
    button.innerText = "Generating...";

    // Generate QR URL
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200`;

    // Load QR code
    qrCodeImage.onload = () => {
        button.disabled = false;
        button.innerText = "Generate QR";
        showToast("QR Code Generated Successfully 🎉", "success");
    };

    qrCodeImage.onerror = () => {
        button.disabled = false;
        button.innerText = "Generate QR";
        showToast("Failed to generate QR code", "error");
    };

    qrCodeImage.src = qrCodeUrl;
    qrCodeImage.style.display = "block";
}


/* Toast function */
function showToast(message, type = "success") {

    const toast = document.getElementById("toast");

    toast.innerText = message;
    toast.style.display = "block";

    if (type === "error") {
        toast.style.background = "#dc3545";
    } else {
        toast.style.background = "#28a745";
    }

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}


/* Optional UX improvement: clear QR when user edits input */

document.getElementById("input-text").addEventListener("input", () => {
    const qrCodeImage = document.getElementById("qrcode");
    qrCodeImage.style.display = "none";
});