document.getElementById("sendOtp").addEventListener("click", function () {
  document.getElementById("otpBox").style.display = "block";
  alert("OTP sent (demo)");
});

document.getElementById("admissionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully (demo)");
});
