document.addEventListener("DOMContentLoaded", function () {
  var toastEl = document.getElementById("toaster");
  if (toastEl) {
    var toast = new bootstrap.Toast(toastEl, { delay: 3500 });
    toast.show();
  }
});
