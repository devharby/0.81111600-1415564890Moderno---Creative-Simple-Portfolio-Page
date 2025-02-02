// const menu = document.getElementById("menu");
// const menuraber = document.getElementById("menu-raber");
// const closemenu = document.getElementById("close");

// menu.onclick = function () {
//   menuraber.style.display = "flex";
// };

// closemenu.onclick = function () {
//   menuraber.style.display = "none";
// };


document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
  const menuToggle = document.querySelector("#menu-toggle");
  const menuRaber = document.querySelector("#menu-raber");
  const backdrop = document.querySelector(".backdrop");
  const closeBtn = document.querySelector("#close");

  if (menuToggle) {
      menuToggle.addEventListener("click", function () {
          menuRaber.style.display = "block";
          backdrop.style.width = "100vw";
          backdrop.style.height = "100vh";
      });
  }

  if (closeBtn) {
      closeBtn.addEventListener("click", function () {
          menuRaber.style.display = "none";
          backdrop.style.width = "0";
          backdrop.style.height = "0";
      });
  }

  // Smooth scroll for links
  const scrollLinks = document.querySelectorAll("a[href^='#']");
  scrollLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });

  // Service box hover effect
  const serviceBoxes = document.querySelectorAll(".service-box");
  serviceBoxes.forEach(box => {
      box.addEventListener("mouseenter", function () {
          this.classList.add("hovered");
      });
      box.addEventListener("mouseleave", function () {
          this.classList.remove("hovered");
      });
  });

  // Contact form validation
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const name = document.querySelector("#name").value.trim();
          const email = document.querySelector("#email").value.trim();
          const message = document.querySelector("#message").value.trim();
          
          if (name === "" || email === "" || message === "") {
              alert("يرجى ملء جميع الحقول");
              return;
          }
          
          alert("تم إرسال رسالتك بنجاح!");
          contactForm.reset();
      });
  }
});





