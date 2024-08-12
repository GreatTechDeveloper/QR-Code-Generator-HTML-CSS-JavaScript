const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const qrBtn = document.getElementById("qrBtn");
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQr() {
  if (qrText.value.length > 0) {
    imgBox.classList.add("show-img");
    qrImage.src = url + encodeURIComponent(qrText.value);
    qrText.classList.remove("error"); // مطمئن شوید که کلاس error در حالت درست حذف می‌شود
  } else {
    imgBox.classList.remove("show-img");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

qrBtn.addEventListener("click", () => {
  generateQr();
});
