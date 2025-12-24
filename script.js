const form = document.getElementById("admissionForm");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otpInput");
const captchaCheck = document.getElementById("captchaCheck");

let generatedOtp = "";

/* STEP 1: SEND OTP */
sendOtpBtn.addEventListener("click", () => {

  if (!captchaCheck.checked) {
    alert("Please confirm CAPTCHA");
    return;
  }

  generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Dummy OTP:", generatedOtp);

  alert("OTP sent successfully (Dummy OTP: " + generatedOtp + ")");
  otpSection.style.display = "block";
});

/* STEP 2: VERIFY OTP + SUBMIT */
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

  fetch("PASTE_POWER_AUTOMATE_URL_HERE", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (!res.ok) throw new Error("Flow error");
    return res.json();
  })
  .then(() => {
    alert("Application submitted successfully!");
    form.reset();
    otpSection.style.display = "none";
  })
  .catch(err => {
    console.error(err);
    alert("Submission failed. Check Power Automate.");
  });
});
