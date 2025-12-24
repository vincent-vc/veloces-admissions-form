const form = document.getElementById("admissionForm");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otpInput");

let generatedOtp = "";

/* SEND OTP */
sendOtpBtn.addEventListener("click", () => {
  const mobile = form.querySelector("input[name='mobile']").value;

  if (!mobile) {
    alert("Please enter mobile number");
    return;
  }

  generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("OTP (demo):", generatedOtp);

  alert("OTP sent successfully (demo mode)");
  otpSection.style.display = "block";
});

/* VERIFY OTP & SUBMIT */
verifyOtpBtn.addEventListener("click", () => {
  if (otpInput.value !== generatedOtp) {
    alert("Invalid OTP");
    return;
  }

  const data = {
    fullname: form.fullname.value,
    email: form.email.value,
    mobile: form.mobile.value,
    state: form.state.value,
    city: form.city.value,
    school: form.school.value,
    interestedCourse: form.course.value,
    interestedCampus: form.campus.value,
    source: "PowerPages"
  };

  fetch("PASTE_YOUR_POWER_AUTOMATE_HTTP_URL_HERE", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (res.ok) {
      alert("Application submitted successfully!");
      form.reset();
      otpSection.style.display = "none";
    } else {
      alert("Submission failed");
    }
  })
  .catch(err => {
    console.error(err);
    alert("Error submitting form");
  });
});
