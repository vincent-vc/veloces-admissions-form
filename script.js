const form = document.getElementById("admissionForm");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otpInput");
const captchaCheck = document.getElementById("captchaCheck");

let generatedOTP = null;

/* STEP 1: SEND OTP (DUMMY) */
sendOtpBtn.addEventListener("click", () => {

  // CAPTCHA validation
  if (!captchaCheck.checked) {
    alert("Please verify CAPTCHA");
    return;
  }

  // Generate dummy OTP
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("Dummy OTP:", generatedOTP); // For testing
  alert("Dummy OTP sent: " + generatedOTP);

  otpSection.style.display = "block";
  sendOtpBtn.disabled = true;
});

/* STEP 2: VERIFY OTP & SUBMIT */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (otpInput.value !== generatedOTP) {
    alert("Invalid OTP");
    return;
  }

  const data = {
    FullName: form.fullname.value,
    Email: form.email.value,
    Mobile: form.mobile.value,
    State: form.state.value,
    City: form.city.value,
    School: form.school.value,
    InterestedCourse: form.course.value,
    InterestedCampus: form.campus.value,
    Source: "PowerPages"
  };

  fetch("YOUR_POWER_AUTOMATE_URL_HERE", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (res.ok) {
      alert("Application submitted successfully!");
      form.reset();
      otpSection.style.display = "none";
      sendOtpBtn.disabled = false;
    } else {
      alert("Submission failed.");
    }
  })
  .catch(err => {
    console.error(err);
    alert("Error submitting form.");
  });
});
