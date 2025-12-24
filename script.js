const form = document.getElementById("admissionForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    fullName: form.querySelector("input[name='fullname']").value,
    email: form.querySelector("input[name='email']").value,
    mobile: form.querySelector("input[name='mobile']").value,
    state: form.querySelector("input[name='state']").value,
    city: form.querySelector("input[name='city']").value,
    school: form.querySelector("input[name='school']").value,
    interestedCourse: form.querySelector("select[name='course']").value,
    interestedCampus: form.querySelector("select[name='campus']").value,
    source: "PowerPages"
  };

  fetch("https://default7893b769b86349d4803e14f199ae8a.ee.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/210cfe3a2b7a4392bb381ac494c444fd/triggers/manual/paths/invoke?api-version=1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (res.ok) {
      alert("Application submitted successfully!");
      form.reset();
    } else {
      alert("Submission failed. Try again.");
    }
  })
  .catch(err => {
    console.error(err);
    alert("Error submitting form.");
  });
});
