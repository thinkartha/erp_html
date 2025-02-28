// html/static/js/sign-up.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sign-up-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);

  
  });
});
