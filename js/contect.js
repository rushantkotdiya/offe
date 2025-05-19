document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const nameRegex = /^[A-Za-z]{3,6}$/;

    if (!name || !email || !message) {
      alert("All fields are required.");
      e.preventDefault();
    } else if (!nameRegex.test(name)) {
      alert("Name must be 3 to 6 alphabets only.");
      e.preventDefault();
    }
  });
});











  document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Demo credentials
  const validEmail = "user@example.com";
  const validPassword = "123456";

  if (email === validEmail && password === validPassword) {
    alert("Login successful!");
    errorMsg.textContent = "";
    // Redirect or continue to dashboard
  } else {
    errorMsg.textContent = "Invalid email or password.";
  }
});






  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  window.onclick = function (event) {
    ['applyModal', 'registerModal'].forEach(modalId => {
      const modal = document.getElementById(modalId);
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }



  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    if (hamburger && navbar) {
      hamburger.addEventListener("click", function () {
        navbar.classList.toggle("show");
      });
    }
  });





