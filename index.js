let imgBox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrText = document.getElementById("qrText");
function generateQR() {
  if (qrText.value.trim() === "") return;

  qrimage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(qrText.value);

  document.getElementById("imgbox").style.display = "flex";
}
