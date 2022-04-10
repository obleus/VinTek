async function signupFormHandler(event) {
  event.preventDefault();

  const fullname = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (fullname && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        email,
        fullname,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
