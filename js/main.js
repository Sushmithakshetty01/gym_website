// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  /* ========== NAV TOGGLE ========== */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  }

  /* ========== LOADER ========== */
  const loader = document.querySelector(".loader-overlay");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.opacity = "0";
      setTimeout(() => loader.remove(), 300);
    });
  }

  /* ========== FOOTER YEAR ========== */
  const yearSpan = document.querySelector("[data-current-year]");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ========== GALLERY LIGHTBOX ========== */
  const galleryItems = document.querySelectorAll("[data-lightbox-src]");
  const lightbox = document.querySelector(".lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (galleryItems && lightbox && lightboxContent && lightboxClose) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const src = item.getAttribute("data-lightbox-src");
        const type = item.getAttribute("data-type") || "image";
        lightboxContent.innerHTML = "";

        if (type === "video") {
          const video = document.createElement("video");
          video.src = src;
          video.controls = true;
          video.autoplay = true;
          video.className = "max-w-[90vw] max-h-[90vh]";
          lightboxContent.appendChild(video);
        } else {
          const img = document.createElement("img");
          img.src = src;
          img.alt = "Gallery item";
          img.className = "max-w-[90vw] max-h-[90vh]";
          lightboxContent.appendChild(img);
        }

        lightbox.classList.add("open");
      });
    });

    lightboxClose.addEventListener("click", () =>
      lightbox.classList.remove("open")
    );

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("open");
      }
    });
  }

  /* ========== CONTACT FORM + CAPTCHA ========== */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const captchaInput = document.getElementById("captcha");
      if (!captchaInput || captchaInput.value.trim() !== "9") {
        e.preventDefault();
        alert("Please solve the captcha correctly (3 + 6 = ?).");
      }
    });
  }

  /* ========== WHATSAPP GOAL MESSAGE (CONTACT PAGE) ========== */
  const goalSelect = document.getElementById("fitness-goal");
  const goalBtn = document.getElementById("whatsapp-goal-btn");

  if (goalSelect && goalBtn) {
    goalBtn.addEventListener("click", () => {
      const goal = goalSelect.value;
      if (!goal) {
        alert("Please select your fitness goal first.");
        return;
      }

      const baseText = `Hello Weapon Fitness 2, I am interested in your gym and my primary fitness goal is ${goal.toUpperCase()}. Could you please share more details on suitable programs?`;
      const encoded = encodeURIComponent(baseText);
      const waUrl = `https://wa.me/919916577094?text=${encoded}`;
      window.open(waUrl, "_blank");
    });
  }
});
