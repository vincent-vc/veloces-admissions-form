const form = document.getElementById("admissionForm");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otpInput");
const captchaCheck = document.getElementById("captchaCheck");

let generatedOtp = "";

/* STEP 1: SEND OTP (DUMMY) */
sendOtpBtn.addEventListener("click", () => {

  if (!captchaCheck.checked) {
    alert("Please confirm CAPTCHA");
    return;
  }

  // Generate 6-digit dummy OTP
  generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("Dummy OTP:", generatedOtp);
  alert("OTP sent successfully (Dummy OTP: " + generatedOtp + ")");

  otpSection.style.display = "block";
});

/* STEP 2: VERIFY OTP & SUBMIT FORM */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (otpInput.value !== generatedOtp) {
    alert("Invalid OTP");
    return;
  }

  const data = {
    fullName: form.fullname.value,
    email: form.email.value,
    mobile: form.mobile.value,
    state: form.state.value,
    city: form.city.value,
    school: form.school.value,
    interestedCourse: form.course.value,
    interestedCampus: form.campus.value,
    source: "PowerPages"
  };

  fetch("https://default7893b769b86349d4803e14f199ae8a.ee.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/210cfe3a2b7a4392bb381ac494c444fd/triggers/manual/paths/invoke?api-version=1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Power Automate failed");
    }
    return response.json();
  })
  .then(() => {
    alert("Application submitted successfully!");
    form.reset();
    otpSection.style.display = "none";
  })
  .catch(error => {
    console.error(error);
    alert("Submission failed. Check Power Automate flow.");
  });
});

